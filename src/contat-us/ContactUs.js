import * as React from "react";
import "./ContactUs.css";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import ContactImg from "../images/contact-us.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faMessage, faUser } from "@fortawesome/free-solid-svg-icons";
import CustomSelect from "../features/CustomSelect";
import CallIcon from "../images/phone-call.png";
import LinkedInIcon from "../images/linkedin.png";
import MapIcon from "../images/map.png";
import MailIcon from "../images/google.png";
import TwitterIcon from "../images/twitter.png";
import ContactIcon from "../images/streamer.gif";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";

function ContactUs() {
  const [requestCallbackData, setRequestCallbackData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    stream: "",
    message: "",
  });

  const streams = ["Engineering", "Pharmacy", "Management"];

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const showSnackbar = (message, severity = "success") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
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
  return (
    <div>
      <Nav />
      <div className="contact-us-container">
        <div className="contact-us-header">
          <h1>Contact Us</h1>
          <div className="contact-header-title">
            <div style={{ width: "70%", fontSize:'18px' }}>
              We provide expert guidance, personalized counseling, and reliable
              resources to simplify the complex admission process. Whether
              you're exploring career options, preparing for entrance exams, or
              looking for the best-fit college.
            </div>
            <div>
              <img src={ContactImg} className="contact-img" />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            padding: "2rem",
            flexDirection: "row",
            gap: "5rem",
          }}
        >
          <img
            src={ContactIcon}
            style={{ height: "30%", width: "30%", backgroundColor: "efefef" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              gap: "2rem",
            }}
          >
            <div style={{ fontSize: "20px", fontWeight: 700 }}>
              {" "}
              Get in Touch with Us!
            </div>
            <div
              style={{
                display: "flex",
                border: "1px solid #000",
                alignItems: "center",
                padding: "0 2rem",
                borderRadius: "10px",
                width: "350px",
              }}
            >
              <img
                src={MailIcon}
                style={{ height: "50px", width: "50px", padding: "0.2rem 0" }}
              />
              <div className="social-card">
                <div style={{ fontSize: "18px", fontWeight: 600 }}>Email: </div>
                <div style={{ fontSize: "14px", fontWeight: 400 }}>
                  snehalgaikwad287@gmail.com
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                border: "1px solid #000",
                alignItems: "center",
                padding: "0 2rem",
                borderRadius: "10px",
                width: "350px",
              }}
            >
              <img
                src={CallIcon}
                style={{ height: "50px", width: "50px", padding: "0.2rem 0" }}
              />
              <div className="social-card">
                <div style={{ fontSize: "18px", fontWeight: 600 }}>
                  Contact No:{" "}
                </div>
                <div style={{ fontSize: "14px", fontWeight: 400 }}>
                  snehalgaikwad287@gmail.com
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                border: "1px solid #000",
                alignItems: "center",
                padding: "0 2rem",
                borderRadius: "10px",
                width: "350px",
              }}
            >
              <img
                src={LinkedInIcon}
                style={{ height: "50px", width: "50px", padding: "0.2rem 0" }}
              />
              <div className="social-card">
                <div style={{ fontSize: "18px", fontWeight: 600 }}>
                  LinkedIn:{" "}
                </div>
                <div style={{ fontSize: "14px", fontWeight: 400 }}>
                  snehalgaikwad287@gmail.com
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                border: "1px solid #000",
                alignItems: "center",
                padding: "0 2rem",
                borderRadius: "10px",
                width: "350px",
              }}
            >
              <img
                src={TwitterIcon}
                style={{ height: "50px", width: "50px", padding: "0.2rem 0" }}
              />
              <div className="social-card">
                <div style={{ fontSize: "18px", fontWeight: 600 }}>Twitter: </div>
                <div style={{ fontSize: "14px", fontWeight: 400 }}>
                  snehalgaikwad287@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="form-text">
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
            <div className="form" >
              <h2 style={{ marginBottom: '0.5rem'}}>Inquiry Form</h2>
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
                    borderRadius={20}
                    sx={{ width: "100%", borderRadius:'20px' }}
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

        {/* Office Location Map */}
        <div className="office-map" style={{ marginTop: "2rem" }}>
          <h2>
            <img
              src={MapIcon}
              style={{
                height: "30px",
                width: "30px",
                marginRight: "5px",
                marginTop: "2px",
              }}
            ></img>
            Our Office Location
          </h2>
          <iframe
            title="office-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121032.76051100415!2d73.65473249726561!3d18.56169239999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf85bfedc50f%3A0x31fbeaa2d4b3be5c!2sSuma%20Soft!5e0!3m2!1sen!2sin!4v1760446542822!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
