import { useEffect, useState } from "react";
import "./BasicDetails.css";
import CustomSelect from "./CustomSelect";
import CustomMultiSelect from "./CustomMultiSelect";
function BasicDetails({ setBtnDisable }) {
  const branches = ["Engineering", "Management", "Pharmacy"];
  const categories = ["Open", "SC/ST", "OBC", "NT"];
  const genders = ["Male", "Female", "Other"];
  const universities = ["SPPU", "Shivaji University", "Ambedkar University"];
  const TFWS = ["Yes", "No"];
  const instituteTypes = ["Autonomous", "University"];
  const ranks=['MHT-CET Rank', 'JEE Rank']
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

  // ✅ State for form fields
  const [formData, setFormData] = useState({
    branch: [],
    city: [],
    university: [],
    category: "",
    gender: "",
    tfws: "",
    instituteType: "",
  });

  useEffect(() => {
    const allFilled = Object.values(formData).every((val) => val !== "");
    setBtnDisable(!allFilled);
  }, [formData]);

  return (
    <div className="fields-container">
      <div className="basicdetails-header">
        Fill the details to generate Preference List of Colleges.
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
              placeholder="Choose branch name"
              onChange={(value) => setFormData({ ...formData, branch: value })}
              
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
              onChange={(value) => setFormData({ ...formData, city: value })}
              
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
              multiple={true}
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
              onChange={(value) => setFormData({ ...formData, gender: value })}
            />
          </div>

          <div>
            <label>TFWS</label>
            <CustomSelect
              options={TFWS}
              height={40}
              borderRadius={10}
              width={250}
              value={formData.tfws}
              placeholder="Choose TFWS"
              onChange={(value) => setFormData({ ...formData, tfws: value })}
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
          <div>
            <label>Rank</label>
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
        <div
          className="inputs-row animate "
        >
          <div>
            <label>Percentile</label>
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
    </div>
  );
}

export default BasicDetails;
