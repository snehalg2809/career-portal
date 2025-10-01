import "./Colleges.css";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import CollegeImg from "../images/college-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faFlag,
  faArrowRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import BreadcrumbsNav from "../nav/BreadcrumbsNav";
import _ from "lodash";

const collegeList = [
  {
    college_name:
      "Veermata Jijabai Technological Institute(VJTI), Matunga, Mumbai",
    university_name: "University of Mumbai",
    location: "Mumbai",
    fees: "10k-160k",
    exams: "JEE Main/ MHT-CET",
    institute_type: "Government-Aided Autonomous Home University",
    category: "Management",
  },
  {
    college_name:
      "Sipna Shikshan Prasarak Mandal College of Engineering & Technology, Amravati",
    university_name: "University of Amravati",
    location: "Amravati",
    fees: "10k-160k",
    exams: "JEE Main/ MHT-CET",
    institute_type: "Government-Aided Autonomous Home University",
    category: "Engineering",
  },
  {
    college_name: "ANURADHA COLLEGE OF ENGINEERING & TECHNOLOGY ",
    university_name: "University of Amravati",
    location: "Amravati",
    fees: "10k-160k",
    exams: "JEE Main/ MHT-CET",
    institute_type: "Government-Aided Autonomous Home University",
    category: "Engineering",
  },
  {
    college_name:
      "Veermata Jijabai Technological Institute(VJTI), Matunga, Mumbai",
    university_name: "University of Mumbai",
    location: "Mumbai",
    fees: "10k-160k",
    exams: "JEE Main/ MHT-CET",
    institute_type: "Government-Aided Autonomous Home University",
    category: "Medical",
  },
  {
    college_name:
      "Veermata Jijabai Technological Institute(VJTI), Matunga, Mumbai",
    university_name: "University of Mumbai",
    location: "Mumbai",
    fees: "10k-160k",
    exams: "JEE Main/ MHT-CET",
    institute_type: "Government-Aided Autonomous Home University",
    category: "Medical",
  },
  {
    college_name:
      "Veermata Jijabai Technological Institute(VJTI), Matunga, Mumbai",
    university_name: "University of Mumbai",
    location: "Mumbai",
    fees: "10k-160k",
    exams: "JEE Main/ MHT-CET",
    institute_type: "Government-Aided Autonomous Home University",
    category: "Medical",
  },
  {
    college_name:
      "Veermata Jijabai Technological Institute(VJTI), Matunga, Mumbai",
    university_name: "University of Mumbai",
    location: "Mumbai",
    fees: "10k-160k",
    exams: "JEE Main/ MHT-CET",
    institute_type: "Government-Aided Autonomous Home University",
    category: "Management",
  },
  {
    college_name:
      "Veermata Jijabai Technological Institute(VJTI), Matunga, Mumbai",
    university_name: "University of Mumbai",
    location: "Mumbai",
    fees: "10k-160k",
    exams: "JEE Main/ MHT-CET",
    institute_type: "Government-Aided Autonomous Home University",
    category: "Medical",
  },
  {
    college_name:
      "Veermata Jijabai Technological Institute(VJTI), Matunga, Mumbai",
    university_name: "University of Mumbai",
    location: "Mumbai",
    fees: "10k-160k",
    exams: "JEE Main/ MHT-CET",
    institute_type: "Government-Aided Autonomous Home University",
    category: "Medical",
  },
  {
    college_name:
      "Veermata Jijabai Technological Institute(VJTI), Matunga, Mumbai",
    university_name: "University of Mumbai",
    location: "Mumbai",
    fees: "10k-160k",
    exams: "JEE Main/ MHT-CET",
    institute_type: "Government-Aided Autonomous Home University",
    category: "Engineering",
  },
  {
    college_name:
      "Veermata Jijabai Technological Institute(VJTI), Matunga, Mumbai",
    university_name: "University of Mumbai",
    location: "Mumbai",
    fees: "10k-160k",
    exams: "JEE Main/ MHT-CET",
    institute_type: "Government-Aided Autonomous Home University",
    category: "Medical",
  },
  {
    college_name:
      "Veermata Jijabai Technological Institute(VJTI), Matunga, Mumbai",
    university_name: "University of Mumbai",
    location: "Nashik",
    fees: "10k-160k",
    exams: "JEE Main/ MHT-CET",
    institute_type: "Government-Aided Autonomous Home University",
    category: "Management",
  },
  {
    college_name:
      "Veermata Jijabai Technological Institute(VJTI), Matunga, Mumbai",
    university_name: "University of Mumbai",
    location: "Mumbai",
    fees: "10k-160k",
    exams: "JEE Main/ MHT-CET",
    institute_type: "Government-Aided Autonomous Home University",
    category: "Medical",
  },
  {
    college_name:
      "Veermata Jijabai Technological Institute(VJTI), Matunga, Mumbai",
    university_name: "University of Mumbai",
    location: "Mumbai",
    fees: "10k-160k",
    exams: "JEE Main/ MHT-CET",
    institute_type: "Government-Aided Autonomous Home University",
    category: "Engineering",
  },
  {
    college_name:
      "Veermata Jijabai Technological Institute(VJTI), Matunga, Mumbai",
    university_name: "University of Mumbai",
    location: "Mumbai",
    fees: "10k-160k",
    exams: "JEE Main/ MHT-CET",
    institute_type: "Government-Aided Autonomous Home University",
    category: "Engineering",
  },
  {
    college_name:
      "Veermata Jijabai Technological Institute(VJTI), Matunga, Mumbai",
    university_name: "University of Mumbai",
    location: "Nashik",
    fees: "10k-160k",
    exams: "JEE Main/ MHT-CET",
    institute_type: "Government-Aided Autonomous Home University",
    category: "Engineering",
  },
  {
    college_name:
      "Veermata Jijabai Technological Institute(VJTI), Matunga, Mumbai",
    university_name: "University of Mumbai",
    location: "Nashik",
    fees: "10k-160k",
    exams: "JEE Main/ MHT-CET",
    institute_type: "Government-Aided Autonomous Home University",
    category: "Engineering",
  },
];

const cityName = [
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

function Colleges() {
  const { name } = useParams();
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [checkedCities, setCheckedCities] = useState([]);

  const applyFilters = useMemo(
    () =>
      _.debounce(() => {
        let filtered = collegeList.filter(
          (college) => college.category === name
        );

        if (searchValue) {
          filtered = filtered.filter((college) =>
            college.location.toLowerCase().includes(searchValue.toLowerCase())
          );
        }

        if (checkedCities.length > 0) {
          filtered = filtered.filter((college) =>
            checkedCities.includes(college.location)
          );
        }

        setFilteredColleges(filtered);
      }, 300),
    [searchValue, checkedCities, name]
  );

  useEffect(() => {
    applyFilters();
  }, [searchValue, checkedCities, name, applyFilters]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    setCheckedCities(cityName.filter((c) => c === e.target.value));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedCities([...checkedCities, value]); // add city
    } else {
      setCheckedCities(checkedCities.filter((c) => c !== value)); // remove city
    }
  };

  return (
    <div className="college-container">
      <Nav />
      <div className="college-details">
        <div className="title-content" style={{ marginTop: "5rem" }}>
          <div className="breadcrumbs-div">
            <BreadcrumbsNav />
          </div>
        </div>
        <div className="top-colleges">
          <div className="filter-section">
            <h1>Search & Filter</h1>
            <div className="filter-card">
              <div className="search-input">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="search-icon"
                />
                <input
                  placeholder="Search by city"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="filter-content">
                {cityName.map((city, index) => (
                  <label key={index} className="checkbox-item">
                    <input
                      type="checkbox"
                      value={city}
                      checked={checkedCities.includes(city)}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-4">{city}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="college-section">
            <div className="tag">{name}</div>
            <div className="card-section">
              {filteredColleges.map((college, index) => (
                <div className="college-card" key={index}>
                  <img src={CollegeImg} alt="college" />
                  <div className="card-details">
                    <div className="basic-details">
                      <span className="college-title">
                        <FontAwesomeIcon icon={faLocationDot} />{" "}
                        {college.location}
                      </span>
                      <span className="college-title ml-4">
                        <FontAwesomeIcon icon={faFlag} />{" "}
                        {college.institute_type}
                      </span>
                    </div>
                    <div className="college-name">{college.college_name}</div>
                    <div className="university-name">
                      {college.university_name}
                    </div>
                    <div className="fee-and-exam">
                      <div className="fee-details">
                        <span className="text-green f-14">Fees</span>{" "}
                        <span className="f-12">{college.fees}</span>
                      </div>
                      <div className="exam-details">
                        <span className="text-green f-14">Exam</span>{" "}
                        <span className="f-12">{college.exams}</span>
                      </div>
                    </div>
                    <div className="view-btn-div">
                      <button className="college-info-btn">
                        View More <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {filteredColleges.length === 0 && <p>No colleges found.</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Colleges;
