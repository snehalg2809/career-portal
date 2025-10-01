import { useState } from "react";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import BasicDetails from "./BasicDetails";
import Summary from "./Summary";
import "./PreferenceList.css";
import FeaturesBackImg from "../images/back_img7.jpg";
import BreadcrumbsNav from "../nav/BreadcrumbsNav";

function Features() {
  const steps = ["Basic Details", "Summary"];
  const [isBtnDisable, setBtnDisable] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="input-container">
      <div>
        <Nav />
      </div>

      <div className="preference-data">
        <img
          src={FeaturesBackImg}
          className="features-back-img"
          alt="back-img"
        ></img>
        <div
          className="breadcrumbs-div"
          style={{ zIndex: 2, position: "relative", padding: "1rem 1rem 0" }}
        >
          <BreadcrumbsNav style={{ fontWeight: "700" }} />
        </div>
        <div className="preference-data-card">
          <div className="heading-1">Get Your Ready-Made</div>
          <div className="heading-2">
            MHT CET Engineering College Preference List
          </div>
          <small className="small">
            Enter your details and select your category and percentile to
            instantly get a college list tailored for you
          </small>

          <div className="steps-main">
            <div className="steps-wrapper">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`step-item ${
                    index <= currentStep ? "active" : ""
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <div className="circle">{index + 1}</div>
                  <div className="label">{step}</div>

                  {/* Show connecting line except after last step */}
                  {index < steps.length - 1 && (
                    <div className="line">
                      <div
                        className="line-fill"
                        style={{ width: index < currentStep ? "100%" : "0%" }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="steps-data">
            {currentStep === 0 && (
              <BasicDetails
                setBtnDisable={setBtnDisable}
                currentStep={currentStep}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {currentStep === 1 && <Summary />}
          </div>

          {/* Navigation Buttons */}
          <div className="steps-buttons">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="step-btn"
            >
              Back
            </button>
            <button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1 || isBtnDisable}
              className="step-btn primary"
            >
              {currentStep === steps.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Features;
