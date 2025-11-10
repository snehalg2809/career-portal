import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Nav from "../nav/Nav";
import "./EnrollmentForm.css";
import Footer from "../footer/Footer";
import { Button } from "@mui/material";
import ListIcon from "../images/star (1).png";
import RazorpayPayment from "../courses/RazorpayPayment";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CustomMultiSelect from "../features/CustomMultiSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import BreadcrumbsNav from "../nav/BreadcrumbsNav";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const steps = ["Select a course", "Fill the details", "Pay now"];
export default function EnrollmentForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [selectedCourse, setSelectedCourse] = React.useState("");
  const [filteredDocuments, setFilteredDocuments] = useState([]);

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
      alert("Please select a course before continuing!");
      return;
    }

    setCompleted((prev) => ({
      ...prev,
      [activeStep]: true,
    }));

    // Move to next step
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

  const [enrollmentData, setEnrollmentData] = useState({
    name: "",
    contactNo: "",
    emailId: "",
    // enrolledExam: "",
    casteCategory: [],
    fatherName: "",
    motherName: "",
    fathersContactNo: "",
    mothersContactNo: "",
  });

  const [examData, setExamData] = useState({
    examName: "",
    interestedCourse: "",
    aadharCardFront: "",
    aadharCardBack: "",
    marksheet: "",
    casteCertificate: "",
  });

  const categories = [
    "Open",
    "SC",
    "ST",
    "OBC",
    "SEBC",
    "NT A/ NT B/ NT C/ NT D",
    "VJ-DT",
    "EWS",
    "Defence",
    "Orfan",
    "PWD",
    "NRI",
    "CIWGC GULF QUOTA",
  ];

  const documentFields = [
    {
      label: "Passport Size Photo",
      name: "photo",
      note: "Upload latest photo.",
      category: ["All"],
    },

    {
      label: "Signature of Candidate",
      name: "signature",
      note: "Signature should be as per PAN or bank.",
      category: ["All"],
    },
    {
      label: "Aadhar Card",
      name: "aadharFront",
      note: "Front of Aadhar",
      category: ["All"],
    },
    {
      label: "Aadhar Card ",
      name: "aadharBack",
      note: "Back of Aadhar",
      category: ["All"],
    },
    {
      label: "PAN Card (if eligible)",
      name: "panCard",
      note: "If eligible",
      category: ["All"],
    },
    {
      label: "Passport",
      name: "passport",
      note: "Compulsory for NRI and CIWGC",
      category: ["NRI"],
    },
    {
      label: "10th Marksheet & Certificate",
      name: "marksheet10",
      category: ["All"],
    },
    { label: "12th Marksheet", name: "marksheet12", category: ["All"] },
    { label: "Leaving Certificate", name: "leavingCert", category: ["All"] },
    { label: "Birth Certificate", name: "birthCert", category: ["All"] },
    { label: "Domicile Certificate", name: "domicileCert", category: ["All"] },
    {
      label: "Nationality Certificate",
      name: "nationalityCert",
      category: ["NRI"],
    },
    {
      label: "Category Certificate",
      name: "categoryCert",
      note: "If applicable",
      category: ["SC"],
    },
    {
      label: "Caste Certificate",
      name: "casteCert",
      note: "If applicable",
      category: ["SC"],
    },
    {
      label: "Minority Proof",
      name: "minorityProof",
      note: "Religious or Linguistic - If applicable",
      category: ["SC"],
    },
    {
      label: "Income Certificate",
      name: "incomeCert",
      note: "If income is below 8 lakh",
      category: ["All"],
    },
    {
      label: "EWS Certificate",
      name: "ewsCert",
      note: "If applicable",
      category: ["EWS"],
    },
    {
      label: "PWD Certificate",
      name: "pwdCert",
      note: "If applicable",
      category: ["PWD"],
    },
    {
      label: "Defence Category proforma",
      name: "defenceCert",
      note: "If applicable",
      category: ["Defence"],
    },
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleDownloadPDF = () => {
  //   const doc = new jsPDF();
  //   let y = 20;

  //   doc.setFont("helvetica", "bold");
  //   doc.setFontSize(18);
  //   doc.text("Enrollment Form Summary", 70, y);
  //   y += 10;

  //   doc.setFont("helvetica", "normal");
  //   doc.setFontSize(12);

  //   const addField = (label, value) => {
  //     doc.text(`${label}: ${value || "N/A"}`, 20, y);
  //     y += 8;
  //   };

  //   y += 10;
  //   doc.setFont("helvetica", "bold");
  //   doc.text("Personal Details:", 20, y);
  //   y += 10;
  //   doc.setFont("helvetica", "normal");

  //   addField("Full Name", enrollmentData.name);
  //   addField("Email", enrollmentData.emailId);
  //   addField("Contact Number", enrollmentData.contactNo);
  //   addField("Father's Name", enrollmentData.fatherName);
  //   addField("Mother's Name", enrollmentData.motherName);
  //   addField("Father's Contact", enrollmentData.fathersContactNo);
  //   addField("Mother's Contact", enrollmentData.mothersContactNo);
  //   addField("Category", enrollmentData.casteCategory.join(", "));

  //   y += 10;
  //   doc.setFont("helvetica", "bold");
  //   doc.text("Documents Uploaded:", 20, y);
  //   y += 10;
  //   doc.setFont("helvetica", "normal");

  //   Object.entries(examData).forEach(([key, value]) => {
  //     if (y > 270) {
  //       doc.addPage();
  //       y = 20;
  //     }
  //     addField(key, value);
  //   });

  //   y += 10;
  //   doc.setFont("helvetica", "bold");
  //   doc.text("Course Details:", 20, y);
  //   y += 10;
  //   doc.setFont("helvetica", "normal");

  //   addField("Selected Course", selectedCourse || "Not selected");
  //   addField("Counselling Package", enrollmentData.counsellingPackageName);
  //   addField("Course Fee", enrollmentData.counsellingPackageFee);

  //   y += 20;
  //   doc.setFont("helvetica", "italic");
  //   doc.text(
  //     "This PDF is auto-generated for your enrollment confirmation.",
  //     20,
  //     y
  //   );

  //   doc.save(`Enrollment_${enrollmentData.name || "Form"}.pdf`);
  // };

  const [index, setIndex] = useState(0);

  const changeTab = () => {
    console.log(examData);

    setValue(value + 1);
  };

  const handleDownloadPDF = () => {
    const input = document.querySelector(".MuiPaper-root"); // capture the table section
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Enrollment_Details.pdf");
    });
  };

  const isPersonalDetailsFilled =
    enrollmentData.name &&
    enrollmentData.contactNo &&
    enrollmentData.emailId &&
    enrollmentData.casteCategory &&
    enrollmentData.fatherName &&
    enrollmentData.fathersContactNo &&
    enrollmentData.motherName &&
    enrollmentData.mothersContactNo;

  return (
    <div className="enrolment-container">
      <div>
        <Nav />
      </div>
      <div className="enrolment-data">
        {/* <img src={BackImg} alt="img"></img> */}
        <div
          className="breadcrumbs-div"
          style={{ zIndex: 2, position: "relative", padding: "1rem 1rem 0" }}
        >
          <BreadcrumbsNav />
        </div>
        <div className="enrolment-data-card">
          <h2>Enrollment Form</h2>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                index={index}
              >
                <Tab label="Personal Details" {...a11yProps(0)} />
                <Tab label="Upload Documents" {...a11yProps(1)} />
                <Tab label="Counselling details" {...a11yProps(2)} />
                <Tab label="Preview & Download form" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <div className="personal-row">
                <div className="input-group">
                  <label>Name</label>
                  <input
                    className="details-input"
                    placeholder="Your First Name"
                    onChange={(e) =>
                      setEnrollmentData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    value={enrollmentData.name}
                    name="name"
                  />
                </div>
                <div className="input-group">
                  <label>Contact Number (Calling)</label>
                  <div className="phone-input-wrapper">
                    <span className="country-code">+91</span>
                    <input
                      type="tel"
                      maxLength="10"
                      pattern="[0-9]{10}"
                      placeholder="Enter 10-digit number"
                      className="details-input phone-input"
                      onChange={(e) =>
                        setEnrollmentData((prev) => ({
                          ...prev,
                          contactNo: e.target.value,
                        }))
                      }
                      value={enrollmentData.contactNo}
                      name="contactNo"
                      required
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label>Contact Number (WhatsApp)</label>
                  <div className="phone-input-wrapper">
                    <span className="country-code">+91</span>
                    <input
                      type="tel"
                      maxLength="10"
                      pattern="[0-9]{10}"
                      placeholder="Enter 10-digit number"
                      className="details-input phone-input"
                      onChange={(e) =>
                        setEnrollmentData((prev) => ({
                          ...prev,
                          contactNo: e.target.value,
                        }))
                      }
                      value={enrollmentData.contactNo}
                      name="contactNo"
                      required
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>Category</label>
                  <CustomMultiSelect
                    className="details-input"
                    height={42}
                    borderRadius={5}
                    width={250}
                    options={categories}
                    value={enrollmentData.casteCategory}
                    placeholder="Choose category"
                    onChange={(value) =>
                      setEnrollmentData({
                        ...enrollmentData,
                        casteCategory: value,
                      })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <div className="email-input-wrapper">
                    <input
                      type="text"
                      className="details-input email-input"
                      placeholder="Enter email"
                      onChange={(e) => {
                        const value = e.target.value;
                        setEnrollmentData((prev) => ({
                          ...prev,
                          emailId: value ? `${value}@gmail.com` : "",
                        }));
                      }}
                      value={enrollmentData.emailId.replace("@gmail.com", "")}
                      name="emailId"
                      required
                    />
                    <span className="suffix">@gmail.com</span>
                  </div>
                </div>
                {/* </div> */}

                {/* <div className="details-row"> */}
                <div className="input-group">
                  <label>Father's Name</label>
                  <input
                    className="details-input"
                    placeholder="Father's Name"
                    onChange={(e) =>
                      setEnrollmentData((prev) => ({
                        ...prev,
                        fatherName: e.target.value,
                      }))
                    }
                    value={enrollmentData.fatherName}
                    name="fatherName"
                  />
                </div>
                <div className="input-group">
                  <label>Contact Number(Calling)</label>
                  <div className="phone-input-wrapper">
                    <span className="country-code">+91</span>
                    <input
                      type="tel"
                      maxLength="10"
                      pattern="[0-9]{10}"
                      placeholder="Enter 10-digit number"
                      className="details-input phone-input"
                      onChange={(e) =>
                        setEnrollmentData((prev) => ({
                          ...prev,
                          fathersContactNo: e.target.value,
                        }))
                      }
                      value={enrollmentData.fathersContactNo}
                      name="fathersContactNo"
                      required
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label>Contact Number(Whatsapp)</label>
                  <div className="phone-input-wrapper">
                    <span className="country-code">+91</span>
                    <input
                      type="tel"
                      maxLength="10"
                      pattern="[0-9]{10}"
                      placeholder="Enter 10-digit number"
                      className="details-input phone-input"
                      onChange={(e) =>
                        setEnrollmentData((prev) => ({
                          ...prev,
                          fathersContactNo: e.target.value,
                        }))
                      }
                      value={enrollmentData.fathersContactNo}
                      name="fathersContactNo"
                      required
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label>Mother's Name</label>
                  <input
                    className="details-input"
                    placeholder="Mother's Name"
                    onChange={(e) =>
                      setEnrollmentData((prev) => ({
                        ...prev,
                        motherName: e.target.value,
                      }))
                    }
                    value={enrollmentData.motherName}
                    name="motherName"
                  />
                </div>
                <div className="input-group">
                  <label>Contact Number(Calling)</label>
                  <div className="phone-input-wrapper">
                    <span className="country-code">+91</span>
                    <input
                      type="tel"
                      maxLength="10"
                      pattern="[0-9]{10}"
                      placeholder="Enter 10-digit number"
                      className="details-input phone-input"
                      onChange={(e) =>
                        setEnrollmentData((prev) => ({
                          ...prev,
                          mothersContactNo: e.target.value,
                        }))
                      }
                      value={enrollmentData.mothersContactNo}
                      name="mothersContactNo"
                      required
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label>Contact Number(Whatsapp)</label>
                  <div className="phone-input-wrapper">
                    <span className="country-code">+91</span>
                    <input
                      type="tel"
                      maxLength="10"
                      pattern="[0-9]{10}"
                      placeholder="Enter 10-digit number"
                      className="details-input phone-input"
                      onChange={(e) =>
                        setEnrollmentData((prev) => ({
                          ...prev,
                          mothersContactNo: e.target.value,
                        }))
                      }
                      value={enrollmentData.mothersContactNo}
                      name="mothersContactNo"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="next-btn">
                <Button
                  sx={{
                    background: "#8ABEB9",
                    color: "#fff",
                    width: "200px",
                    fontSize: "14px",
                    padding: ".5rem 0",
                    textTransform: "initial",
                    cursor: isPersonalDetailsFilled ? "pointer" : "not-allowed",
                  }}
                  disabled={!isPersonalDetailsFilled}
                  onClick={() => {
                    setValue(value + 1);
                  }}
                >
                  Save Details
                </Button>
              </div>
            </CustomTabPanel>

            {/* upload documents */}
            <CustomTabPanel value={value} index={1}>
              <h2>Documents Required:</h2>
              <label style={{ color: "red" }}>
                Only .png, .jpeg, .jpg and .pdf formats are allowed!
              </label>

              <div className="details-row-wrapper">
                {documentFields
                  .filter((doc) => {
                    // Convert both sides into arrays for consistency
                    const docCategories = Array.isArray(doc.category)
                      ? doc.category
                      : [doc.category];

                    const userCategories = Array.isArray(
                      enrollmentData.casteCategory
                    )
                      ? enrollmentData.casteCategory
                      : [enrollmentData.casteCategory];

                    // Show if "All" or if any category matches
                    return (
                      docCategories.includes("All") ||
                      docCategories.some((cat) => userCategories.includes(cat))
                    );
                  })
                  .map((doc, index) => (
                    <div className="input-group" key={index}>
                      <label>
                        {index + 1}.) {doc.label}{" "}
                        <span style={{ color: "red" }}>*</span>
                      </label>
                      {doc.note && <small>{doc.note}</small>}

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        {/* Hidden Input */}
                        <input
                          type="file"
                          id={`file-${doc.name}`}
                          name={doc.name}
                          accept=".jpg,.jpeg,.png,.pdf"
                          style={{ display: "none" }}
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              const allowedTypes = [
                                "image/jpeg",
                                "image/jpg",
                                "image/png",
                                "application/pdf",
                              ];

                              if (!allowedTypes.includes(file.type)) {
                                alert(
                                  "Invalid file type! Only JPG, JPEG, PNG, and PDF files are allowed."
                                );
                                e.target.value = "";
                                return;
                              }

                              setExamData((prev) => ({
                                ...prev,
                                [doc.name]: file.name,
                              }));
                              sessionStorage.setItem(doc.name, file.name);
                            }
                          }}
                          required
                        />

                        {/* Custom Label Button */}
                        <label
                          htmlFor={`file-${doc.name}`}
                          className="file-input-design"
                        >
                          <FontAwesomeIcon icon={faArrowUpFromBracket} />{" "}
                          {examData[doc.name] ? "Change File" : "Upload File"}
                        </label>

                        {/* Show selected file name */}
                        {examData[doc.name] && (
                          <span className="file-name">
                            📄 {examData[doc.name]}
                          </span>
                        )}
                      </div>

                      <div className="divider"></div>
                    </div>
                  ))}
              </div>

              <div className="next-btn">
                <Button
                  sx={{
                    background: "#8ABEB9",
                    color: "#fff",
                    width: "200px",
                    fontSize: "14px",
                    padding: ".5rem 0",
                    textTransform: "initial",
                    cursor: "pointer",
                  }}
                  onClick={changeTab}
                >
                  Save Details
                </Button>
              </div>
            </CustomTabPanel>

            {/* counselling package */}
            <CustomTabPanel value={value} index={2}>
              {/* <div className="courses-data-card"> */}
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
                          <StepButton
                            color="inherit"
                            onClick={handleStep(index)}
                          >
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
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            pt: 2,
                          }}
                        >
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
                                      style={{
                                        height: "20px",
                                        width: "20px",
                                      }}
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
                                      style={{
                                        height: "20px",
                                        width: "20px",
                                      }}
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
                                      style={{
                                        height: "20px",
                                        width: "20px",
                                      }}
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
                                      style={{
                                        height: "20px",
                                        width: "20px",
                                      }}
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
                                      style={{
                                        height: "20px",
                                        width: "20px",
                                      }}
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
                                      style={{
                                        height: "20px",
                                        width: "20px",
                                      }}
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
                                      style={{
                                        height: "20px",
                                        width: "20px",
                                      }}
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
                                      style={{
                                        height: "20px",
                                        width: "20px",
                                      }}
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
                                      style={{
                                        height: "20px",
                                        width: "20px",
                                      }}
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
                                      style={{
                                        height: "20px",
                                        width: "20px",
                                      }}
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
                                      style={{
                                        height: "20px",
                                        width: "20px",
                                      }}
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
                                      style={{
                                        height: "20px",
                                        width: "20px",
                                      }}
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
                                      style={{
                                        height: "20px",
                                        width: "20px",
                                      }}
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
                                      style={{
                                        height: "20px",
                                        width: "20px",
                                      }}
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
                          <div
                            className="details-row"
                            style={{ padding: "2rem" }}
                          >
                            <div className="input-group">
                              <label>Full Name</label>
                              <input
                                className="details-input"
                                placeholder="Full Name"
                                name="fullName"
                                value={enrollmentData.name}
                                onChange={(e) =>
                                  setEnrollmentData((prev) => ({
                                    ...prev,
                                    name: e.target.value,
                                  }))
                                }
                              />
                            </div>

                            <div className="input-group">
                              <label>Email Address</label>
                              <input
                                className="details-input"
                                placeholder="Email Address"
                                name="email"
                                value={enrollmentData.emailId}
                                onChange={(e) =>
                                  setEnrollmentData((prev) => ({
                                    ...prev,
                                    emailId: e.target.value,
                                  }))
                                }
                              />
                            </div>

                            <div className="input-group">
                              <label>Contact Number</label>
                              <input
                                className="details-input"
                                placeholder="Contact Number"
                                name="contactNo"
                                value={enrollmentData.contactNo}
                                onChange={(e) =>
                                  setEnrollmentData((prev) => ({
                                    ...prev,
                                    contactNo: e.target.value,
                                  }))
                                }
                              />
                            </div>

                            <div className="input-group">
                              <label>Selected Course</label>
                              <input
                                className="details-input"
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
                              personalDetailsData={enrollmentData}
                              selectCourse={selectedCourse}
                            />
                          </div>
                        )}

                        {activeStep + 1 === 4 && <div></div>}

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            pt: 2,
                          }}
                        >
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
                          {activeStep !== 3 && (
                            <Button
                              onClick={handleNext}
                              sx={{
                                mr: 1,
                                backgroundColor: "#4fb7b3",
                                color: "#fff",
                              }}
                            >
                              Save Details
                              <ChevronRightIcon />
                            </Button>
                          )}
                          {/* {activeStep === 2 && (
                            <Button
                              onClick={handleNext}
                              sx={{
                                mr: 1,
                                backgroundColor: "#4fb7b3",
                                color: "#fff",
                              }}
                              disabled={
                                documentFields.length &&
                                personalDetailsData.length
                              }
                            >
                              Save Data
                              <ChevronRightIcon />
                            </Button>
                          )} */}
                        </Box>
                      </React.Fragment>
                    )}
                  </div>
                </Box>
              </div>
              <div className="next-btn">
                <Button
                  sx={{
                    background: "#8ABEB9",
                    color: "#fff",
                    width: "200px",
                    fontSize: "14px",
                    padding: ".5rem 0",
                    textTransform: "initial",
                    cursor: isPersonalDetailsFilled ? "pointer" : "not-allowed",
                  }}
                  disabled={!isPersonalDetailsFilled}
                  onClick={() => {
                    setValue(value + 1);

                    // Ensure selectedCategories is always an array
                    setFilteredDocuments(
                      documentFields.filter((doc) => {
                        // Convert both sides into arrays for consistency
                        const docCategories = Array.isArray(doc.category)
                          ? doc.category
                          : [doc.category];

                        const userCategories = Array.isArray(
                          enrollmentData.casteCategory
                        )
                          ? enrollmentData.casteCategory
                          : [enrollmentData.casteCategory];

                        // Show if "All" or if any category matches

                        return (
                          docCategories.includes("All") ||
                          docCategories.some((cat) =>
                            userCategories.includes(cat)
                          )
                        );
                      })
                    );
                  }}
                >
                  Save Details
                </Button>
              </div>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={3}>
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                Personal Details
              </Typography>
              <TableContainer component={Paper} sx={{ mb: 3, borderRadius: 2 }}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                      <TableCell>{enrollmentData.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Contact No
                      </TableCell>
                      <TableCell>{enrollmentData.contactNo}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Email Address
                      </TableCell>
                      <TableCell>{enrollmentData.emailId}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Father's Name
                      </TableCell>
                      <TableCell>{enrollmentData.fatherName}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Father's Contact No
                      </TableCell>
                      <TableCell>{enrollmentData.fathersContactNo}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Mother's Name
                      </TableCell>
                      <TableCell>{enrollmentData.motherName}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Mother's Contact No
                      </TableCell>
                      <TableCell>{enrollmentData.mothersContactNo}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              {/* ===== Counselling Details Section ===== */}
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                Counselling & Course Details
              </Typography>
              <TableContainer
                component={Paper}
                sx={{ mb: 3, borderRadius: 2, display: "flex" }}
              >
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Selected Course
                      </TableCell>
                      <TableCell>{selectedCourse}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Enrolled Exam
                      </TableCell>
                      <TableCell>{enrollmentData.enrolledExam}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Counselling Package
                      </TableCell>
                      <TableCell>
                        {enrollmentData.counsellingPackageName}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Counselling Fee
                      </TableCell>
                      <TableCell>
                        {enrollmentData.counsellingPackageFee}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Fees Paid:
                      </TableCell>
                      <TableCell>{selectedCourse}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Payment Method
                      </TableCell>
                      <TableCell>{enrollmentData.enrolledExam}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Counselling Package
                      </TableCell>
                      <TableCell>
                        {enrollmentData.counsellingPackageName}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Counselling Fee
                      </TableCell>
                      <TableCell>
                        {enrollmentData.counsellingPackageFee}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              {/* ===== Uploaded Documents Section ===== */}
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                Uploaded Documents
              </Typography>

              <TableContainer component={Paper} sx={{ borderRadius: 2, p: 2 }}>
                <Table>
                  <TableBody
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* LEFT HALF */}
                    <Box sx={{ flex: 1, mr: 2 }}>
                      {filteredDocuments && filteredDocuments.length > 0 ? (
                        filteredDocuments
                          .slice(0, Math.ceil(filteredDocuments.length / 2))
                          .map((doc, index) => (
                            <TableRow key={index}>
                              <TableCell sx={{ fontWeight: "bold" }}>
                                {index + 1}. {doc.label}
                              </TableCell>

                              <TableCell>
                                <div>{examData[doc.name]}</div>
                                {examData[doc.name] ? (
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "10px",
                                    }}
                                  >
                                    <Button
                                      variant="text"
                                      sx={{
                                        color: "#007bff",
                                        textTransform: "none",
                                      }}
                                      onClick={() => {
                                        const file = examData[doc.name];

                                        if (!file) {
                                          alert(
                                            "No valid file found for this document"
                                          );
                                          return;
                                        }

                                        let fileUrl;

                                        // CASE 1: file is a File object
                                        if (file instanceof File) {
                                          fileUrl = URL.createObjectURL(file);
                                        }
                                        // CASE 2: file has a URL property (from backend)
                                        else if (
                                          typeof file === "object" &&
                                          file.url
                                        ) {
                                          fileUrl = file.url.startsWith("http")
                                            ? file.url.replace(
                                                /^https?:\/\/localhost:\d+/,
                                                ""
                                              ) // remove localhost
                                            : file.url;
                                        }
                                        // CASE 3: file is a string (URL or path)
                                        else if (typeof file === "string") {
                                          fileUrl = file.startsWith("http")
                                            ? file.replace(
                                                /^https?:\/\/localhost:\d+/,
                                                ""
                                              ) // remove localhost
                                            : file;
                                        } else {
                                          alert("Unsupported file type");
                                          return;
                                        }

                                        // Open file in new tab
                                        window.open(fileUrl, "_blank");
                                      }}
                                    >
                                      📄 View
                                    </Button>

                                    <label
                                      htmlFor={`file-change-${doc.name}`}
                                      style={{
                                        cursor: "pointer",
                                        background: "#239ba7",
                                        color: "white",
                                        padding: "6px 12px",
                                        borderRadius: "6px",
                                        fontSize: "14px",
                                        transition: "background 0.3s ease",
                                      }}
                                    >
                                      Change
                                    </label>
                                    <input
                                      type="file"
                                      id={`file-change-${doc.name}`}
                                      accept=".jpg,.jpeg,.png,.pdf"
                                      style={{ display: "none" }}
                                      onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                          const allowedTypes = [
                                            "image/jpeg",
                                            "image/jpg",
                                            "image/png",
                                            "application/pdf",
                                          ];
                                          if (
                                            !allowedTypes.includes(file.type)
                                          ) {
                                            alert(
                                              "Invalid file type! Only JPG, JPEG, PNG, and PDF are allowed."
                                            );
                                            e.target.value = "";
                                            return;
                                          }

                                          const fileURL =
                                            URL.createObjectURL(file);
                                          setExamData((prev) => ({
                                            ...prev,
                                            [doc.name]: {
                                              name: file.name,
                                              url: fileURL,
                                            },
                                          }));
                                          sessionStorage.setItem(
                                            doc.name,
                                            JSON.stringify({
                                              name: file.name,
                                              url: fileURL,
                                            })
                                          );
                                        }
                                      }}
                                    />
                                  </div>
                                ) : (
                                  <span style={{ color: "gray" }}>
                                    Not uploaded yet
                                  </span>
                                )}
                              </TableCell>
                            </TableRow>
                          ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={2} align="center">
                            No documents available
                          </TableCell>
                        </TableRow>
                      )}
                    </Box>

                    {/* RIGHT HALF */}
                    <Box sx={{ flex: 1 }}>
                      {filteredDocuments && filteredDocuments.length > 0 ? (
                        filteredDocuments
                          .slice(Math.ceil(filteredDocuments.length / 2))
                          .map((doc, index) => (
                            <TableRow key={index}>
                              <TableCell sx={{ fontWeight: "bold" }}>
                                {index +
                                  1 +
                                  Math.ceil(filteredDocuments.length / 2)}
                                . {doc.label}
                              </TableCell>

                              <TableCell>
                                <div>{examData[doc.name]}</div>
                                {examData[doc.name] ? (
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "10px",
                                    }}
                                  >
                                    <Button
                                      variant="text"
                                      sx={{
                                        color: "#007bff",
                                        textTransform: "none",
                                      }}
                                      onClick={() => {
                                        const file = examData[doc.name];
                                        if (file instanceof File) {
                                          const blobUrl =
                                            URL.createObjectURL(file);
                                          window.open(blobUrl, "_blank");
                                        } else if (
                                          typeof file === "string" &&
                                          file.startsWith("blob:")
                                        ) {
                                          window.open(file, "_blank");
                                        } else if (typeof file === "string") {
                                          window.open(file, "_blank");
                                        } else {
                                          alert(
                                            "No valid file found for this document"
                                          );
                                        }
                                      }}
                                    >
                                      📄 View
                                    </Button>

                                    <label
                                      htmlFor={`file-change-${doc.name}`}
                                      style={{
                                        cursor: "pointer",
                                        background: "#239ba7",
                                        color: "white",
                                        padding: "6px 12px",
                                        borderRadius: "6px",
                                        fontSize: "14px",
                                      }}
                                    >
                                      Change
                                    </label>
                                    <input
                                      type="file"
                                      id={`file-change-${doc.name}`}
                                      accept=".jpg,.jpeg,.png,.pdf"
                                      style={{ display: "none" }}
                                      onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                          const allowedTypes = [
                                            "image/jpeg",
                                            "image/jpg",
                                            "image/png",
                                            "application/pdf",
                                          ];
                                          if (
                                            !allowedTypes.includes(file.type)
                                          ) {
                                            alert(
                                              "Invalid file type! Only JPG, JPEG, PNG, and PDF are allowed."
                                            );
                                            e.target.value = "";
                                            return;
                                          }

                                          const fileURL =
                                            URL.createObjectURL(file);
                                          setExamData((prev) => ({
                                            ...prev,
                                            [doc.name]: {
                                              name: file.name,
                                              url: fileURL,
                                            },
                                          }));
                                          sessionStorage.setItem(
                                            doc.name,
                                            JSON.stringify({
                                              name: file.name,
                                              url: fileURL,
                                            })
                                          );
                                        }
                                      }}
                                    />
                                  </div>
                                ) : (
                                  <span style={{ color: "gray" }}>
                                    Not uploaded yet
                                  </span>
                                )}
                              </TableCell>
                            </TableRow>
                          ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={2} align="center">
                            No documents available
                          </TableCell>
                        </TableRow>
                      )}
                    </Box>
                  </TableBody>
                </Table>
              </TableContainer>

              {/* ===== Download PDF Button ===== */}
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  onClick={handleDownloadPDF}
                  sx={{
                    mt: 3,
                    backgroundColor: "#4fb7b3",
                    color: "#fff",
                    textTransform: "none",
                    borderRadius: 2,
                    px: 3,
                  }}
                >
                  Download Enrollment PDF
                </Button>
              </div>
            </CustomTabPanel>
          </Box>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
