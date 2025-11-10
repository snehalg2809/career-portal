import { useState } from "react";
import BreadcrumbsNav from "../nav/BreadcrumbsNav";
import Nav from "../nav/Nav";
import CustomSelect from "./CustomSelect";
import CustomMultiSelect from "./CustomMultiSelect";
import Footer from "../footer/Footer";
import BackImg from "../images/school-education-and-science-doodle-background-free-vector.jpg";
function TopCollegeList() {
  const branches = ["Engineering", "Management", "Pharmacy"];
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

  const [formData, setFormData] = useState({
    branch: "",
    city: [],
  });

  const TopColleges = () =>{
    window.location.href=(`/top-colleges/${formData.branch}?city=${formData.city}`)
  }
  return (
    // <div className="top-colleges-container">
    <div className="input-container">
      <div>
        <Nav />
      </div>
      <div className="branch-data">
        {/* <img src={BackImg} alt="img"></img> */}
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
                <CustomSelect
                  height={40}
                  borderRadius={10}
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
            </div>
            <div>
              <button
                className="get-list-btn"
                onClick={TopColleges}
              >
                Find Top Colleges
              </button>
            </div>
          </div>
        </div>
      </div>
     <Footer/>
    </div>
  );
}

export default TopCollegeList;
