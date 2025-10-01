import * as React from "react";
import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../auth-guard/AuthContext";
import {
  faUser,
  faEye,
  faEyeSlash,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import LogSVG from "../images/Login-Image.svg";
import RegisterSVG from "../images/Register-Image.svg";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./UserLogin.css";

// 🔹 Reusable Input Field
const InputField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  icon,
  toggleIcon,
  onToggle,
}) => (
  <div className="input-field">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
    <FontAwesomeIcon icon={icon} />
    {toggleIcon && (
      <FontAwesomeIcon
        icon={toggleIcon}
        className="toggle-password"
        onClick={onToggle}
      />
    )}
  </div>
);

// 🔹 Social Icons (reusable)
const SocialIcons = () => (
  <div className="social-media">
    {[
      { icon: faGoogle, link: "#" },
      { icon: faFacebook, link: "#" },
      { icon: faLinkedin, link: "#" },
    ].map((item, i) => (
      <a key={i} href={item.link} className="social-icon">
        <FontAwesomeIcon icon={item.icon} />
      </a>
    ))}
  </div>
);

function UserLogin() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [errors, setErrors] = useState([]);
  const [toast, setToast] = useState(null);

  const containerRef = useRef(null);
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // 🔹 Toggle UI panels
  const togglePanel = (isSignUp) =>
    containerRef.current?.classList.toggle("sign-up-mode", isSignUp);

  // 🔹 Input change handlers
  const handleChange = (setState) => (e) =>
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // 🔹 Password validation
  const validatePassword = (value) => {
    const rules = [
      {
        test: (v) => v.length >= 8,
        msg: "Password must be at least 8 characters",
      },
      {
        test: (v) => /[A-Z]/.test(v),
        msg: "Must contain at least one uppercase letter",
      },
      { test: (v) => /[0-9]/.test(v), msg: "Must contain at least one number" },
      {
        test: (v) => /[!@#$%^&*(),.?\":{}|<>]/.test(v),
        msg: "Must contain one special character",
      },
    ];
    setErrors(rules.filter((r) => !r.test(value)).map((r) => r.msg));
  };

  const { login } = useContext(AuthContext);
  // 🔹 Login
  const userLogin = (e) => {
    e.preventDefault();
    const success = login(loginData.username, loginData.password);
    if (success) {
      setToast({ message: "Login Successful 🎉", type: "success" });
      setOpen(true);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      setToast({ message: "Invalid credentials ❌", type: "error" });
      setOpen(true);
    }
  };

  // 🔹 Register
  const registerUser = (e) => {
    e.preventDefault();
    const { username, email, password } = registerData;

    if (username && email && password && errors.length === 0) {
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("password", password);
      setToast({ message: "Registration Successful 🎉", type: "success" });
      setOpen(true);
      togglePanel();
    } else {
      setToast({ message: "Please fix the errors ❌", type: "error" });
    }
  };

  return (
    <div>
      <div className="container" ref={containerRef}>
        <div className="forms-container">
          <div className="signin-signup">
            {/* 🔹 Login Form */}
            <form className="sign-in-form" onSubmit={userLogin}>
              <h2>Sign in</h2>
              <InputField
                type="text"
                name="username"
                placeholder="Username"
                value={loginData.username}
                onChange={handleChange(setLoginData)}
                icon={faUser}
              />
              <InputField
                type={showLoginPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleChange(setLoginData)}
                toggleIcon={showLoginPassword ? faEyeSlash : faEye}
                onToggle={() => setShowLoginPassword(!showLoginPassword)}
              />
              <button type="submit" className="btn solid">
                Login
              </button>
              <hr />
              <p>Or Sign in with social platforms</p>
              <SocialIcons />
            </form>

            {/* 🔹 Register Form */}
            <form className="sign-up-form" onSubmit={registerUser}>
              <h2>Sign up</h2>
              <InputField
                type="text"
                name="username"
                placeholder="Username"
                value={registerData.username}
                onChange={handleChange(setRegisterData)}
                icon={faUser}
              />
              <InputField
                type="email"
                name="email"
                placeholder="Email"
                value={registerData.email}
                onChange={handleChange(setRegisterData)}
                icon={faEnvelope}
              />
              <InputField
                type={showRegisterPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={registerData.password}
                onChange={(e) => {
                  handleChange(setRegisterData)(e);
                  validatePassword(e.target.value);
                }}
                toggleIcon={showRegisterPassword ? faEyeSlash : faEye}
                onToggle={() => setShowRegisterPassword(!showRegisterPassword)}
              />
              {/* icon={faLock} */}
              {errors.length > 0 && (
                <ul className="error-list">
                  {errors.map((err, i) => (
                    <li key={i}>{err}</li>
                  ))}
                </ul>
              )}
              <button type="submit" className="btn solid">
                Register
              </button>
              <p>Or Sign up with social platforms</p>
              <SocialIcons />
            </form>
          </div>
        </div>

        {/* 🔹 Panels */}
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here?</h3>
              <p>Don't have an account?</p>
              <button
                className="btn transparent"
                onClick={() => togglePanel(true)}
              >
                Sign Up
              </button>
            </div>
            <img src={LogSVG} className="image" alt="sign-in" />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of us?</h3>
              <p>Already have an account?</p>
              <button
                className="btn transparent"
                onClick={() => togglePanel(false)}
              >
                Sign In
              </button>
            </div>
            <img src={RegisterSVG} className="image" alt="register" />
          </div>
        </div>
      </div>

      {/* 🔹 Toast */}
      {toast && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity={toast.type === "error" ? "error" : "success"}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {toast.message}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}

export default UserLogin;
