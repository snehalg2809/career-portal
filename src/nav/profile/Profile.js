import * as React from "react";
import "./Profile.css";
import Nav from "../Nav";
import Footer from "../../footer/Footer";
import { useState, useEffect } from "react";
import { CircularProgress, Box, Typography } from "@mui/material";
import UserImg from "../../images/profile.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SchoolIcon from "@mui/icons-material/School";
import ViewListIcon from "@mui/icons-material/ViewList";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import Button from "@mui/material/Button";
import { LinearProgress, Snackbar, Alert } from "@mui/material";
import BreadcrumbsNav from "../BreadcrumbsNav";
import CustomSelect from "../../features/CustomSelect";

function LinearProgressWithLabel({ value }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            height: 6,
            borderRadius: 5,
            backgroundColor: "#f0f0f0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#4FB7B3", // your theme color
            },
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function CircularProgressWithLabel({ value, size = 80 }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={value}
        size={size} //
        thickness={7}
        sx={{
          color: "#4FB7B3",
          "& .MuiBox-root css-1o8dslu": {
            top: "-15px",
          },
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="textSecondary">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function Profile() {
  const [loaded, setLoaded] = useState(0);
  const total = 20;
  const user_email = sessionStorage.getItem("email");
  const user_id = sessionStorage.getItem("username");

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [image, setImage] = useState("");
  const [activeSection, setActiveSection] = useState("personal");
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);

  const showSnackbar = (message, severity = "success") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const openPersonalDetails = () => setActiveSection("personal");
  const openProfileDetails = () => setActiveSection("profile");
  const openEducationDetails = () => setActiveSection("education");
  const openExamDetails = () => setActiveSection("exam");
  const openCourseDetails = () => setActiveSection("course");

  const [personalData, setPersonalData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    contactNumber: "",
    dob: "",
    gender: "",
    motherName: "",
    fatherName: "",
    interestedIn: "",
    location: "",
    city: "",
    uploadImage: "",
    previewImage: "",
  });

  const [educationData, setEducationData] = useState({
    schoolName: "",
    board: "",
    city: "",
    state: "",
    percentage: "",
    year: "",
  });

  const [examData, setExamData] = useState({
    examName: "",
    interestedCourse: "",
    aadharCardFront: "",
    aadharCardBack: "",
    marksheet: "",
    casteCertificate: "",
  });
  const [courseData, setCourseData] = useState({
    courseName: "CET",
    courseFees: "5,000",
    isPaid: "PAID",
    courseDuration: "2 MONTHS",
    isRenew: "NO",
  });

  const getSectionProgress = (dataObj) => {
    const total = Object.keys(dataObj).length;
    let filled = Object.values(dataObj).filter(
      (v) => String(v).trim() !== ""
    ).length;

    return (filled / total) * 100;
  };

  const personalProgress = getSectionProgress(personalData);
  const educationProgress = getSectionProgress(educationData);
  const examProgress = getSectionProgress(examData);
  const courseProgress = getSectionProgress(courseData);
  const gender = ["female", "male", "other"];

  // Weighted progress
  const progress =
    (personalProgress === 100 ? 25 : 0) +
    (educationProgress === 100 ? 25 : 0) +
    (examProgress === 100 ? 25 : 0) +
    (courseProgress === 100 ? 25 : 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoaded((prev) => {
        if (prev < total) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 200);

    const storedImage = sessionStorage.getItem("previewImage");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  useEffect(() => {
    const personalDetails = sessionStorage.getItem("personal-details");
    const educationDetails = sessionStorage.getItem("education-details");
    const examDetails = sessionStorage.getItem("exam-details");
    if (personalDetails) {
      setPersonalData(JSON.parse(personalDetails));
    }
    if (educationDetails) {
      setEducationData(JSON.parse(educationDetails));
    }
    if (examDetails) {
      setExamData(JSON.parse(examDetails));
    }
  }, []);

  const savePersonalDetails = () => {
    if (personalData) {
      const updatedData = { ...personalData, email: user_email };
      setPersonalData(updatedData);

      sessionStorage.setItem("personal-details", JSON.stringify(updatedData));

      showSnackbar("✅ Person Details updated successfully!", "success");
      setShowPersonalDetails(true);
    } else {
      showSnackbar("Something went wrong!", "error");
    }
  };

  const saveEducationDetails = () => {
    if (educationData) {
      sessionStorage.setItem(
        "education-details",
        JSON.stringify(educationData)
      );
      showSnackbar("✅ Education Details updated successfully!", "success");
    } else {
      showSnackbar("Something went wrong!", "error");
    }
  };

  const saveExamDetails = () => {
    if (examData) {
      sessionStorage.setItem("exam-details", JSON.stringify(examData));
      showSnackbar("✅ Exam Details updated successfully!", "success");
    } else {
      showSnackbar("Something went wrong!", "error");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImage(base64String);
        setPersonalData((prev) => ({
          ...prev,
          uploadImage: file.name,
          previewImage: base64String,
        }));
      };
      reader.readAsDataURL(file); // converts file to base64
    }
  };

  return (
    <div className="profile-container">
      <Nav />
      <div className="profile-data">
        <div className="breadcrumbs-div">
          <BreadcrumbsNav />
        </div>
        <div className="profile-data-card">
          <div className="profile-options">
            <div className="menu-header" onClick={openProfileDetails}>
              PROFILE
            </div>

            <div className="profile-menu-items">
              <div className="menu-name" onClick={openPersonalDetails}>
                <AccountCircleIcon />
                Personal Details
              </div>
              <div className="menu-name" onClick={openEducationDetails}>
                <SchoolIcon />
                Education Details
              </div>
              <div className="menu-name" onClick={openCourseDetails}>
                <ViewListIcon />
                Course Details
              </div>
              <div className="menu-name" onClick={openExamDetails}>
                <HistoryEduIcon />
                Exam Details
              </div>
            </div>
          </div>
          <div className="profile-content">
            <h2>
              {activeSection === "personal" && <div>Personal Details</div>}
              {activeSection === "education" && <div>Education Details</div>}
              {activeSection === "exam" && <div>Exam Details</div>}
              {activeSection === "course" && <div>Course Details</div>}
            </h2>
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
            <div className="content-container">
              {activeSection === "personal" && (
                <div className="personal-details">
                  <div className="user-details">
                    <div className="user-data">
                      {/* Show Preview */}
                      {personalData.previewImage ? (
                        <div style={{}}>
                          <img
                            src={personalData.previewImage}
                            alt="preview"
                            style={{
                              width: "90px",
                              height: "90px",
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      ) : (
                        <img
                          src={UserImg}
                          alt="preview"
                          style={{
                            width: "90px",
                            height: "90px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      )}

                      <label
                        htmlFor="fileUpload"
                        className="personal-data-section"
                      >
                        {!personalData.uploadImage ? (
                          <div style={{ paddingTop: "15px" }}>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                              id="fileUpload"
                              className="custom-file-input"
                            />
                            Upload Image
                          </div>
                        ) : showPersonalDetails || personalData ? (
                          <div className="personal-data">
                            <div className="personal-data-section">
                              <label style={{ fontWeight: 700 }}>Name: </label>
                              <p style={{ marginLeft: "2px" }}>
                                {personalData.firstName} {personalData.lastName}
                              </p>
                            </div>
                            <div className="d-flex ">
                              <label style={{ fontWeight: 700 }}>Email:</label>
                              <p style={{ marginLeft: "4px" }}>
                                {personalData.email}
                              </p>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="details-row">
                    <div className="input-group">
                      <label>First Name</label>
                      <input
                        className="content-input"
                        placeholder="Your First Name"
                        onChange={(e) =>
                          setPersonalData((prev) => ({
                            ...prev,
                            firstName: e.target.value,
                          }))
                        }
                        value={personalData.firstName}
                        name="firstName"
                      />
                    </div>
                    <div className="input-group">
                      <label>Middle Name</label>
                      <input
                        className="content-input"
                        placeholder="Your Middle Name"
                        onChange={(e) =>
                          setPersonalData((prev) => ({
                            ...prev,
                            middleName: e.target.value,
                          }))
                        }
                        value={personalData.middleName}
                        name="middleName"
                      />
                    </div>
                    <div className="input-group">
                      <label>Last Name</label>
                      <input
                        className="content-input"
                        placeholder="Your Last Name"
                        onChange={(e) =>
                          setPersonalData((prev) => ({
                            ...prev,
                            lastName: e.target.value,
                          }))
                        }
                        value={personalData.lastName}
                        name="lastName"
                      />
                    </div>
                    <div className="input-group">
                      <label>Email Address</label>
                      <input
                        className="content-input"
                        placeholder="Email Address"
                        onChange={(e) =>
                          setPersonalData((prev) => ({
                            ...prev,
                            email: user_email,
                          }))
                        }
                        value={user_email}
                        readOnly
                        name="email"
                      />
                    </div>
                  </div>

                  <div className="details-row">
                    <div className="input-group">
                      <label>Contact Number (Whatsapp)</label>
                      <input
                        className="content-input"
                        placeholder="Contact Number"
                        onChange={(e) =>
                          setPersonalData((prev) => ({
                            ...prev,
                            contactNumber: e.target.value,
                          }))
                        }
                        value={personalData.contactNumber}
                        name="contactNumber"
                      />
                    </div>
                    <div className="input-group">
                      <label>Date of Birth</label>
                      <input
                        className="content-input"
                        placeholder="Date of Birth"
                        onChange={(e) =>
                          setPersonalData((prev) => ({
                            ...prev,
                            dob: e.target.value,
                          }))
                        }
                        type="date"
                        value={personalData.dob}
                        name="dob"
                      />
                    </div>
                    <div className="input-group">
                      <label>Gender</label>

                      <CustomSelect
                        height={40}
                        borderRadius={5}
                        width={250}
                        className="content-input"
                        options={gender}
                        value={personalData.gender}
                        placeholder="Gender"
                        onChange={(value) =>
                          setPersonalData((prev) => ({
                            ...prev,
                            gender: value,
                          }))
                        }
                      />
                    </div>
                    <div className="input-group">
                      <label>Mother's Name</label>
                      <input
                        className="content-input"
                        placeholder="Mother's Name"
                        onChange={(e) =>
                          setPersonalData((prev) => ({
                            ...prev,
                            motherName: e.target.value,
                          }))
                        }
                        value={personalData.motherName}
                        name="motherName"
                      />
                    </div>
                  </div>

                  <div className="details-row">
                    <div className="input-group">
                      <label>Father's Name</label>
                      <input
                        className="content-input"
                        placeholder="Father's Name"
                        onChange={(e) =>
                          setPersonalData((prev) => ({
                            ...prev,
                            fatherName: e.target.value,
                          }))
                        }
                        value={personalData.fatherName}
                        name="fatherName"
                      />
                    </div>
                    <div className="input-group">
                      <label>Interested In</label>
                      <input
                        className="content-input"
                        placeholder="Interested In"
                        onChange={(e) =>
                          setPersonalData((prev) => ({
                            ...prev,
                            interestedIn: e.target.value,
                          }))
                        }
                        value={personalData.interestedIn}
                        name="interestedIn"
                      />
                    </div>
                    <div className="input-group">
                      <label>Location</label>
                      <input
                        className="content-input"
                        placeholder="Location"
                        onChange={(e) =>
                          setPersonalData((prev) => ({
                            ...prev,
                            location: e.target.value,
                          }))
                        }
                        value={personalData.location}
                        name="location"
                      />
                    </div>
                    <div className="input-group">
                      <label>City</label>
                      <input
                        className="content-input"
                        placeholder="City"
                        onChange={(e) =>
                          setPersonalData((prev) => ({
                            ...prev,
                            city: e.target.value,
                          }))
                        }
                        value={personalData.city}
                        name="city"
                      />
                    </div>
                  </div>
                  <Button
                    sx={{
                      background: "#4FB7B3",
                      color: "#fff",
                      width: "200px",
                      fontSize: "14px",
                      padding: ".5rem 0",
                      textTransform: "initial",
                    }}
                    disabled={personalProgress !== 100}
                    onClick={savePersonalDetails}
                  >
                    Save Personal Details
                  </Button>
                </div>
              )}

              {/* education details */}

              {activeSection === "education" && (
                <div className="education-container">
                  <div className="details-row">
                    <div className="input-group">
                      <label>School Name</label>
                      <input
                        className="content-input"
                        placeholder="School Name"
                        onChange={(e) =>
                          setEducationData((prev) => ({
                            ...prev,
                            schoolName: e.target.value,
                          }))
                        }
                        value={educationData.schoolName}
                        name="schoolName"
                      />
                    </div>
                    <div className="input-group">
                      <label>Board Name</label>
                      <input
                        className="content-input"
                        placeholder="Board Name"
                        onChange={(e) =>
                          setEducationData((prev) => ({
                            ...prev,
                            board: e.target.value,
                          }))
                        }
                        value={educationData.board}
                        name="board"
                      />
                    </div>
                    <div className="input-group">
                      <label>city</label>
                      <input
                        className="content-input"
                        placeholder="City Name"
                        onChange={(e) =>
                          setEducationData((prev) => ({
                            ...prev,
                            city: e.target.value,
                          }))
                        }
                        value={educationData.city}
                        name="city"
                      />
                    </div>
                    <div className="input-group">
                      <label>State</label>
                      <input
                        className="content-input"
                        placeholder="State Name"
                        onChange={(e) =>
                          setEducationData((prev) => ({
                            ...prev,
                            state: e.target.value,
                          }))
                        }
                        value={educationData.state}
                        name="state"
                      />
                    </div>
                    <div className="input-group">
                      <label>Percentage</label>
                      <input
                        className="content-input"
                        placeholder="Percentage"
                        onChange={(e) =>
                          setEducationData((prev) => ({
                            ...prev,
                            percentage: e.target.value,
                          }))
                        }
                        value={educationData.percentage}
                        name="percentage"
                      />
                    </div>
                    <div className="input-group">
                      <label>Year</label>
                      <input
                        className="content-input"
                        placeholder="Year"
                        onChange={(e) =>
                          setEducationData((prev) => ({
                            ...prev,
                            year: e.target.value,
                          }))
                        }
                        value={educationData.year}
                        name="year"
                      />
                    </div>
                  </div>
                  <Button
                    sx={{
                      background: "#4FB7B3",
                      color: "#fff",
                      width: "200px",
                      fontSize: "14px",
                      padding: ".5rem 0",
                      textTransform: "initial",
                    }}
                    disabled={educationProgress !== 100}
                    onClick={saveEducationDetails}
                  >
                    Save Education Details
                  </Button>
                </div>
              )}

              {/* exam detail */}
              {activeSection === "exam" && (
                <div className="education-container">
                  <div className="details-row">
                    <div className="input-group">
                      <label>Exam Name</label>
                      <input
                        className="content-input"
                        placeholder="Exam Name"
                        onChange={(e) =>
                          setExamData((prev) => ({
                            ...prev,
                            examName: e.target.value,
                          }))
                        }
                        name="examName"
                        value={examData.examName}
                      />
                    </div>
                    <div className="input-group">
                      <label>Interested Course</label>
                      <input
                        className="content-input"
                        placeholder="Course Name"
                        onChange={(e) =>
                          setExamData((prev) => ({
                            ...prev,
                            interestedCourse: e.target.value,
                          }))
                        }
                        value={examData.interestedCourse}
                        name="interestedCourse"
                      />
                    </div>
                  </div>
                  <h2>Upload Documents</h2>
                  <div className="details-row">
                    <div className="input-group">
                      <label>Aadhar Card(Front)</label>
                      <input
                        type="file"
                        className="content-input"
                        placeholder="Course Name"
                        style={{ background: "#fff" }}
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            setExamData((prev) => ({
                              ...prev,
                              aadharCardFront: file.name,
                            }));
                          }
                        }}
                        name="aadharCardFront"
                      />
                      {examData.aadharCardFront}
                    </div>
                    <div className="input-group">
                      <label>Aadhar Card(Back)</label>
                      <input
                        type="file"
                        className="content-input"
                        placeholder="Course Name"
                        style={{ background: "#fff" }}
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            setExamData((prev) => ({
                              ...prev,
                              aadharCardBack: file.name,
                            }));
                            sessionStorage.setItem(
                              "aadharCardFront",
                              file.name
                            );
                          }
                        }}
                        name="aadharCardBack"
                      />
                      {examData.aadharCardBack}
                    </div>
                  </div>
                  <div className="details-row">
                    <div className="input-group">
                      <label>12th Marksheet(Front)</label>
                      <input
                        type="file"
                        className="content-input"
                        placeholder="Course Name"
                        style={{ background: "#fff" }}
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            setExamData((prev) => ({
                              ...prev,
                              marksheet: file.name,
                            }));
                            sessionStorage.setItem(
                              "aadharCardFront",
                              file.name
                            );
                          }
                        }}
                        name="marksheet"
                      />
                      {examData.marksheet}
                    </div>
                    <div className="input-group">
                      <label>Caste Certificate</label>
                      <input
                        type="file"
                        className="content-input"
                        placeholder="Course Name"
                        style={{ background: "#fff" }}
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            setExamData((prev) => ({
                              ...prev,
                              casteCertificate: file.name,
                            }));
                            sessionStorage.setItem(
                              "aadharCardFront",
                              file.name
                            );
                          }
                        }}
                        name="casteCertificate"
                      />
                      {examData && examData.casteCertificate}
                    </div>
                  </div>
                  <Button
                    sx={{
                      background: "#4FB7B3",
                      color: "#fff",
                      width: "200px",
                      fontSize: "14px",
                      padding: ".5rem 0",
                      textTransform: "initial",
                    }}
                    onClick={saveExamDetails}
                    disabled={examProgress !== 100}
                  >
                    Save Exam Details
                  </Button>
                </div>
              )}

              {/* course details */}
              {activeSection === "course" && (
                <div className="education-container">
                  {courseData ? (
                    <div>
                      <div className="details-row">
                        <div className="input-group">
                          <label>Course Name</label>
                          <div>{courseData.courseName}</div>
                        </div>
                        <div className="input-group">
                          <label>Course Duration</label>
                          <div>{courseData.courseDuration}</div>
                        </div>
                        <div className="input-group">
                          <label>Course Fee</label>
                          <div>{courseData.courseFees}</div>
                        </div>
                        <div className="input-group">
                          <label>Fees Paid</label>
                          <div>{courseData.isPaid}</div>
                        </div>
                        <div className="input-group">
                          <label>Course Renew Status</label>
                          <div>{courseData.isRenew}</div>
                        </div>
                      </div>
                      <Button
                        sx={{
                          background: "#4FB7B3",
                          color: "#fff",
                          width: "200px",
                          fontSize: "14px",
                          padding: ".5rem 0",
                          textTransform: "initial",
                        }}
                      >
                        Save Course Details
                      </Button>
                    </div>
                  ) : (
                    <div>No Course Found!</div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="progress-container">
            <div
              style={{
                textAlign: "center",
                padding: "1rem",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              Complete Your Profile
            </div>

            {/* Main big circular progress */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <CircularProgressWithLabel value={progress} />
            </Box>

            {/* Section-wise linear progress bars */}
            <div style={{ marginTop: "2rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <Typography variant="subtitle2">Personal Details</Typography>
                <LinearProgressWithLabel value={personalProgress} />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <Typography variant="subtitle2">Education Details</Typography>
                <LinearProgressWithLabel value={educationProgress} />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <Typography variant="subtitle2">Exam Details</Typography>
                <LinearProgressWithLabel value={examProgress} />
              </div>

              <div>
                <Typography variant="subtitle2">Course Details</Typography>
                <LinearProgressWithLabel value={courseProgress} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
