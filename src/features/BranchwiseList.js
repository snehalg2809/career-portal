import { useState, useMemo, useEffect } from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import "./BranchwiseList.css";
import BackImg from "../images/school-education-and-science-doodle-background-free-vector.jpg";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CustomSelect from "./CustomSelect";
import CustomMultiSelect from "./CustomMultiSelect";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import BreadcrumbsNav from "../nav/BreadcrumbsNav";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

function BranchwiseList() {
  const branches = ["Engineering", "Management", "Pharmacy"];
  const categories = ["Open", "SC/ST", "OBC", "NT"];
  const genders = ["Male", "Female", "Other"];
  const cities = [
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
  const universities = ["SPPU", "Shivaji University", "Ambedkar University"];
  const TFWS = ["Yes", "No"];
  const instituteTypes = ["Autonomous", "University"];
  const [showTable, setShowTable] = useState(false);
  const [disabledBtn, setDisableBtn] = useState(true);

  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const [formData, setFormData] = useState({
    branch: [],
    city: [],
    university: [],
    category: "",
    gender: "",
    tfws: "",
    instituteType: "",
  });

  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedColleges = useMemo(() => {
    let sortable = [
      {
        SrNo: "1051",
        Merit: "25732 (78.02)",
        ChoiceCode: "0517224510",
        InstituteName: "R. C. Patel Institute of Technology, Shirpur",
        CourseName: "Computer Engineering",
        MeritExam: "JEE",
      },
      {
        SrNo: "1052",
        Merit: "33859 (71.57)",
        ChoiceCode: "0517399510",
        InstituteName:
          "SNJB's Late Sau. Kantabai Bhavarlalji Jain College of Engineering, Nashik",
        CourseName: "Artificial Intelligence and Data Science",
        MeritExam: "JEE",
      },
      {
        SrNo: "1053",
        Merit: "32565 (72.64)",
        ChoiceCode: "0517324510",
        InstituteName:
          "SNJB's Late Sau. Kantabai Bhavarlalji Jain College of Engineering, Nashik",
        CourseName: "Computer Engineering",
        MeritExam: "JEE",
      },
      {
        SrNo: "1054",
        Merit: "46124 (62.39)",
        ChoiceCode: "0517361210",
        InstituteName:
          "SNJB's Late Sau. Kantabai Bhavarlalji Jain College of Engineering, Nashik",
        CourseName: "Mechanical Engineering",
        MeritExam: "JEE",
      },
      {
        SrNo: "1055",
        Merit: "37607 (68.84)",
        ChoiceCode: "0517337210",
        InstituteName:
          "SNJB's Late Sau. Kantabai Bhavarlalji Jain College of Engineering, Nashik",
        CourseName: "Electronics and Telecommunication Engg",
        MeritExam: "JEE",
      },
      {
        SrNo: "1056",
        Merit: "49304 (59.86)",
        ChoiceCode: "0517319110",
        InstituteName:
          "SNJB's Late Sau. Kantabai Bhavarlalji Jain College of Engineering, Chandwad, Nashik",
        CourseName: "Civil Engineering",
        MeritExam: "JEE",
      },
      {
        SrNo: "1057",
        Merit: "50521 (59.06)",
        ChoiceCode: "0517724610",
        InstituteName:
          "Matoshri College of Engineering and Research Centre, Nashik",
        CourseName: "Information Technology",
        MeritExam: "JEE",
      },
      {
        SrNo: "1058",
        Merit: "51853 (58.04)",
        ChoiceCode: "0517799510",
        InstituteName:
          "Matoshri College of Engineering and Research Centre, Nashik",
        CourseName: "Artificial Intelligence and Data Science",
        MeritExam: "JEE",
      },
      {
        SrNo: "1059",
        Merit: "56061 (54.81)",
        ChoiceCode: "0517737210",
        InstituteName:
          "Matoshri College of Engineering and Research Centre, Nashik",
        CourseName: "Electronics and Telecommunication Engg",
        MeritExam: "JEE",
      },
      {
        SrNo: "1060",
        Merit: "47747 (61.06)",
        ChoiceCode: "0517724510",
        InstituteName:
          "Matoshri College of Engineering and Research Centre, Nashik",
        CourseName: "Computer Engineering",
        MeritExam: "JEE",
      },
      {
        SrNo: "1061",
        Merit: "47747 (61.06)",
        ChoiceCode: "0517724510",
        InstituteName:
          "Matoshri College of Engineering and Research Centre, Nashik",
        CourseName: "Computer Engineering",
        MeritExam: "JEE",
      },
      {
        SrNo: "1062",
        Merit: "47747 (61.06)",
        ChoiceCode: "0517724510",
        InstituteName:
          "Matoshri College of Engineering and Research Centre, Nashik",
        CourseName: "Computer Engineering",
        MeritExam: "JEE",
      },
      {
        SrNo: "1063",
        Merit: "47747 (61.06)",
        ChoiceCode: "0517724510",
        InstituteName:
          "Matoshri College of Engineering and Research Centre, Nashik",
        CourseName: "Computer Engineering",
        MeritExam: "JEE",
      },
      {
        SrNo: "1064",
        Merit: "47747 (61.06)",
        ChoiceCode: "0517724510",
        InstituteName:
          "Matoshri College of Engineering and Research Centre, Nashik",
        CourseName: "Computer Engineering",
        MeritExam: "JEE",
      },
      {
        SrNo: "1065",
        Merit: "47747 (61.06)",
        ChoiceCode: "0517724510",
        InstituteName:
          "Matoshri College of Engineering and Research Centre, Nashik",
        CourseName: "Computer Engineering",
        MeritExam: "JEE",
      },
    ];

    if (sortConfig.key) {
      sortable.sort((a, b) => {
        const valA = a[sortConfig.key];
        const valB = b[sortConfig.key];

        if (typeof valA === "number" && typeof valB === "number") {
          return sortConfig.direction === "asc" ? valA - valB : valB - valA;
        }

        return sortConfig.direction === "asc"
          ? String(valA).localeCompare(String(valB))
          : String(valB).localeCompare(String(valA));
      });
    }

    return sortable.filter(
      (college) =>
        college.InstituteName.toLowerCase().includes(search.toLowerCase()) ||
        college.CourseName.toLowerCase().includes(search.toLowerCase()) ||
        college.ChoiceCode.toLowerCase().includes(search.toLowerCase()) ||
        college.MeritExam.toLowerCase().includes(search.toLowerCase()) ||
        college.SrNo.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, sortConfig]);

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const startIndex = (page - 1) * rowsPerPage;
  const paginatedColleges = sortedColleges.slice(
    startIndex,
    startIndex + rowsPerPage
  );
  useEffect(() => {
    const emptyFields = Object.keys(formData).filter((key) => !formData[key]);

    setDisableBtn(emptyFields.length > 0);
  }, [formData]);

  const ListBtn = () => {
    setShowTable(true);
  };

  return (
    <div className="input-container">
      <div>
        <Nav />
      </div>
      <div className="branch-data">
        {/* <img src={BackImg} alt="img" className="branch-img"></img> */}
        <div
          className="breadcrumbs-div"
          style={{ zIndex: 2, position: "relative", padding: "1rem 1rem 0" }}
        >
          <BreadcrumbsNav />
        </div>
        <div className="branch-data-card">
          <div className="branchwiselist-heading">
            Choose data to generate branch-wise cutoff list.
          </div>

          <div>
            <div
              className="inputs-row mt-2  animate "
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <div>
                <label>Branch Name</label>
                <CustomMultiSelect
                  height={40}
                  borderRadius={5}
                  width={250}
                  options={branches}
                  value={formData.branch}
                  placeholder="Choose Branch name"
                  onChange={(value) =>
                    setFormData({ ...formData, branch: value })
                  }
                />
              </div>

              <div>
                <label>City</label>
                <CustomMultiSelect
                  height={40}
                  borderRadius={5}
                  width={250}
                  options={cities}
                  value={formData.city}
                  placeholder="Choose city"
                  onChange={(value) =>
                    setFormData({ ...formData, city: value })
                  }
                />
              </div>
              <div>
                <label>University</label>
                <CustomMultiSelect
                  height={40}
                  borderRadius={5}
                  width={250}
                  options={universities}
                  value={formData.university}
                  placeholder="Choose university"
                  onChange={(value) =>
                    setFormData({ ...formData, university: value })
                  }
                />
              </div>
              <div>
                <label>Category</label>
                <CustomSelect
                  height={40}
                  borderRadius={10}
                  width={250}
                  options={categories}
                  value={formData.category}
                  placeholder="Choose category"
                  onChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                />
              </div>
            </div>
            <div className="inputs-row animate">
              <div>
                <label>Gender</label>
                <CustomSelect
                  height={40}
                  borderRadius={10}
                  width={250}
                  options={genders}
                  value={formData.gender}
                  placeholder="Choose gender"
                  onChange={(value) =>
                    setFormData({ ...formData, gender: value })
                  }
                />
              </div>

              <div>
                <label>TFWS</label>

                <CustomSelect
                  options={TFWS}
                  height={40}
                  borderRadius={10}
                  width={250}
                  placeholder="Choose TFWS"
                  value={formData.tfws}
                  onChange={(value) =>
                    setFormData({ ...formData, tfws: value })
                  }
                />
              </div>
              <div>
                <label>Institute Types</label>
                <CustomSelect
                  height={40}
                  borderRadius={10}
                  width={250}
                  options={instituteTypes}
                  value={formData.instituteType}
                  placeholder="Choose Institue type"
                  onChange={(value) =>
                    setFormData({ ...formData, instituteType: value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="get-list">
            <BootstrapTooltip
              title={disabledBtn ? `Please fill all fields` : ""}
            >
              <button
                className="get-list-btn"
                onClick={ListBtn}
                disabled={disabledBtn}
              >
                Get List
              </button>
            </BootstrapTooltip>
          </div>
          {showTable && <h2 className="title">🏫Branch-wise Cut-Off List</h2>}

          {showTable && (
            <div className="controls">
              <input
                type="text"
                placeholder="🔍 Search by college or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          )}

          {showTable && (
            <div>
              <div className="table-container">
                <table className="college-table">
                  <thead>
                    <tr>
                      <th onClick={() => requestSort("SrNo")}>Sr No ⬍</th>
                      <th onClick={() => requestSort("Merit")}>Merit ⬍</th>
                      <th onClick={() => requestSort("ChoiceCode")}>
                        Choice Code ⬍
                      </th>
                      <th onClick={() => requestSort("InstituteName")}>
                        Institute Name ⬍
                      </th>
                      <th onClick={() => requestSort("CourseName")}>
                        Course Name ⬍
                      </th>
                      <th onClick={() => requestSort("MeritExam")}>
                        Merit Exam ⬍
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedColleges.map((college, index) => (
                      <tr
                        key={index}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <td>{college.SrNo}</td>
                        <td>{college.Merit}</td>
                        <td>{college.ChoiceCode}</td>
                        <td>{college.InstituteName}</td>
                        <td>{college.CourseName}</td>
                        <td>{college.MeritExam}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Stack
                spacing={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pagination
                  count={Math.ceil(sortedColleges.length / rowsPerPage)}
                  page={page}
                  onChange={handlePageChange}
                  shape="rounded"
                />
              </Stack>
            </div>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default BranchwiseList;
