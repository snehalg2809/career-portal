import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Typography from "@mui/material/Typography";
import BreadcrumbsNav from "../nav/BreadcrumbsNav";
import BackImg from "../images/school-education-and-science-doodle-background-free-vector.jpg";
import "./Courses.css";
import Nav from "../nav/Nav";
import { Button } from "@mui/material";
import ListIcon from "../images/star (1).png";
import RazorpayPayment from "./RazorpayPayment";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const steps = ["Select a plan", "Fill the details", "Review & Pay now"];
function Courses() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [selectedCourse, setSelectedCourse] = React.useState("");

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    if (activeStep === 0 && !selectedCourse) {
      console.log({ selectedCourse });

      alert("Please select a course before continuing!");
      return;
    }

    setCompleted((prev) => ({
      ...prev,
      [activeStep]: true,
    }));

    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const selectCourse = (value) => {
    setSelectedCourse(value);
  };

  const [personalDetailsData, setPersonalDetailsData] = React.useState({
    fullName: "",
    email: "",
    contactNo: "",
    selectedCourse: "",
    amount: "5000.00",
  });

  return (
    <div className="courses-container">
      <div>
        <Nav />
      </div>
      <div className="course-data">
        <img src={BackImg} alt="img"></img>
        <div
          className="breadcrumbs-div"
          style={{ zIndex: 2, position: "relative", padding: "1rem 1rem 0" }}
        >
          <BreadcrumbsNav />
        </div>
        <div className="courses-data-card">
          <div className="branchlist-heading">Select A Course</div>
          <h5 style={{ textAlign: "center" }}>
            Choose a course to start your career's journey{" "}
          </h5>
          <div className="course-data-section">
            <Box sx={{ width: "100%" }}>
              <div className="course-stepper">
                <Stepper
                  nonLinear
                  activeStep={activeStep}
                  alternativeLabel
                  sx={{
                    width: "500px",
                    "& .css-3hpdci-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed":
                      {
                        color: "#124170",
                        width: 30,
                        height: 30,
                      },
                    "& .css-3hpdci-MuiSvgIcon-root-MuiStepIcon-root": {
                      color: "#50589C",
                      width: 30,
                      height: 30,
                    },
                    "& .css-3yr9gi-MuiStepLabel-root": {
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    },
                    "& .css-3hpdci-MuiSvgIcon-root-MuiStepIcon-root.Mui-active":
                      {
                        color: "#636CCB",
                        width: 30,
                        height: 30,
                      },
                  }}
                >
                  {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                      <StepButton color="inherit" onClick={handleStep(index)}>
                        {label}
                      </StepButton>
                    </Step>
                  ))}
                </Stepper>
              </div>
              <div>
                {allStepsCompleted() ? (
                  <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Box sx={{ flex: "1 1 auto" }} />
                      <Button onClick={handleReset}>Reset</Button>
                    </Box>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1, py: 1 }}></Typography>
                    {activeStep + 1 === 1 && (
                      <div className="card-content">
                        <div
                          className={
                            selectedCourse === "Personal Guidance"
                              ? "course-card hover"
                              : "course-card"
                          }
                          onClick={() => selectCourse("Personal Guidance")}
                        >
                          <div className="course-heading">
                            Personal Guidance
                          </div>
                          <div className="course-info">
                            <h3>Features</h3>
                            <div className="features-list">
                              <div style={{ gap: "1rem" }}>
                                <img
                                  src={ListIcon}
                                  className="list-icon"
                                  alt="icon"
                                  style={{ height: "20px", width: "20px" }}
                                />
                                <span style={{ marginLeft: "30px" }}>
                                  Group discussion based guidance
                                </span>
                              </div>
                              <div>
                                <img
                                  src={ListIcon}
                                  className="list-icon"
                                  alt="icon"
                                  style={{ height: "20px", width: "20px" }}
                                />
                                <span style={{ marginLeft: "30px" }}>
                                  All 3 Rounds Preference List of Colleges
                                </span>
                              </div>
                              <div>
                                <img
                                  src={ListIcon}
                                  className="list-icon"
                                  alt="icon"
                                  style={{ height: "20px", width: "20px" }}
                                />
                                <span style={{ marginLeft: "30px" }}>
                                  Spot Round Guidance
                                </span>
                              </div>
                              <div>
                                <img
                                  src={ListIcon}
                                  className="list-icon"
                                  alt="icon"
                                  style={{ height: "20px", width: "20px" }}
                                />
                                <span style={{ marginLeft: "30px" }}>
                                  Verification of Documents
                                </span>
                              </div>
                              <div>
                                <img
                                  src={ListIcon}
                                  className="list-icon"
                                  alt="icon"
                                  style={{ height: "20px", width: "20px" }}
                                />
                                <span style={{ marginLeft: "30px" }}>
                                  All CET Cell Instructions and Notices
                                </span>
                              </div>
                              <div>
                                <img
                                  src={ListIcon}
                                  className="list-icon"
                                  alt="icon"
                                  style={{ height: "20px", width: "20px" }}
                                />
                                <span style={{ marginLeft: "30px" }}>
                                  GRS Form Filling Workshops
                                </span>
                              </div>
                              <div>
                                <img
                                  src={ListIcon}
                                  className="list-icon"
                                  alt="icon"
                                  style={{ height: "20px", width: "20px" }}
                                />
                                <span style={{ marginLeft: "30px" }}>
                                  JEE + CET Guidance in Option Form Filling
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Button
                              sx={{
                                background: "#fff",
                                color: "#000",
                                width: "200px",
                                fontSize: "14px",
                                padding: ".5rem 0",
                                textTransform: "initial",
                              }}
                            >
                              Buy Now
                            </Button>
                          </div>
                        </div>
                        <div
                          className={
                            selectedCourse === "Counselling"
                              ? "course-card hover"
                              : "course-card"
                          }
                          onClick={() => selectCourse("Counselling")}
                        >
                          <div className="course-heading">Counselling</div>
                          <div className="course-info">
                            <h3>Features</h3>
                            <div className="features-list">
                              <div style={{ gap: "1rem" }}>
                                <img
                                  src={ListIcon}
                                  className="list-icon"
                                  alt="icon"
                                  style={{ height: "20px", width: "20px" }}
                                />
                                <span style={{ marginLeft: "30px" }}>
                                  Group discussion based guidance
                                </span>
                              </div>
                              <div>
                                <img
                                  src={ListIcon}
                                  className="list-icon"
                                  alt="icon"
                                  style={{ height: "20px", width: "20px" }}
                                />
                                <span style={{ marginLeft: "30px" }}>
                                  All 3 Rounds Preference List of Colleges
                                </span>
                              </div>
                              <div>
                                <img
                                  src={ListIcon}
                                  className="list-icon"
                                  alt="icon"
                                  style={{ height: "20px", width: "20px" }}
                                />
                                <span style={{ marginLeft: "30px" }}>
                                  Spot Round Guidance
                                </span>
                              </div>
                              <div>
                                <img
                                  src={ListIcon}
                                  className="list-icon"
                                  alt="icon"
                                  style={{ height: "20px", width: "20px" }}
                                />
                                <span style={{ marginLeft: "30px" }}>
                                  Verification of Documents
                                </span>
                              </div>
                              <div>
                                <img
                                  src={ListIcon}
                                  className="list-icon"
                                  alt="icon"
                                  style={{ height: "20px", width: "20px" }}
                                />
                                <span style={{ marginLeft: "30px" }}>
                                  All CET Cell Instructions and Notices
                                </span>
                              </div>
                              <div>
                                <img
                                  src={ListIcon}
                                  className="list-icon"
                                  alt="icon"
                                  style={{ height: "20px", width: "20px" }}
                                />
                                <span style={{ marginLeft: "30px" }}>
                                  GRS Form Filling Workshops
                                </span>
                              </div>
                              <div>
                                <img
                                  src={ListIcon}
                                  className="list-icon"
                                  alt="icon"
                                  style={{ height: "20px", width: "20px" }}
                                />
                                <span style={{ marginLeft: "30px" }}>
                                  JEE + CET Guidance in Option Form Filling
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Button
                              sx={{
                                background: "#fff",
                                color: "#000",
                                width: "200px",
                                fontSize: "14px",
                                padding: ".5rem 0",
                                textTransform: "initial",
                              }}
                              onClick={() => selectCourse("counselling")}
                            >
                              Buy Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeStep + 1 === 2 && (
                      <div className="details-row" style={{ padding: "2rem" }}>
                        <div className="input-group">
                          <label>Full Name</label>
                          <input
                            className="content-input"
                            placeholder="Full Name"
                            name="fullName"
                            value={personalDetailsData.fullName}
                            onChange={(e) =>
                              setPersonalDetailsData((prev) => ({
                                ...prev,
                                fullName: e.target.value,
                              }))
                            }
                          />
                        </div>

                        <div className="input-group">
                          <label>Email Address</label>
                          <input
                            className="content-input"
                            placeholder="Email Address"
                            name="email"
                            value={personalDetailsData.email}
                            onChange={(e) =>
                              setPersonalDetailsData((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                          />
                        </div>

                        <div className="input-group">
                          <label>Contact Number</label>
                          <input
                            className="content-input"
                            placeholder="Contact Number"
                            name="contactNo"
                            value={personalDetailsData.contactNo}
                            onChange={(e) =>
                              setPersonalDetailsData((prev) => ({
                                ...prev,
                                contactNo: e.target.value,
                              }))
                            }
                          />
                        </div>

                        <div className="input-group">
                          <label>Selected Course</label>
                          <input
                            className="content-input"
                            placeholder="Selected Course"
                            name="selectedCourse"
                            readOnly
                            value={selectedCourse}
                          />
                        </div>
                      </div>
                    )}
                    {activeStep + 1 === 3 && (
                      <div className="razor-pay-section">
                        <RazorpayPayment
                          personalDetailsData={personalDetailsData}
                          selectCourse={selectedCourse}
                        />
                      </div>
                    )}

                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      {activeStep !== 0 && (
                        <Button
                          color="inherit"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          sx={{ mr: 1, backgroundColor: "#f0f0f0" }}
                        >
                          <ChevronLeftIcon />
                          Back
                        </Button>
                      )}
                      <Box
                        sx={{
                          flex: "1 1 auto",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "c",
                        }}
                      />
                      {activeStep !== 2 && (
                        <Button
                          onClick={handleNext}
                          sx={{
                            mr: 1,
                            backgroundColor: "#4fb7b3",
                            color: "#fff",
                          }}
                        >
                          Next
                          <ChevronRightIcon />
                        </Button>
                      )}
                    </Box>
                  </React.Fragment>
                )}
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
