import "./LoginRegister.css";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function LoginRegister() {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [user_name, setUser_name] = useState("");
  const [user_password, setUser_Password] = useState("");
  const navigate = useNavigate();
  const [successToast, setSuccessToast] = useState({
    show: false,
    message: "",
    type: "",
  });
  const [loginToast, setLoginToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const changeToLogin = () => {
    document.querySelector(".container").classList.add("active");
  };
  const changeToRegister = () => {
    document.querySelector(".container").classList.remove("active");
  };

  const saveUser = () => {
    if (username && password && mail) {
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("email", mail);
      sessionStorage.setItem("password", password);
      setSuccessToast({
        show: true,
        message: "✅ Registration successful!",
        type: "success",
      });
      setTimeout(() => setSuccessToast({ ...successToast, show: false }), 3000);
    }
  };

  const loginUser = () => {
    if (
      sessionStorage.getItem("username") == user_name &&
      sessionStorage.getItem("password") == user_password
    ) {
      setSuccessToast({
        show: true,
        message: "✅ User login successful!",
        type: "success",
      });
      setTimeout(() => setSuccessToast({ ...successToast, show: false }), 3000);
      navigate("/home");
    } else {
      setLoginToast({
        show: false,
        message: "Something went wrong",
        type: "error",
      });
    }
  };

  return (
    <div className="container" id="container">
      <div className="form-box login">
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              name="user_name"
              value={user_name}
              onChange={(e) => setUser_name(e.target.value)}
              required
            />
            <box-icon type="solid" name="user"></box-icon>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="user_password"
              value={user_password}
              onChange={(e) => setUser_Password(e.target.value)}
              required
            />
            <box-icon type="solid" name="lock-alt"></box-icon>
          </div>
          <div className="forget-link">
            <a href="#">Forget Password</a>
          </div>
          <button className="btn" onClick={loginUser}>
            Login
          </button>
          <p className="p">or login with social platforms</p>
          <div className="social-icons">
            <a href="#">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form>
          <h1>Register</h1>
          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <box-icon type="solid" name="user"></box-icon>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="mail"
              placeholder="Email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
            />
            <box-icon name="envelope" type="solid"></box-icon>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <box-icon type="solid" name="lock-alt"></box-icon>
          </div>

          <button className="btn" onClick={saveUser}>
            Register
          </button>
          <p className="p">or register with social platforms</p>
          <div className="social-icons">
            <a href="#">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </form>
      </div>
      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <button
            className="btn register-btn"
            id="register-btn"
            onClick={changeToLogin}
          >
            Register
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Welcome back!</h1>
          <p>Already have an account?</p>
          <button
            className="btn login-btn"
            id="login-btn"
            onClick={changeToRegister}
          >
            Login
          </button>
        </div>
      </div>

      {/* toast msg */}

      <div
        className={`toast align-items-center text-white ${
          successToast.type === "success" ? "bg-success" : "bg-danger"
        } position-fixed top-0 end-0 m-3 ${
          successToast.show ? "show" : "hide"
        }`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">{successToast.message}</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            onClick={() => setLoginToast({ ...successToast, show: false })}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
