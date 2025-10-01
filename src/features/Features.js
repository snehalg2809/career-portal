import { useState } from "react";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import "./Features.css";
import BasicDetails from "./BasicDetails";
import Summary from "./Summary";
import "./Summary.css";

function Features() {
  const steps = ["Basic Details", "Summary"];
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
    <div className="details-container">
      <div>
        <Nav />
      </div>
      <div className="stepper-details">
        <div className="details">
          <div className="details-card">
            <div className="heading-1">Get Your Ready-Made</div>
            <div className="heading-2">
              MHT CET Engineering College Preference List
            </div>
            <small className="small">
              Enter your details and select your category and percentile to
              instantly get a college list tailored for you
            </small>

            {/* Stepper */}
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

            <div className="steps-data">
              {currentStep === 0 && (
                <BasicDetails
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
                disabled={currentStep === steps.length - 1}
                className="step-btn primary"
              >
                {currentStep === steps.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default Features;
