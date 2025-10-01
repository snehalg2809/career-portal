import React, { useState } from "react";
import "./Settings.css";
import { Button, Typography, Box, Snackbar, Alert } from "@mui/material";
import Nav from "../Nav";
import Footer from "../../footer/Footer";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BreadcrumbsNav from "../BreadcrumbsNav";

function Settings() {
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const handleEmailChange = () => {
    if (!email) {
      showSnackbar("Please enter a valid email.", "error");
      return;
    }

    sessionStorage.setItem("email", email);
    showSnackbar("✅ Email updated successfully!", "success");
  };

  const handlePasswordChange = () => {
    if (!newPassword || !confirmPassword) {
      showSnackbar("Please fill in all password fields.", "error");
      return;
    }

    if (newPassword !== confirmPassword) {
      showSnackbar("New password and confirm password must match.", "error");
      return;
    }

    sessionStorage.setItem("password", newPassword);
    showSnackbar("✅ Password updated successfully!", "success");
  };

  return (
    <div className="setting-container">
      <Nav />
      <div className="setting-data">
        <div className="breadcrumbs-div">
          <BreadcrumbsNav />
        </div>
        <div className="setting-data-card">
          <Box
            sx={{
              maxWidth: 600,
              margin: "2rem auto",
              padding: 2,
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              style={{ textAlign: "center", color: "#fff" }}
            >
              Settings
            </Typography>

            {/* Snackbar */}
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={3000}
              onClose={handleCloseSnackbar}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert
                onClose={handleCloseSnackbar}
                severity={snackbarSeverity}
                sx={{ width: "100%" }}
              >
                {snackbarMessage}
              </Alert>
            </Snackbar>

            {/* Update Email */}

            <div className="settings-card">
              <div>Update Email</div>
              <div className="card-data">
                <label>Enter New Email</label>
                <input
                  className="input-content"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  sx={{
                    background: "#4FB7B3",
                    color: "#fff",
                    width: "100px",
                    fontSize: "14px",
                    padding: ".5rem 0",
                    textTransform: "initial",
                  }}
                  onClick={handleEmailChange}
                >
                  Update
                </Button>
              </div>
            </div>

            {/* Update Password */}
            <div className="settings-card" style={{ marginTop: "1rem" }}>
              <div>Update Password</div>

              <div className="card-data">
                <label>Current Password</label>
                <div className="input-content">
                  {" "}
                  <input
                    type="password"
                    className="settings-input"
                    placeholder="Current Password"
                    value={sessionStorage.getItem("username")}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    readOnly
                    style={{ cursor: "not-allowed" }}
                  />
                </div>
              </div>

              <div className="card-data">
                <label>New Password</label>
                <div className="input-content">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <FontAwesomeIcon
                    icon={showNewPassword ? faEyeSlash : faEye}
                    style={{ marginLeft: "8px", cursor: "pointer" }}
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  />
                </div>
              </div>

              <div className="card-data">
                <label>Confirm New Password</label>
                <div className="input-content">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEyeSlash : faEye}
                    style={{ marginLeft: "8px", cursor: "pointer" }}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                </div>
              </div>

              <Button
                sx={{
                  background: "#4FB7B3",
                  color: "#fff",
                  width: "100px",
                  fontSize: "14px",
                  padding: ".5rem 0",
                  textTransform: "initial",
                  marginTop: "10px",
                }}
                onClick={handlePasswordChange}
              >
                Update
              </Button>
            </div>
          </Box>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Settings;
