import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import "./OptionForm.css";
import Button from "@mui/material/Button";
import CustomSelect from "../features/CustomSelect";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import BreadcrumbsNav from "../nav/BreadcrumbsNav";
import SuccessGif from "../images/about-us-imgs/verified.gif";
function OptionForm() {
  const [showTable, setShowTable] = useState(false);
  const [insertChoiceData, setInsertChoiceData] = useState(false);
  const [moveChoiceData, setMoveChoiceData] = useState(false);
  const [formData, setFormData] = useState({
    university_name: "",
    course_name: "",
    district: "",
    institute_status: "",
    autonomy_status: "",
    minority_status: "",
    tfws: "",
  });

  const [optionData, setOptionData] = useState({
    university_name: "",
    institute_status: "",
    choice_code: "",
    preference_no: 0,
  });

  const preference_no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const showTableData = () => {
    setShowTable(true);
  };
  const universities = [
    "Dr. Babasaheb Ambedkar Marathwada University, Aurangabad",
    "Gondwana University, Gadchiroli",
    "Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon",
    "Kavi Kulguru Sanskrit Vishwavidyalaya, Ramtek",
    "Mumbai University, Mumbai",
    "Punyashlok Ahilyadevi Holkar Solapur University, Solapur",
    "Rashtrasant Tukdoji Maharaj Nagpur University, Nagpur",
    "Sant Gadge Baba Amravati University, Amravati",
    "Savitribai Phule Pune University",
    "Shivaji University, Kolhapur",
    "Smt. Nathibai Damodar Thakersey Women’s University, Mumbai",
    "Swami Ramanand Teerth Marathwada University, Nanded",
    "Yashwantrao Chavan Maharashtra Open University, Nashik",
    "Maharashtra National Law University, Aurangabad",
    "Maharashtra National Law University, Mumbai",
    "Maharashtra National Law University, Nagpur",
    "Dr. Homi Bhabha State University, Mumbai",
    "HSNC University, Mumbai",
    "Deccan College Postgraduate & Research Institute, Pune",
    "Gokhale Institute Of Politics & Economics, Pune",
    "Tilak Maharashtra Vidyapeeth, Pune",
    "Bharati Vidyapeeth University",
    "Symbiosis International University",
    "Ajeenkya D.Y.Patil University",
    "Amity University, Mumbai",
    "Chhatrapati Shivaji Maharaj University, Panvel",
    "D Y Patil International University, Pune",
    "D Y Patil University Ambi, Pune",
    "Dr. Vishwanath Karad Mit World Peace University, Pune",
    "Flame University, Pune",
    "MGM University, Aurangabad",
    "MIT Art, Design And Technology University, Loni-Kalbhor",
    "Sandip University, Nashik",
    "Sanjay Ghodawat University, Kolhapur",
    "Somaiya Vidyavihar University, Mumbai",
  ];

  const autonomy_status = ["Autonomous", "Non-Autonomous"];

  const course_name = [
    "Computer Science and Engineering",
    "Electronics and Communication Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Aerospace Engineering",
    "Chemical Engineering",
    "Biotechnology Engineering",
    "B.Sc Physics",
    "B.Sc Chemistry",
    "B.Sc Mathematics",
    "B.Sc Zoology",
    "B.Sc Botany",
    "B.Sc Microbiology",
    "M.Sc Physics",
    "M.Sc Biochemistry",
    "MBBS",
    "BDS",
    "BAMS",
    "BHMS",
    "B.Sc Nursing",
    "B.Pharm",
    "Physiotherapy",
    "Occupational Therapy",
    "B.A English",
    "B.A History",
    "B.A Political Science",
    "B.A Sociology",
    "M.A Psychology",
    "M.A Geography",
    "B.Com",
    "BBA",
    "MBA",
    "PGDM",
    "M.Com",
    "BCA",
    "B.Sc IT",
    "MCA",
    "Data Science Certification",
    "Cybersecurity Certification",
    "LLB",
    "LLM",
    "BA LLB (Integrated)",
    "BBA LLB (Integrated)",
    "B.Ed",
    "M.Ed",
    "Diploma in Teacher Training",
    "B.Arch",
    "Bachelor of Design (B.Des)",
    "Fashion Design",
    "Interior Design",
    "Graphic Design",
    "Fine Arts (BFA)",
    "B.Sc Agriculture",
    "Veterinary Science (BVSc)",
    "Fisheries Science",
    "Forestry",
    "Bachelor of Hotel Management (BHM)",
    "Diploma in Hospitality",
    "Travel Management",
  ];

  const tfws = ["Yes", "No"];
  const district = [
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Beed",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Chhatrapati Sambhajinagar",
    "Dhule",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "NaviMumbai",
    "Osmanabad",
    "Palghar",
    "Pandharpur",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sindhudurg",
    "Solapur",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal",
  ];

  const institute_status = [
    "Goverment",
    "Goverment-aided",
    "University",
    "University Department",
    "University Managed",
    "University Managed(Un-Aided)",
    "Deemed University",
    "Un-Aided",
  ];

  const minority_status = [
    "Non-Minority",
    "Linguistic Minority - Gujar",
    "Linguistic Minority - Gujarathi",
    "Linguistic Minority - Gujarathi(Jain)",
    "Linguistic Minority - Hindi",
    "Linguistic Minority - Malyalam",
    "Linguistic Minority - Punjabi",
    "Linguistic Minority - Sindhi",
    "Linguistic Minority - Tamil",
    "Linguistic Minority - Christian",
    "Linguistic Minority - Jain",
    "Linguistic Minority - Muslim",
  ];
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#472183",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(() => ({
    "td, th, thead": {
      border: "2px solid #ccc",
    },
  }));

  const [selectedColleges, setSelectedColleges] = useState([]);
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [shortlistedColleges, setShortlistedColleges] = useState([]);
  const [showSelectedColleges, setShowSelectedColleges] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { number: 1, name: "Shortlist Your Options" },
    { number: 2, name: "Set Your Preferences" },
    { number: 3, name: "Option Form Summary" },
    { number: 4, name: "Confirm Your Option Form" },
  ];
  const handleCheck = (row) => {
    const isAlreadySelected = selectedColleges.some(
      (item) => item.Choice_Code === row.Choice_Code
    );

    if (isAlreadySelected) {
      // Remove if already selected
      setSelectedColleges(
        selectedColleges.filter((item) => item.Choice_Code !== row.Choice_Code)
      );
    } else {
      // Add if not selected
      setSelectedColleges([...selectedColleges, row]);
    }
  };

  const handlePreferenceCheck = (row) => {
    const isAlreadySelected = selectedPreferences.some(
      (item) => item.Choice_Code === row.Choice_Code
    );

    if (isAlreadySelected) {
      // Remove and re-order remaining preferences
      const updated = selectedPreferences
        .filter((item) => item.Choice_Code !== row.Choice_Code)
        .map((item, index) => ({ ...item, preference_no: index + 1 }));

      setSelectedPreferences(updated);
    } else {
      // Add new selection with next preference number
      setSelectedPreferences([
        ...selectedPreferences,
        { ...row, preference_no: selectedPreferences.length + 1 },
      ]);
    }
  };

  const handleShortlist = (row) => {
    setShortlistedColleges([...shortlistedColleges, row]);
    // }
  };

  const addColleges = () => {
    setShowSelectedColleges(true);
  };

  const saveOptionData = () => {
    setCurrentStep(4);
  };
  const institute_names = [
    "Jaywant Shikshan Prasarak Mandal's Rajarshi Shahu College of Engineering, Tathawade, Pune",
    "Genba Sopanrao Moze College of Engineering, Baner-Balewadi, Pune",
    "JSPM's Jaywantrao Sawant College of Engineering, Pune",
    "MIT Academy of Engineering, Alandi, Pune",
    "Siddhant College of Engineering, A/p Sudumbre, Tal. Maval, Dist-Pune",
  ];

  const choice_code = [
    "0614924510",
    "0614924511",
    "0614924512",
    "0614924513",
    "0614924514",
    "0614924515",
  ];
  const table_data = [
    {
      Sr_No: 1,
      Institute_Code: "06141",
      Institute_Name:
        "Jaywant Shikshan Prasarak Mandal's Rajarshi Shahu College of Engineering, Tathawade, Pune",
      University_Name: "Savitribai Phule Pune University",
      Course_Name: "Computer Engineering",
      SL_HU_OHU: "SL",
      Choice_Code: "0614924510",
    },
    {
      Sr_No: 2,
      Institute_Code: "06144",
      Institute_Name:
        "Genba Sopanrao Moze College of Engineering, Baner-Balewadi, Pune",
      University_Name: "Savitribai Phule Pune University",
      Course_Name: "Computer Engineering",
      SL_HU_OHU: "HU",
      Choice_Code: "0614924511",
    },
    {
      Sr_No: 3,
      Institute_Code: "06145",
      Institute_Name: "JSPM's Jaywantrao Sawant College of Engineering, Pune",
      University_Name: "Savitribai Phule Pune University",
      Course_Name: "Computer Engineering",
      SL_HU_OHU: "OHU",
      Choice_Code: "0614924512",
    },
    {
      Sr_No: 4,
      Institute_Code: "06146",
      Institute_Name: "MIT Academy of Engineering, Alandi, Pune",
      University_Name: "Savitribai Phule Pune University",
      Course_Name: "Computer Engineering",
      SL_HU_OHU: "OHU",
      Choice_Code: "0614924513",
    },
    {
      Sr_No: 5,
      Institute_Code: "06148",
      Institute_Name:
        "Siddhant College of Engineering, A/p Sudumbre, Tal. Maval, Dist-Pune",
      University_Name: "Savitribai Phule Pune University",
      Course_Name: "Computer Engineering",
      SL_HU_OHU: "HU",
      Choice_Code: "0614924514",
    },
    {
      Sr_No: 6,
      Institute_Code: "06155",
      Institute_Name:
        "G.H. Raisoni College of Engineering & Management, Wagholi, Pune",
      University_Name: "Savitribai Phule Pune University",
      Course_Name: "Computer Engineering",
      SL_HU_OHU: "SL",
      Choice_Code: "0614924515",
    },
    {
      Sr_No: 7,
      Institute_Code: "06156",
      Institute_Name:
        "Marathwada Mitra Mandal's College of Engineering, Karvenagar, Pune",
      University_Name: "Savitribai Phule Pune University",
      Course_Name: "Computer Engineering",
      SL_HU_OHU: "SL",
      Choice_Code: "0614924516",
    },
    {
      Sr_No: 8,
      Institute_Code: "06175",
      Institute_Name:
        "Pimpri Chinchwad Education Trust, Pimpri Chinchwad College of Engineering, Pune",
      University_Name: "Savitribai Phule Pune University",
      Course_Name: "Computer Engineering",
      SL_HU_OHU: "HU",
      Choice_Code: "0614924517",
    },
    {
      Sr_No: 9,
      Institute_Code: "06177",
      Institute_Name: "Sinhgad College of Engineering, Vadgaon (BK), Pune",
      University_Name: "Savitribai Phule Pune University",
      Course_Name: "Computer Engineering",
      SL_HU_OHU: "HU",
      Choice_Code: "0614924518",
    },
    {
      Sr_No: 10,
      Institute_Code: "06178",
      Institute_Name:
        "Sinhgad Technical Education Society's Smt. Kashibai Navale College of Engineering, Vadgaon, Pune",
      University_Name: "Savitribai Phule Pune University",
      Course_Name: "Computer Engineering",
      SL_HU_OHU: "OHU",
      Choice_Code: "0614924519",
    },
    {
      Sr_No: 11,
      Institute_Code: "06179",
      Institute_Name: "Indira College of Engineering & Management, Pune",
      University_Name: "Savitribai Phule Pune University",
      Course_Name: "Computer Engineering",
      SL_HU_OHU: "OHU",
      Choice_Code: "0614924520",
    },
    {
      Sr_No: 12,
      Institute_Code: "06182",
      Institute_Name:
        "Sinhgad Technical Education Society, Sinhgad Institute of Technology and Science, Narhe (Ambegaon)",
      University_Name: "Savitribai Phule Pune University",
      Course_Name: "Computer Engineering",
      SL_HU_OHU: "SL",
      Choice_Code: "0614924521",
    },
    {
      Sr_No: 13,
      Institute_Code: "06183",
      Institute_Name:
        "Al-Ameen Educational and Medical Foundation, College of Engineering, Koregaon Bhima",
      University_Name: "Savitribai Phule Pune University",
      Course_Name: "Computer Engineering",
      SL_HU_OHU: "SL",
      Choice_Code: "0614924522",
    },
  ];

  const filteredData = table_data.filter((college) => {
    return (
      formData.university_name === "" ||
      college.University_Name === formData.university_name
    );
  });

  const deleteSelectedColleges = () => {
    const remainingColleges = shortlistedColleges.filter(
      (college) =>
        !selectedColleges.some((selected) => selected.Sr_No === college.Sr_No)
    );

    setShortlistedColleges(remainingColleges);

    const remainingSelected = selectedColleges.filter(
      (selected) =>
        !shortlistedColleges.some((college) => college.Sr_No === selected.Sr_No)
    );

    setSelectedColleges(remainingSelected);

    if (remainingSelected.length === 0) setShowSelectedColleges(false);
  };

  const saveShortlistData = () => {
    setCurrentStep(2);
  };

  const resetPreferenceList = () => {
    setSelectedPreferences([]);
  };
  const savePreferenceData = () => {
    setCurrentStep(3);
  };
  const insertChoiceCode = () => {
    const { choice_code, preference_no, institute_name, university_name } =
      optionData;

    if (!choice_code || !preference_no) {
      alert("Please select a Preference Number!");
      return;
    }

    const existingChoice = selectedColleges.find(
      (item) => item.Choice_Code === choice_code
    );

    if (existingChoice) {
      alert("This Choice Code is already added.");
      return;
    }

    const newPrefNo = parseInt(preference_no);

    // Shift existing preferences
    const updatedPreferences = selectedPreferences.map((item) => {
      if (item.preference_no >= newPrefNo) {
        return { ...item, preference_no: item.preference_no + 1 };
      }
      return item;
    });

    // Add the new preference
    updatedPreferences.push({
      Choice_Code: choice_code,
      preference_no: newPrefNo,
    });

    setSelectedPreferences(updatedPreferences);

    const newCollege = {
      Sr_No: selectedColleges.length + 1,
      Choice_Code: choice_code,
      Institute_Name: institute_name,
      University_Name: university_name,
      Course_Name: table_data.filter(
        (f) => f.Institute_Name === institute_name
      )[0].Course_Name,
      Institute_Code: table_data.filter(
        (f) => f.Institute_Name === institute_name
      )[0].Institute_Code,
      SL_HU_OHU: table_data.filter(
        (f) => f.Institute_Name === institute_name
      )[0].SL_HU_OHU,
    };

    setSelectedColleges([...selectedColleges, newCollege]);

    // Reset optionData
    setOptionData({
      choice_code: "",
      preference_no: "",
      institute_name: "",
      university_name: "",
      course_name: "",
    });
  };

  const moveChoice = () => {
    if (insertChoiceData) {
      setInsertChoiceData(false);
      setMoveChoiceData(true);
    } else {
      setMoveChoiceData(true);
    }
  };

  const showInsertChoice = () => {
    if (moveChoiceData) {
      setMoveChoiceData(false);
      setInsertChoiceData(true);
    } else {
      setInsertChoiceData(true);
    }
  };

  const moveRow = () => {
    const { preference_no, choice_code } = optionData;

    if (!preference_no || !choice_code) {
      alert("Please select both Preference Number and Choice Code");
      return;
    }

    const prefNumber = parseInt(preference_no, 10);

    // Check if the choice code is already in the list
    const existingIndex = selectedPreferences.findIndex(
      (item) => item.Choice_Code === choice_code
    );

    let updatedPreferences;

    if (existingIndex !== -1) {
      const itemToMove = selectedPreferences[existingIndex];
      const filteredPreferences = selectedPreferences.filter(
        (item) => item.Choice_Code !== choice_code
      );

      filteredPreferences.splice(prefNumber - 1, 0, itemToMove);

      updatedPreferences = filteredPreferences.map((item, index) => ({
        ...item,
        preference_no: index + 1,
      }));
    } else {
      const newPreference = {
        Choice_Code: choice_code,
        preference_no: prefNumber,
      };

      const newPreferencesList = [...selectedPreferences];
      newPreferencesList.splice(prefNumber - 1, 0, newPreference);

      updatedPreferences = newPreferencesList.map((item, index) => ({
        ...item,
        preference_no: index + 1,
      }));
    }

    setSelectedPreferences(updatedPreferences);

    const existsInColleges = selectedColleges.some(
      (col) => col.Choice_Code === choice_code
    );
    if (!existsInColleges) {
      const collegeData = table_data.find((f) => f.Choice_Code === choice_code);
      if (collegeData) {
        const newCollege = {
          Sr_No: selectedColleges.length + 1,
          Choice_Code: choice_code,
          Institute_Name: collegeData.Institute_Name,
          University_Name: collegeData.University_Name,
          Course_Name: collegeData.Course_Name,
          Institute_Code: collegeData.Institute_Code,
          SL_HU_OHU: collegeData.SL_HU_OHU || "",
        };
        setSelectedColleges([...selectedColleges, newCollege]);
      }
    }
    setOptionData({
      choice_code: "",
      institute_name: "",
      university_name: "",
      course_name: "",
    });
  };

  return (
    <div className="option-form-container">
      <Nav />
      <div className="option-form-data">
        <div className="breadcrumbs-div">
          <BreadcrumbsNav />
        </div>
        <div className="option-form-data-card">
          <div className="option-form-heading">PRACTICE OPTION FORM</div>
          <div className="option-form-steps">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`steps-div ${
                  currentStep === step.number
                    ? "active"
                    : currentStep > step.number
                    ? "completed"
                    : "disabled"
                }`}
                onClick={() => setCurrentStep(step.number)}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-name">{step.name}</div>
              </div>
            ))}
          </div>

          {/* step 1 shortlist option */}

          {currentStep === 1 ? (
            <div>
              <div className="option-form-title">Shortlist Your Options</div>
              <div className="option-form-actions">
                <Button
                  sx={{
                    background: "#08CB00",
                    color: "#fff",
                    width: "400px",
                    fontSize: "14px",
                    padding: "1rem 0",
                    textTransform: "initial",
                  }}
                >
                  View Personal Information & Important Instructions
                </Button>
                <div className="action-text">
                  Note: L in Choice_Code indicates Course in Regional Language
                </div>
              </div>
              <div className="option-form-inputs">
                <div className="form-row">
                  Select Course_Name
                  <CustomSelect
                    name="course_name"
                    options={course_name}
                    value={formData.course_name}
                    height={35}
                    borderRadius={5}
                    width={500}
                    placeholder="---Select Course---"
                    onChange={(value) =>
                      setFormData({ ...formData, course_name: value })
                    }
                  ></CustomSelect>
                </div>
                <div className="form-row-2">
                  <div className="row-data">
                    Select University
                    <CustomSelect
                      name="university_name"
                      options={universities}
                      value={formData.university_name}
                      height={35}
                      borderRadius={5}
                      width={350}
                      placeholder="All"
                      onChange={(value) =>
                        setFormData({ ...formData, university_name: value })
                      }
                    ></CustomSelect>
                  </div>
                  <div className="row-data">
                    Select District
                    <CustomSelect
                      name="district"
                      options={district}
                      value={formData.district}
                      height={35}
                      borderRadius={5}
                      width={350}
                      placeholder="All"
                      onChange={(value) =>
                        setFormData({ ...formData, district: value })
                      }
                    ></CustomSelect>
                  </div>
                </div>
                <div className="form-row-3">Institute Status Details</div>
                <div className="form-row-2">
                  <div className="row-data">
                    Select Institute Status
                    <CustomSelect
                      name="institute_status"
                      options={institute_status}
                      value={formData.institute_status}
                      height={35}
                      borderRadius={5}
                      width={350}
                      placeholder="All"
                      onChange={(value) =>
                        setFormData({ ...formData, institute_status: value })
                      }
                    ></CustomSelect>
                  </div>
                  <div className="row-data">
                    Select Institute Autonomy Status
                    <CustomSelect
                      name="autonomy_status"
                      options={autonomy_status}
                      value={formData.autonomy_status}
                      height={35}
                      borderRadius={5}
                      width={350}
                      placeholder="All"
                      onChange={(value) =>
                        setFormData({ ...formData, autonomy_status: value })
                      }
                    ></CustomSelect>
                  </div>
                </div>
                <div className="form-row-2">
                  <div className="row-data">
                    Select Institute Minority Status
                    <CustomSelect
                      name="minority_status"
                      options={minority_status}
                      value={formData.minority_status}
                      height={35}
                      borderRadius={5}
                      width={350}
                      placeholder="All"
                      onChange={(value) =>
                        setFormData({ ...formData, minority_status: value })
                      }
                    ></CustomSelect>
                  </div>
                  <div className="row-data">
                    Select TFWS Status
                    <CustomSelect
                      name="tfws"
                      options={tfws}
                      value={formData.tfws}
                      height={35}
                      borderRadius={5}
                      width={350}
                      placeholder="All"
                      onChange={(value) =>
                        setFormData({ ...formData, tfws: value })
                      }
                    ></CustomSelect>
                  </div>
                </div>
                <div className="form-btn">
                  <Button
                    sx={{
                      background: "#154D71",
                      color: "#fff",
                      width: "150px",
                      fontSize: "14px",
                      padding: ".5rem 0",
                      textTransform: "initial",
                    }}
                    onClick={showTableData}
                  >
                    Search Institute
                  </Button>
                </div>
              </div>
              <div className="form-table">
                {showTable ? (
                  <>
                    <div className="table-btn">
                      <Button
                        sx={{
                          background: "#08CB00",
                          color: "#fff",
                          width: "200px",
                          height: "35px",
                          fontSize: "14px",
                          padding: "1rem 0",
                          textTransform: "initial",
                        }}
                        onClick={addColleges}
                      >
                        ADD Selected Options
                      </Button>
                    </div>
                    <div className="table-data">
                      <div className="table-heading">
                        {" "}
                        Select Option of Your Choice
                      </div>
                      <TableContainer component={Paper}>
                        <Table
                          sx={{
                            minWidth: 700,
                            border: "1px solid #ccc",
                            "& th, & td": { border: "1px solid #ccc" },
                          }}
                          aria-label="customized table"
                        >
                          <TableHead>
                            <TableRow sx={{ border: "1px solid #ccc" }}>
                              <StyledTableCell>Sr_No.</StyledTableCell>
                              <StyledTableCell align="center">
                                Institute Code
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                Institute_Name
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                University Name
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                Choice_Code
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                Select
                              </StyledTableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {filteredData.map((row) => (
                              <StyledTableRow key={row.Sr_No}>
                                <StyledTableCell
                                  component="th"
                                  scope="row"
                                  align="center"
                                >
                                  {row.Sr_No}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                  {row.Institute_Code}
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  {row.Institute_Name}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                  {row.University_Name}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                  {row.Choice_Code}
                                </StyledTableCell>
                                <TableCell padding="checkbox" align="center">
                                  <Checkbox
                                    color="primary"
                                    indeterminate={false}
                                    checked={selectedColleges.some(
                                      (item) =>
                                        item.Choice_Code === row.Choice_Code
                                    )}
                                    onChange={() => handleCheck(row)}
                                    inputProps={{
                                      "aria-label": "select all desserts",
                                    }}
                                  />
                                  {/* onChange={onSelectAllClick} */}
                                </TableCell>
                              </StyledTableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                    <div className="table-btn">
                      <Button
                        sx={{
                          background: "#08CB00",
                          color: "#fff",
                          width: "200px",
                          height: "35px",
                          fontSize: "14px",
                          padding: "1rem 0",
                          textTransform: "initial",
                        }}
                        onClick={addColleges}
                      >
                        ADD Selected Options
                      </Button>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {showSelectedColleges ? (
                  <div className="table-data">
                    <div className="table-heading">
                      {" "}
                      Your Shortlisted Options
                    </div>
                    <TableContainer component={Paper}>
                      <Table
                        sx={{
                          minWidth: 700,
                          border: "1px solid #ccc",
                          "& th, & td": { border: "1px solid #ccc" },
                        }}
                        aria-label="customized table"
                      >
                        <TableHead>
                          <TableRow sx={{ border: "1px solid #ccc" }}>
                            <StyledTableCell>Sr_No.</StyledTableCell>
                            <StyledTableCell align="center">
                              Institute Code
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              Institute_Name
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              University Name
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              Choice_Code
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              Select
                            </StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {selectedColleges.map((row, index) => (
                            <StyledTableRow key={index}>
                              <StyledTableCell
                                component="th"
                                scope="row"
                                align="center"
                              >
                                {index + 1}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {row.Institute_Code}
                              </StyledTableCell>
                              <StyledTableCell align="left">
                                {row.Institute_Name}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {row.University_Name}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {row.Choice_Code}
                              </StyledTableCell>
                              <TableCell padding="checkbox" align="center">
                                <Checkbox
                                  color="primary"
                                  indeterminate={false}
                                  checked={shortlistedColleges.some(
                                    (item) =>
                                      item.Choice_Code === row.Choice_Code
                                  )}
                                  onChange={() => handleShortlist(row)}
                                />
                              </TableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <div className="table-btn">
                      <Button
                        sx={{
                          background: "#DC143C",
                          color: "#fff",
                          width: "200px",
                          height: "35px",
                          fontSize: "14px",
                          padding: "1rem 0",
                          textTransform: "initial",
                        }}
                        onClick={deleteSelectedColleges}
                      >
                        DELETE Selected Options
                      </Button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="form-btn">
                <Button
                  sx={{
                    background: "#154D71",
                    color: "#fff",
                    width: "150px",
                    fontSize: "14px",
                    padding: ".5rem 0",
                    textTransform: "initial",
                  }}
                  onClick={saveShortlistData}
                >
                  Save & Proceed{" "}
                  <span
                    style={{
                      fontSize: "10px",
                      color: "#fff",
                      marginLeft: "10px",
                    }}
                  >
                    &gt;&gt;&gt;
                  </span>
                </Button>
              </div>
            </div>
          ) : (
            ""
          )}

          {/* step 2 set preference */}
          {currentStep === 2 ? (
            <div>
              <div className="option-form-title">Set Your Preferences</div>
              <div className="option-form-actions">
                <Button
                  sx={{
                    background: "#08CB00",
                    color: "#fff",
                    width: "400px",
                    fontSize: "14px",
                    padding: "1rem 0",
                    textTransform: "initial",
                  }}
                >
                  View Personal Information & Important Instructions
                </Button>
                {/* <div className="action-text">
                  Note: L in Choice_Code indicates Course in Regional Language
                </div> */}
              </div>
              <div className="table-data">
                <TableContainer component={Paper}>
                  <Table
                    sx={{
                      minWidth: 700,
                      border: "1px solid #ccc",
                      fontSize: "14px",
                      "& th, & td": { border: "1px solid #ccc" },
                    }}
                    aria-label="customized table"
                  >
                    <TableHead>
                      <TableRow sx={{ border: "1px solid #ccc" }}>
                        <StyledTableCell>Sr_No.</StyledTableCell>
                        <StyledTableCell align="center">
                          Institute Code
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Institute_Name
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          University Name
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          SL/HU/OHU
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Course Name
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Choice_Code
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Set Preferences
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Preferences No.
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {selectedColleges.map((row) => (
                        <StyledTableRow
                          key={row.Sr_No}
                          className={
                            selectedPreferences.some(
                              (item) => item.Choice_Code === row.Choice_Code
                            )
                              ? "selected-row"
                              : ""
                          }
                        >
                          <StyledTableCell
                            component="th"
                            scope="row"
                            align="center"
                          >
                            {row.Sr_No}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.Institute_Code}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {row.Institute_Name}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.University_Name}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.SL_HU_OHU}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.Course_Name}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.Choice_Code}
                          </StyledTableCell>
                          <TableCell padding="checkbox" align="center">
                            <Checkbox
                              color="primary"
                              indeterminate={false}
                              checked={selectedPreferences.some(
                                (item) => item.Choice_Code === row.Choice_Code
                              )}
                              onChange={() => handlePreferenceCheck(row)}
                              inputProps={{
                                "aria-label": "select preference",
                              }}
                            />
                            {/* onChange={onSelectAllClick} */}
                          </TableCell>
                          <TableCell align="center">
                            <input
                              style={{
                                width: "40px",
                                textAlign: "center",
                                fontWeight: 500,
                                fontSize: "16px",
                              }}
                              type="number"
                              value={
                                selectedPreferences.find(
                                  (item) => item.Choice_Code === row.Choice_Code
                                )?.preference_no || ""
                              }
                              readOnly
                            />
                          </TableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <div className="preferences-btns">
                  <Button
                    sx={{
                      background: "#DC143C",
                      color: "#fff",
                      width: "200px",
                      height: "35px",
                      fontSize: "14px",
                      padding: "1rem 0",
                      textTransform: "initial",
                    }}
                    onClick={resetPreferenceList}
                  >
                    Reset My Preferences
                  </Button>
                  <Button
                    sx={{
                      background: "#154D71",
                      color: "#fff",
                      width: "150px",
                      fontSize: "14px",
                      padding: ".5rem 0",
                      textTransform: "initial",
                    }}
                    onClick={savePreferenceData}
                  >
                    Save & Proceed{" "}
                    <span
                      style={{
                        fontSize: "10px",
                        color: "#fff",
                        marginLeft: "10px",
                      }}
                    >
                      &gt;&gt;&gt;
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {/* step 3 = option form summary */}
          {currentStep === 3 ? (
            <div>
              <div className="option-form-title">Set Your Preferences</div>
              <div className="option-form-actions">
                <Button
                  sx={{
                    background: "#08CB00",
                    color: "#fff",
                    width: "400px",
                    fontSize: "14px",
                    padding: "1rem 0",
                    textTransform: "initial",
                  }}
                >
                  View Personal Information & Important Instructions
                </Button>
                <div className="action-text">
                  <Button
                    sx={{
                      background: "#DC143C",
                      color: "#fff",
                      width: "200px",
                      height: "35px",
                      fontSize: "14px",
                      padding: "1rem 0",
                      textTransform: "initial",
                    }}
                    onClick={showInsertChoice}
                  >
                    Insert Choice Code
                  </Button>
                  <Button
                    sx={{
                      background: "#DC143C",
                      color: "#fff",
                      width: "200px",
                      height: "35px",
                      marginLeft: "10px",
                      fontSize: "14px",
                      padding: "1rem 0",
                      textTransform: "initial",
                    }}
                    onClick={resetPreferenceList}
                  >
                    Insert Choice Code Directly
                  </Button>
                  <Button
                    sx={{
                      background: "#DC143C",
                      color: "#fff",
                      width: "200px",
                      height: "35px",
                      marginLeft: "10px",
                      fontSize: "14px",
                      padding: "1rem 0",
                      textTransform: "initial",
                    }}
                    onClick={moveChoice}
                  >
                    Move Choice Code
                  </Button>
                </div>
              </div>
              <div className="option-form-inputs">
                {insertChoiceData ? (
                  <div>
                    <div className="form-row">
                      Select University
                      <CustomSelect
                        name="course_name"
                        options={universities}
                        value={optionData.university_name}
                        height={35}
                        borderRadius={5}
                        width={500}
                        placeholder="---Select University---"
                        onChange={(value) =>
                          setOptionData({
                            ...optionData,
                            university_name: value,
                          })
                        }
                      ></CustomSelect>
                    </div>
                    <div className="form-row">
                      Select Institute
                      <CustomSelect
                        name="institute_name"
                        options={institute_names}
                        value={optionData.institute_name}
                        height={35}
                        borderRadius={5}
                        width={500}
                        placeholder="---Select Institute Name---"
                        onChange={(value) =>
                          setOptionData({
                            ...optionData,
                            institute_name: value,
                          })
                        }
                      ></CustomSelect>
                    </div>
                    <div className="form-row">
                      Select Choice Code
                      <CustomSelect
                        name="course_name"
                        options={choice_code}
                        value={optionData.choice_code}
                        height={35}
                        borderRadius={5}
                        width={500}
                        placeholder="---Select Choice Code---"
                        onChange={(value) =>
                          setOptionData({ ...optionData, choice_code: value })
                        }
                      ></CustomSelect>
                    </div>
                    <div className="form-row">
                      which you want to insert
                      <CustomSelect
                        name="preference_no"
                        options={preference_no}
                        value={optionData.preference_no}
                        height={35}
                        borderRadius={5}
                        width={50}
                        placeholder=""
                        onChange={(value) =>
                          setOptionData({ ...optionData, preference_no: value })
                        }
                      ></CustomSelect>
                    </div>
                    <div className="form-row">
                      <Button
                        sx={{
                          background: "#08CB00",
                          color: "#fff",
                          width: "200px",
                          height: "40px",
                          fontSize: "14px",
                          padding: "1rem 0",
                          textTransform: "initial",
                        }}
                        onClick={insertChoiceCode}
                      >
                        Insert Choice Code
                      </Button>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {moveChoiceData && (
                  <div>
                    <div className="option-form-inputs">
                      <div className="form-row">
                        Select Preference Number to which you want to move
                        <CustomSelect
                          name="course_name"
                          options={preference_no}
                          value={optionData.preference_no}
                          height={35}
                          borderRadius={5}
                          width={50}
                          placeholder=""
                          onChange={(value) =>
                            setOptionData({
                              ...optionData,
                              preference_no: value,
                            })
                          }
                        ></CustomSelect>
                      </div>
                      <div className="form-row">
                        Select Choice Code to which you want to move
                        <CustomSelect
                          name="choice_code"
                          options={choice_code}
                          value={optionData.choice_code}
                          height={35}
                          borderRadius={5}
                          width={500}
                          placeholder="---Select Choice Code---"
                          onChange={(value) =>
                            setOptionData({
                              ...optionData,
                              choice_code: value,
                            })
                          }
                        ></CustomSelect>
                      </div>
                      <div className="form-row">
                        <Button
                          sx={{
                            background: "#08CB00",
                            color: "#fff",
                            width: "200px",
                            height: "40px",
                            fontSize: "14px",
                            padding: "1rem 0",
                            textTransform: "initial",
                          }}
                          onClick={moveRow}
                        >
                          Move Choice Code
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="table-data">
                <TableContainer component={Paper}>
                  <Table
                    sx={{
                      minWidth: 700,
                      border: "1px solid #ccc",
                      fontSize: "14px",
                      "& th, & td": { border: "1px solid #ccc" }, // borders on all cells
                    }}
                    aria-label="customized table"
                  >
                    <TableHead>
                      <TableRow sx={{ border: "1px solid #ccc" }}>
                        <StyledTableCell>Preference Number</StyledTableCell>
                        <StyledTableCell align="center">
                          Institute Code
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Institute Name
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          University Name
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          SL/HU/OHU
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Course Name
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Choice Code
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {selectedColleges
                        .slice()
                        .sort((a, b) => {
                          const prefA =
                            selectedPreferences.find(
                              (item) => item.Choice_Code === a.Choice_Code
                            )?.preference_no || 0;
                          const prefB =
                            selectedPreferences.find(
                              (item) => item.Choice_Code === b.Choice_Code
                            )?.preference_no || 0;
                          return prefA - prefB;
                        })
                        .map((row, index) => (
                          <TableRow key={index}>
                            <TableCell align="center">
                              {selectedPreferences.find(
                                (item) => item.Choice_Code === row.Choice_Code
                              )?.preference_no || ""}
                            </TableCell>
                            <TableCell align="center">
                              {row.Institute_Code}
                            </TableCell>
                            <TableCell align="left">
                              {row.Institute_Name}
                            </TableCell>
                            <TableCell align="center">
                              {row.University_Name}
                            </TableCell>
                            <TableCell align="center">
                              {row.SL_HU_OHU}
                            </TableCell>
                            <TableCell align="center">
                              {row.Course_Name}
                            </TableCell>
                            <TableCell align="center">
                              {row.Choice_Code}
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <div className="preferences-btns">
                  <Button
                    sx={{
                      background: "#DC143C",
                      color: "#fff",
                      width: "200px",
                      height: "35px",
                      fontSize: "14px",
                      padding: "1rem 0",
                      textTransform: "initial",
                    }}
                    onClick={() => setCurrentStep(2)}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        color: "#fff",
                        marginRight: "10px",
                      }}
                    >
                      &lt;&lt;&lt;
                    </span>{" "}
                    Change Preferences
                  </Button>
                  <Button
                    sx={{
                      background: "#154D71",
                      color: "#fff",
                      width: "150px",
                      fontSize: "14px",
                      padding: ".5rem 0",
                      textTransform: "initial",
                    }}
                    onClick={saveOptionData}
                  >
                    Save & Proceed{" "}
                    <span
                      style={{
                        fontSize: "10px",
                        color: "#fff",
                        marginLeft: "10px",
                      }}
                    >
                      &gt;&gt;&gt;
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {currentStep === 4 && (
            <div className="submit-form-container">
              <img src={SuccessGif}></img>
              <div className="success-text">
                {" "}
                Your Application has successfully submitted!
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OptionForm;
