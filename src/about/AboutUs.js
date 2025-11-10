import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import "./AboutUs.css";
import Img1 from "../images/about-us-imgs/IMG-20250921-WA0001.jpg";
import Img2 from "../images/about-us-imgs/IMG-20250921-WA0002.jpg";
import Img3 from "../images/about-us-imgs/IMG-20250921-WA0003.jpg";
import Img4 from "../images/about-us-imgs/IMG-20250921-WA0004.jpg";
import Img5 from "../images/about-us-imgs/achieve.gif";
import Img6 from "../images/about-us-imgs/IMG-20250921-WA0006.jpg";
import { useState } from "react";

function AboutUs() {
  const [teamName, setTeamName] = useState("Development");

  return (
    <div>
      <Nav />
      <div className="about-us-container">
        <div className="about-us-header">
          <h1 className="about-us-heading">About Us</h1>
          <div className="header-title">
            We provide expert guidance, personalized counseling, and reliable
            resources to simplify the complex admission process. Whether you're
            exploring career options, preparing for entrance exams, or looking
            for the best-fit college.
          </div>
        </div>
        <div className="image-container">
          <img src={Img1} className="img-odd" alt="img" />
          <img src={Img2} className="img-even" alt="img" />
          <img src={Img3} className="img-odd" alt="img" />
          <img src={Img4} className="img-even" alt="img" />
        </div>
        <div className="our-mission-container">
          <div className="mission-header">
            <span style={{ color: "#637AB9" }}> OUR</span>
            <span style={{ color: "#4FB7B3" }}> MISSION</span>
          </div>
          Our mission at Campus Dekho.Ai is to provide students with a seamless,
          transparent, and personalized admission experience. We are committed
          to offering accurate and up-to-date information on colleges, courses,
          and entrance exams while providing expert mentorship to help students
          choose the right path. Through AI-driven college prediction tools and
          collaborations with top universities, we strive to make the admission
          process more structured and accessible.
        </div>
        <div className="our-vision-container">
          <div className="vision-img">
            <img src={Img5} alt="img"></img>
          </div>
          <div className="vision-text">
            <div className="mission-header">
              <span style={{ color: "#637AB9" }}> OUR</span>
              <span style={{ color: "#fff" }}> VISION</span>
            </div>
            At Campus Dekho, we envision a future where every student has access
            to the right guidance and the best educational opportunities,
            regardless of background or location. Our goal is to become the most
            trusted and innovative platform that simplifies the college
            admission process, empowers students with knowledge, and bridges the
            gap between aspiring learners and top institutions. By leveraging
            technology, expert mentorship, and data-driven insights, we aim to
            create a world where students can confidently make informed
            decisions about their careers and academic journeys.
          </div>
        </div>
        <div className="card-data-container">
          <div className="data-card">
            <div className="data-title"> 10,000+</div>
            <div className="data-description"> Student</div>
          </div>
          <div className="data-card">
            <div className="data-title"> 15</div>
            <div className="data-description"> Counsellors</div>
          </div>
          <div className="data-card">
            <div className="data-title"> 10</div>
            <div className="data-description"> Experts</div>
          </div>
          <div className="data-card">
            <div className="data-title"> 325+</div>
            <div className="data-description"> Colleges</div>
          </div>
        </div>
        <div className="team-container">
          <div className="mission-header">
            <span style={{ color: "#637AB9" }}> OUR</span>
            <span style={{ color: "#fff" }}> SQUAD</span>
          </div>
          <div className="team-heading">
            <div className="team-names">
              <h2 onClick={() => setTeamName("Development")}>
                Development Team
              </h2>{" "}
              <h2 onClick={() => setTeamName("Marketing")}>Marketing Team</h2>
              <h2 onClick={() => setTeamName("Counselling")}>Counselling Team</h2>
            </div>
            {teamName === "Development" && (
              <div className="team-data">
                <div className="team-card">
                  <img src={Img6} alt="img"></img>
                  <div className="name-heading">Ujwalsing Shinde</div>
                  <div className="designation-heading">
                    Senior Front-End Developer
                  </div>
                </div>
                <div className="team-card">
                  <img src={Img6} alt="img"></img>
                  <div className="name-heading">Vaibhav Shinde</div>
                  <div className="designation-heading">
                    Senior Back-End Developer
                  </div>
                </div>
                <div className="team-card">
                  <img src={Img6} alt="img"></img>
                  <div className="name-heading">Snehal Gaikwad</div>
                  <div className="designation-heading">
                    Senior Front-End Developer
                  </div>
                </div>
              </div>
            )}
            {teamName === "Marketing" && (
              <div className="team-data">
                <div className="team-card">
                  <img src={Img6} alt="img"></img>
                  <div className="name-heading">Tarun</div>
                  <div className="designation-heading">
                    Senior Front-End Developer
                  </div>
                </div>
                <div className="team-card">
                  <img src={Img6} alt="img"></img>
                  <div className="name-heading">Arun</div>
                  <div className="designation-heading">
                    Senior Back-End Developer
                  </div>
                </div>
                <div className="team-card">
                  <img src={Img6} alt="img"></img>
                  <div className="name-heading">Vishu</div>
                  <div className="designation-heading">
                    Senior Front-End Developer
                  </div>
                </div>
              </div>
            )}
            {teamName === "Counselling" && (
              <div className="team-data">
                <div className="team-card">
                  <img src={Img6} alt="img"></img>
                  <div className="name-heading">Harshali Bhandari</div>
                  <div className="designation-heading">Counsellor</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
