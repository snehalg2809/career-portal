import LinkedInIcon from "../images/linkedin.png";
import MailIcon from "../images/google.png";
import TwitterIcon from "../images/twitter.png";
import InstagramIcon from "../images/instagram.png";
import FacebookIcon from "../images/facebook.png";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="copyright">Get in touch with us on social networks</div>
        <div className="social-handles">
          <a href="">
            <img src={InstagramIcon} className="social-icons" />
          </a>
          <a href="">
            <img src={FacebookIcon} className="social-icons" />
          </a>
          <a href="">
            <img src={LinkedInIcon} className="social-icons" />
          </a>
          <a href="">
            <img src={MailIcon} className="social-icons" />
          </a>
          <a href="">
            <img src={TwitterIcon} className="social-icons" />
          </a>
        </div>
      </div>
      <div className="footer2">
        <div className="menu">
          <h5 className="header">Career Counselling</h5>
          <p>
            Career Counselling for students aspiring JEE, NEET, college
            admissions and competetive exams.
          </p>
        </div>
        <div className="menu-1">
          <h5 className="header">Quick Links</h5>
          <Link to="/top-colleges/Engineering">Top Colleges</Link>
          <a href="#">Exams</a>
          <Link to="/home">Home</Link>
          <Link to="/about-us">About Us</Link>
        </div>
        <div className="menu-1">
          <h5 className="header">Our Features</h5>
          <Link to="/preference-list">Preference List Generator</Link>
          <Link to="/branch-list">Branch Wise Cut-Off List</Link>
          <Link to="#">Top College List </Link>
          <Link to="/college-predictor">College Predictor</Link>
        </div>
        <div className="menu-1">
          <h5 className="header">Community</h5>
          <Link href="#">Help Center</Link>
          <a href="#">Terms of use</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div className="footer3">
        <div>@2025 copyright Career Counselling</div>
      </div>
    </div>
  );
}

export default Footer;
