import * as React from "react";
import "./Home.css";
import Nav from "../nav/Nav";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BackImg from "../images/study-doodle-background-vector.jpg";
import CollegeIcon from "../images/school_2231696.png";
import Predictor from "../images/development_11906329.png";
import CollegeList from "../images/menu_2765570.png";
import List from "../images/list_1647738.png";
import BackgroundImg from "../images/horizontal-banner-hands-typing-on-260nw-1090844168.jpg";
import axios from "axios";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import UsImg from "../images/original-019e4664f37d52f68c1fedc61892d3a8.gif";
import JobImg from "../images/pngtree-people-working-on-laptops-in-a-cafe-one-of-them-has-image_16692898.jpg";
import StudentImg from "../images/student-working-with-laptop_23-2147666826.jpg";
import CareerImg from "../images/Image_20250904_182845_897.jpeg";
import FormBackImg from "../images/vector-pastel-green-brown-abstract-textured-background_53876-110548.jpg";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import HeaderImage from "../images/header-img.gif";
import Footer from "../footer/Footer";
import Toast from "../toast/Toast";
import { Button, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../features/CustomSelect";

const Modal = ({ title, message, onCancel, onConfirm }) => (
  <div className="overlay" onClick={onCancel}>
    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
      <h2 className="modal-header">{title}</h2>
      <p className="mt-2">{message}</p>
      <div className="log-buttons">
        <button className="modal-btn cancel" onClick={onCancel}>
          Cancel
        </button>
        <button className="modal-btn" onClick={onConfirm}>
          Login
        </button>
      </div>
    </div>
  </div>
);

function Home() {
  const [news, setNews] = useState([]);
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();
  const [showSignModal, setShowSignModal] = useState(false);
  const [requestCallbackData, setRequestCallbackData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    stream: "",
    message: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const streams = ["Engineering", "Pharmacy", "Management"];
  const googleNewsRss =
    "https://news.google.com/rss/search?q=NEET+महाराष्ट्र+प्रवेश+निकाल+JEE+महाराष्ट्र+प्रवेश+निकाल&hl=mr&gl=IN&ceid=IN:mr";

  const rss2jsonEndpoint =
    "https://api.rss2json.com/v1/api.json?rss_url=" +
    encodeURIComponent(googleNewsRss);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(rss2jsonEndpoint);
        setNews(response.data.items);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  const showTopFeatures = (url) => {
    const username = sessionStorage.getItem("username");
    const password = sessionStorage.getItem("password");

    if (username && password) {
      navigate(url);
    } else {
      setShowSignModal(true);
    }
  };

  const redirectToLogin = () => {
    navigate("/login");
  };

  const requestACallback = () => {
    if (requestCallbackData) {
      sessionStorage.setItem(
        "request-data",
        JSON.stringify(requestCallbackData)
      );
      showSnackbar("✅ Request submitted successfully!", "success");
    }
  };

  const showSnackbar = (message, severity = "success") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Nav />
      <div className="home">
        <div className="header-container">
          <div className="header-text">
            <h1>Find Your Perfect Career Path</h1>
            <div className="description">
              Discover personalized career recommendations based on your skills,
              interest and market trends. Let us guide you to professional
              success
            </div>
            <div className="btn-div">
              <button className="header-btn">
                Start Your Journey
                <span>
                  {" "}
                  <FontAwesomeIcon className="ml-1" icon={faArrowRight} />
                </span>
              </button>
              <button className="header-btn">
                Learn More
                <span>
                  <FontAwesomeIcon className="ml-1" icon={faArrowRight} />
                </span>
              </button>
            </div>
          </div>
          <div className="header-img">
            <img className="" src={HeaderImage}></img>
          </div>
        </div>

        {/* features */}
        <div className="features-container ml-2">
          <img src={BackImg}></img>
          <div className="heading-div">
            <span className="heading">Ease Your Process With</span>{" "}
            <span className="highlight-text"> Our Tools</span>
            <div>
              Choose any of our tool and start your career path with trust.
            </div>
          </div>
          <div className="d-flex card-container">
            <div className="cards">
              <div className="card-body">
                <div className="card-icon">
                  <img src={CollegeList} />
                </div>
                <h5 className="card-title mt-4">Preference List Generator</h5>
                <p className="card-text">
                  A tool used organize and manage preferences
                </p>
                <div
                  onClick={() => showTopFeatures("/preference-list")}
                  className="more-btn"
                >
                  View More <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
            </div>
            <div className="ml-2 cards">
              <div className="card-body">
                <div className="card-icon">
                  <img src={List} height={"50px"} />
                </div>
                <h5 className="card-title mt-3">Branch wise cutoff list</h5>
                <p className="card-text">
                  A list contains college names with their score for college
                  admission eligibility.
                </p>
                <div
                  onClick={() => showTopFeatures("/branch-list")}
                  className="more-btn"
                >
                  View More <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="card-body">
                <div className="card-icon">
                  <img src={CollegeIcon} height={"50px"} />
                </div>
                <h5 className="card-title mt-4">Top Colleges List</h5>
                <p className="card-text">
                  List of best colleges based on various criteria .
                </p>
                <div
                  onClick={() => showTopFeatures("/top-colleges/Management")}
                  className="more-btn"
                >
                  View More <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="card-body">
                <div className="card-icon">
                  <img src={Predictor} height={"50px"} />
                </div>
                <h5 className="card-title mt-4">Colleges Predictor</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <div
                  onClick={() => showTopFeatures("/college-predictor")}
                  className="more-btn"
                >
                  View More <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* news container */}
        <div className="news-container">
          <div className="news-header">
            <span className="heading">Latest News </span>
            <span className="highlight-text">and Notifications</span>
          </div>
          <div className="card-carousel">
            <div className="card-block">
              {news.map((news, index) => (
                <div key={index} className="news-card p-4 ">
                  <h5 className="font-semibold mt-2">{news.title}</h5>
                  <div className="read-more-btn">
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Choose Us */}
        <div className="us-container">
          <img src={BackgroundImg}></img>
          <div className="us-heading">
            <span className="heading">Why Choose</span>
            <span className="highlight-text"> CareerCounselling</span>
          </div>
          <p className="us-description">
            Our intelligent platform helps you navigate your career journey with
            confidence and clarity.
          </p>

          <div className="d-flex">
            <div className="gif-div">
              <img src={UsImg}></img>
            </div>
            <div className="card-div">
              <div className="us-card">
                <h3>Data-Driven Recommendations</h3>
                <p>
                  Our AI analyzes current market trends,jobs demands, and salary
                  data to provide yiu with relevant career options{" "}
                </p>
              </div>
              <div className="us-card">
                <h3>Personalized Matching</h3>
                <p>
                  We match your unique skills and interests with career paths
                  where you're most likely to succeed and find fulfillment.
                </p>
              </div>
              <div className="us-card">
                <h3>Custom Learning Roadmaps</h3>
                <p>
                  Get step-by-step guidance on how to acquire the skills needed
                  for your desired career path.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our story
                <div className="stories-container">
                    <span className="head-text"> What Our Student</span> <span className="highlighted-text">Say</span>
                </div> */}

        {/* Offer */}
        <div className="offer-container">
          <div className="offer-header">
            <span className="heading">What We </span>
            <span className="highlight-text"> Offer</span>
          </div>
          <div className="offer-card-div">
            <div className="offer-card">
              <img src={JobImg} />
              <div className="offer-text">
                <div className="caption-no">𝟘𝟙</div>
                <div className="caption-text">
                  <div className="heading-1">Job Recommendations</div>
                  <div className="heading-2">
                    Personalized job matches tailored to your skills
                  </div>
                </div>
              </div>
            </div>
            <div className="offer-card">
              <img src={StudentImg} />
              <div className="offer-text">
                <div className="caption-no">𝟘𝟚</div>
                <div className="caption-text">
                  <div className="heading-1">Create & Build Portfolio</div>
                  <div className="heading-2">
                    Showcase your expertise with professional portfolio design
                  </div>
                </div>
              </div>
            </div>
            <div className="offer-card">
              <img src={CareerImg} />
              <div className="offer-text">
                <div className="caption-no">𝟘𝟛</div>
                <div className="caption-text">
                  <div className="heading-1">Career Consultation</div>
                  <div className="heading-2">
                    Receive expert advice to navigate your career path.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form container */}
        <div className="form-container">
          <img src={FormBackImg}></img>
          <div className="form-main">
            <div className="form-gif">
              {/* <img src={InquiryImg}></img> */}
              <div className="image-heading">
                <div className="form-heading-1">CAP Round Assistance &</div>
                <div className="form-heading-2">Direct Admission</div>
                <div className="contact-btn">
                  <Button
                    variant="contained"
                    sx={{ background: "#A3CCDA", color: "#000" }}
                  >
                    Contact Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="form-text">
              <div className="form">
                <h2>Inquiry Form</h2>
                <div className="form-group d-flex">
                  <FontAwesomeIcon icon={faUser} className="icon" />
                  <input
                    className="inputFields"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onChange={(e) =>
                      setRequestCallbackData({
                        ...requestCallbackData,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  {/* <label for="email">Email Address</label> */}
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  <input
                    className="inputFields"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={(e) =>
                      setRequestCallbackData({
                        ...requestCallbackData,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="form-group d-flex">
                  <div style={{ width: "50%" }}>
                    <FontAwesomeIcon icon={faPhone} className="icon" />
                    <input
                      className="inputFields"
                      type="tel"
                      name="phoneNo"
                      placeholder="Enter your phone number"
                      onChange={(e) =>
                        setRequestCallbackData({
                          ...requestCallbackData,
                          phoneNo: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="ml-4" style={{ width: "50%" }}>
                    <CustomSelect
                      height={41}
                      borderRadius={7}
                      sx={{ width: '100%' }}
                      options={streams}
                      value={requestCallbackData.stream}
                      placeholder="Choose stream"
                      onChange={(value) =>
                        setRequestCallbackData({
                          ...requestCallbackData,
                          stream: value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="form-group">
                  {/* <label for="message">Your Inquiry</label> */}
                  <FontAwesomeIcon icon={faMessage} className="icon" />
                  <textarea
                    className="inputFields"
                    name="message"
                    placeholder="Write your message here..."
                    required
                    onChange={(e) =>
                      setRequestCallbackData({
                        ...requestCallbackData,
                        message: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <button className="request-btn" onClick={requestACallback}>
                  Request a call back
                </button>
              </div>
            </div>
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={3000}
              onClose={handleCloseSnackbar}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
                marginTop: "10rem",
              }}
            >
              <Alert
                onClose={handleCloseSnackbar}
                severity={snackbarSeverity}
                sx={{ width: "100%" }}
              >
                {snackbarMessage}
              </Alert>
            </Snackbar>
          </div>
        </div>
        <Footer />
      </div>

      {/* Show toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {showSignModal && (
        <Modal
          title="Sign In"
          message="Please sign in first!"
          onCancel={() => setShowSignModal(false)}
          onConfirm={redirectToLogin}
        />
      )}
    </div>
  );
}

export default Home;
