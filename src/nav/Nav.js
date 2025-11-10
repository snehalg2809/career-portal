import "./Nav.css";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faGraduationCap,
  faTimes,
  faBars,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../auth-guard/AuthContext"; // ✅ import context

// 🔹 Reusable Modal
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
          Logout
        </button>
      </div>
    </div>
  </div>
);

function Nav() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedUsername = sessionStorage.getItem("username");
    setUsername(savedUsername || "");
  }, []);

  const handleLogout = () => {
    logout();
    setShowModal(false);
    window.location.href = "/home";
  };

  return (
    <div className={`home ${isOpen ? "navbar-open" : ""}`}>
      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <div
          className="d-flex"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: ".5rem",
          }}
        >
          <FontAwesomeIcon icon={faGraduationCap} />
          <h3>HB Educational Firm</h3>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>

        {/* Navigaion Links */}
        <div className={`links ${isOpen ? "open" : ""}`}>
          <Link to="/home">Home</Link>
          <div className="dropdown">
            <span>Top Colleges ▾</span>
            <div className="dropdown-menu">
              <Link to="/top-colleges/Engineering">Engineering</Link>
              <Link to="/top-colleges/Medical">Medical</Link>
              <Link to="/top-colleges/Management">Management</Link>
            </div>
          </div>

          <Link to="/exams-details">Exams</Link>
          {/* <Link to="/courses">Paid Course</Link> */}
          <Link to="/enrollment-form">Enrolment form</Link>
          <Link to="/option-form">Option Form</Link>
          <div className="dropdown">
            <span>Student Corner ▾</span>
            <div className="dropdown-menu">
              <Link to="/study-material">Study Material</Link>
              <Link to="/top-colleges/Medical">Medical</Link>
              <Link to="/top-colleges/Management">Management</Link>
            </div>
          </div>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>

        {/* User Actions */}
        <div className={`mr-2 actions ${isOpen ? "open" : ""}`}>
          {isLoggedIn ? (
            <div className="profile-dropdown">
              <div
                className="trigger pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FontAwesomeIcon icon={faCircleUser} /> Hi,{" "}
                {username || "Guest"}
              </div>
              <div className="profile-dropdown-menu">
                <Link to="/profile" className="profile-menu">
                  <span>Profile</span> <FontAwesomeIcon icon={faCircleUser} />
                </Link>
                <Link to="/settings" className="profile-menu">
                  <span>Settings</span> <FontAwesomeIcon icon={faGear} />
                </Link>
                <Link
                  className="profile-menu"
                  onClick={() => setShowModal(true)}
                >
                  <div>Logout</div>{" "}
                  <div>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <FontAwesomeIcon icon={faCircleUser} />
              <span className="ml-2">Login</span>
            </Link>
          )}
        </div>
      </div>

      {/* Logout Modal */}
      {showModal && (
        <Modal
          title="Logout"
          message="Do you want to logout?"
          onCancel={() => setShowModal(false)}
          onConfirm={handleLogout}
        />
      )}
    </div>
  );
}

export default Nav;
