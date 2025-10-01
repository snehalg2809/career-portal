import "./CollegePredictor.css";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import { useState, useMemo, useEffect } from "react";
import CustomSelect from "./CustomSelect";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import BreadcrumbsNav from "../nav/BreadcrumbsNav";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
function CollegePredictor() {
  const [formData, setFormData] = useState({
    round: "",
    exam_name: "",
    branch_name: "",
    percentile: "",
    category: "",
    gender: "",
  });
  const [showCollegeTable, setShowCollegeTable] = useState(false);

  const rounds = ["Round 1", "Round 2", "Round 3"];
  const exams = ["JEE", "NEET", "MHT-CET"];
  const branches = ["Engineering", "Management", "Pharmacy"];
  const categories = ["Open", "SC/ST", "OBC", "NT"];
  const genders = ["Male", "Female", "Other"];
  const percentage_range = [
    "100-90",
    "90-80",
    "80-70",
    "70-60",
    "60-50",
    "< 50",
  ];
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [page, setPage] = useState(1); // current page
  const rowsPerPage = 5;
  const startIndex = (page - 1) * rowsPerPage;

  useEffect(() => {
    const emptyFields = Object.keys(formData).filter((key) => !formData[key]);
  }, [formData]);

  const sortedColleges = useMemo(() => {
    let sortable = [
      {
        Sr_No: 1,
        College_ID: 6632,
        College_Name: "Navsahyadri Education Society's Group of Institutions",
        Branch_Name: "Computer Engineering",
        Category: "LOPENO",
        Percentile: 79.081214,
        Closing_Rank: 47330,
      },
      {
        Sr_No: 2,
        College_ID: 6759,
        College_Name: "Shree Ramchandra College of Engineering, Lonikand,Pune",
        Branch_Name: "Computer Engineering",
        Category: "LOPENO",
        Percentile: 79.081214,
        Closing_Rank: 47290,
      },
      {
        Sr_No: 3,
        College_ID: 3221,
        College_Name:
          "Late Shri. Vishnu Warnan Thakur Charitable Trust, Viva Institute of Technology, Shirgaon",
        Branch_Name: "Computer Engineering",
        Category: "LOPENH",
        Percentile: 79.7413145,
        Closing_Rank: 47918,
      },
      {
        Sr_No: 4,
        College_ID: 5125,
        College_Name:
          "Pravara Rural Education Society's Sir Visvesvaraya Institute of Technology, Chincholi Dist. Nashik",
        Branch_Name: "Computer Engineering",
        Category: "LOPENO",
        Percentile: 79.7413145,
        Closing_Rank: 47935,
      },
      {
        Sr_No: 5,
        College_ID: 6759,
        College_Name: "Shree Ramchandra College of Engineering, Lonikand,Pune",
        Branch_Name: "Computer Engineering",
        Category: "LOPENO",
        Percentile: 79.4628516,
        Closing_Rank: 48684,
      },
      {
        Sr_No: 6,
        College_ID: 6609,
        College_Name: "Jainhind College Of Engineering,Kuran",
        Branch_Name: "Computer Engineering",
        Category: "LOPENH",
        Percentile: 79.939394,
        Closing_Rank: 48939,
      },
      {
        Sr_No: 7,
        College_ID: 5104,
        College_Name:
          "Shramsadhana Bombay Trust, College of Engineering & Technology, Jalgaon",
        Branch_Name: "Computer Engineering",
        Category: "LOPENH",
        Percentile: 79.2648182,
        Closing_Rank: 49263,
      },
      {
        Sr_No: 8,
        College_ID: 3477,
        College_Name:
          "Chhatrapati Shivaji Maharaj Institute of Technology, Shedung, Panvel",
        Branch_Name: "Computer Engineering",
        Category: "LOPENO",
        Percentile: 79.2648182,
        Closing_Rank: 49175,
      },
      {
        Sr_No: 9,
        College_ID: 3477,
        College_Name:
          "Chhatrapati Shivaji Maharaj Institute of Technology, Shedung, Panvel",
        Branch_Name: "Computer Engineering",
        Category: "LOPENO",
        Percentile: 79.2648182,
        Closing_Rank: 49175,
      },
      {
        Sr_No: 10,
        College_ID: 3477,
        College_Name:
          "Chhatrapati Shivaji Maharaj Institute of Technology, Shedung, Panvel",
        Branch_Name: "Computer Engineering",
        Category: "LOPENO",
        Percentile: 79.2648182,
        Closing_Rank: 49175,
      },
      {
        Sr_No: 11,
        College_ID: 3477,
        College_Name:
          "Chhatrapati Shivaji Maharaj Institute of Technology, Shedung, Panvel",
        Branch_Name: "Computer Engineering",
        Category: "LOPENO",
        Percentile: 79.2648182,
        Closing_Rank: 49175,
      },
      {
        Sr_No: 12,
        College_ID: 3477,
        College_Name:
          "Chhatrapati Shivaji Maharaj Institute of Technology, Shedung, Panvel",
        Branch_Name: "Computer Engineering",
        Category: "LOPENO",
        Percentile: 79.2648182,
        Closing_Rank: 49175,
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
        college.Category.toLowerCase().includes(search.toLowerCase()) ||
        college.Branch_Name.toLowerCase().includes(search.toLowerCase()) ||
        college.Closing_Rank.toLowerCase().includes(search.toLowerCase()) ||
        college.College_ID.toLowerCase().includes(search.toLowerCase()) ||
        college.Percentile.toLowerCase().includes(search.toLowerCase()) ||
        college.College_ID.toLowerCase().includes(search.toLowerCase()) ||
        college.Sr_No.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, sortConfig]);
  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };
  const paginatedColleges = sortedColleges.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  const handlePageChange = (value) => {
    setPage(value);
  };

  const downloadPDF = () => {
    const doc = new jsPDF("l", "pt", "a4");
    doc.setFontSize(15);
    doc.text("College Preference List", 40, 30);

    const headers = [
      "Sr No",
      "College ID",
      "College Name",
      "Branch Name",
      "Category",
      "Percentile",
      "Closing Rank",
    ];

    const data = sortedColleges.map((r) => [
      r.Sr_No,
      r.College_ID,
      r.College_Name,
      r.Branch_Name,
      r.Category,
      r.Percentile,
      r.Closing_Rank,
    ]);

    autoTable(doc, {
      head: [headers],
      body: data,
      startY: 50,
      theme: "grid",
      styles: { fontSize: 9, cellPadding: 6 },
      headStyles: {
        fillColor: [44, 62, 80],
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      alternateRowStyles: { fillColor: [245, 245, 245] },
    });

    doc.save("Predicted-CollegeList.pdf");
  };
  return (
    <div className="predictor-container">
      <div>
        <Nav />
      </div>
      <div className="predictor-data">
        <div className="breadcrumbs-div">
          <BreadcrumbsNav />
        </div>
        <div className="predictor-data-card">
          <div className="predictor-heading">College Predictor.</div>
          {showCollegeTable ? (
            <div>
              <div style={{ textAlign: "center" }}>
                Based on your preferences, below list is generated. You can
                download the list for your reference.
              </div>

              <div className="download-pdf">
                Download Pdf{" "}
                <DownloadForOfflineIcon
                  onClick={downloadPDF}
                  className="download-icon"
                  title="Download Pdf"
                />
              </div>
              <div className="predictor-table-container">
                <table className="college-table">
                  <thead>
                    <tr>
                      <th onClick={() => requestSort("Sr_No")}>Sr No ⬍</th>
                      <th onClick={() => requestSort("College_ID")}>
                        College ID ⬍
                      </th>
                      <th onClick={() => requestSort("College_Name")}>
                        College Name ⬍
                      </th>
                      <th onClick={() => requestSort("Branch_Name")}>
                        Branch Name ⬍
                      </th>
                      <th onClick={() => requestSort("Category")}>
                        Category ⬍
                      </th>
                      <th onClick={() => requestSort("Percentile")}>
                        Percentile ⬍
                      </th>
                      <th onClick={() => requestSort("Closing_Rank")}>
                        Closing Rank ⬍
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedColleges.map((college, index) => (
                      <tr
                        key={index}
                        style={{
                          animationDelay: `${index * 0.1}s`,
                          background: "#efefef",
                        }}
                      >
                        <td>{college.Sr_No}</td>
                        <td>{college.College_ID}</td>
                        <td>{college.College_Name}</td>
                        <td>{college.Branch_Name}</td>
                        <td>{college.Category}</td>
                        <td>{college.Percentile}</td>
                        <td>{college.Closing_Rank}</td>
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
          ) : (
            <div>
              <div
                className="inputs-row mt-2  animate "
                style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
              >
                <div>
                  <label>Round </label>
                  <CustomSelect
                    height={40}
                    borderRadius={10}
                    width={250}
                    options={rounds}
                    value={formData.round}
                    placeholder="Choose round"
                    onChange={(value) =>
                      setFormData({ ...formData, round: value })
                    }
                  />
                </div>
                <div>
                  <label>Exam</label>
                  <CustomSelect
                    height={40}
                    borderRadius={10}
                    width={250}
                    options={exams}
                    value={formData.exam_name}
                    placeholder="Choose exam"
                    onChange={(value) =>
                      setFormData({ ...formData, exam_name: value })
                    }
                  />
                </div>
                <div>
                  <label>Branch</label>
                  <CustomSelect
                    height={40}
                    borderRadius={10}
                    width={250}
                    options={branches}
                    value={formData.branch_name}
                    placeholder="Choose branch"
                    onChange={(value) =>
                      setFormData({ ...formData, branch_name: value })
                    }
                  />
                </div>
                <div>
                  <label>Percentile</label>
                  <CustomSelect
                    height={40}
                    borderRadius={10}
                    width={250}
                    options={percentage_range}
                    value={formData.percentile}
                    placeholder="Choose percentile"
                    onChange={(value) =>
                      setFormData({ ...formData, percentile: value })
                    }
                  />
                </div>
              </div>
              <div className="inputs-row animate">
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

                <div>
                  <label>Gender</label>

                  <CustomSelect
                    options={genders}
                    height={40}
                    borderRadius={10}
                    width={250}
                    placeholder="Choose gender"
                    value={formData.gender}
                    onChange={(value) =>
                      setFormData({ ...formData, gender: value })
                    }
                  />
                </div>
              </div>
              <div className="college-list-btns">
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
                  Cancel
                </Button>

                <Button
                  sx={{
                    background: "#4FB7B3",
                    color: "#fff",
                    width: "300px",
                    fontSize: "14px",
                    padding: ".5rem 0",
                    textTransform: "initial",
                  }}
                  onClick={() => setShowCollegeTable(true)}
                >
                  Continue to College Predictor
                </Button>
              </div>
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

export default CollegePredictor;
