import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Testimonial.css";
import axios from "axios";

function Testimonials() {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;
  const intervalRef = useRef(null);
  const trackRef = useRef(null);
  const transitionDuration = 700;
  const cardWidthPercent = 100 / visibleCards;

  const googleNewsRss =
    "https://news.google.com/rss/search?q=NEET+महाराष्ट्र+प्रवेश+निकाल+JEE+महाराष्ट्र+प्रवेश+निकाल&hl=mr&gl=IN&ceid=IN:mr";
  const rss2jsonEndpoint =
    "https://api.rss2json.com/v1/api.json?rss_url=" +
    encodeURIComponent(googleNewsRss);

  // ✅ Fetch news first, then start slider
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(rss2jsonEndpoint);
        const items = response.data.items || [];
        if (items.length > 0) {
          // duplicate for infinite scroll effect
          setNews([...items, ...items]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  // ✅ Start slider only when news is loaded
  useEffect(() => {
    if (news.length > 0) {
      startAutoSlide();
      return () => stopAutoSlide();
    }
  }, [news]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (next >= news.length - visibleCards) {
          // reset smoothly to start
          setTimeout(() => {
            if (trackRef.current) {
              trackRef.current.style.transition = "none";
              setCurrentIndex(0);
              // force reflow
              void trackRef.current.offsetWidth;
              trackRef.current.style.transition = "transform 0.7s ease";
            }
          }, transitionDuration);
        }
        return next;
      });
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? news.length - visibleCards : prev - 1
    );
    startAutoSlide();
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= news.length - visibleCards ? 0 : prev + 1
    );
    startAutoSlide();
  };

  return (
    <section className="testimonials">
      <div className="testimonial-slider-wrapper">
        <button className="nav-btn left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="testimonial-slider">
          <div
            className="slider-track"
            ref={trackRef}
            style={{
              transform: `translateX(-${currentIndex * cardWidthPercent}%)`,
              transition: "transform 0.7s ease",
            }}
          >
            {news.map((t, i) => {
              const middleIndex =
                (currentIndex + Math.floor(visibleCards / 2)) % news.length;

              return (
                <div
                  className={`testimonial-card ${
                    i === middleIndex ? "active" : ""
                  }`}
                  key={i}
                >
                  <div className="testimonial-card-inner">
                    <FontAwesomeIcon icon={faUser} className="user-icon" />
                    {t.enclosure?.link && (
                      <img
                        src={t.enclosure.link}
                        alt="news"
                        className="customer-img"
                      />
                    )}
                    <p className="review">“{t.title}”</p>
                    <div className="read-more-btn">
                      <a
                        href={t.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button className="nav-btn right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
