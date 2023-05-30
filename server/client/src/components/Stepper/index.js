import React, { useState } from "react";
import Progress from "react-progressbar";

export const StepLayout = ({ children }) => {
  return (
    <div style={{ backgroundColor: "red", color: "#fff" }}>{children}</div>
  );
};

export const StepOne = () => {
  return <h1>Step One</h1>;
};

export const StepTwo = () => {
  return <h1>Step Two</h1>;
};

const steps = [
  {
    title: "Step One",
    component: <StepOne />,
  },
  {
    title: "Step Two",
    component: <StepTwo />,
  },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const handleNext = () => {
    if (currentStep >= steps.length) return;
    setCurrentStep(currentStep + 1);
  };
  const handlePrev = () => {
    if (currentStep === 0) return;
    setCurrentStep(currentStep - 1);
  };
  return (
    <StepLayout>
      <div>
        {(currentStep / steps.length) * 100}% current step {currentStep}
        <Progress color="blue" completed={(currentStep / steps.length) * 100} />
      </div>
      {steps.map((step, index) => (
        <div key={index}>{index === currentStep ? step.component : ""}</div>
      ))}
      <div className="actions">
        {currentStep !== 0 && (
          <button onClick={() => handlePrev()}>Prev</button>
        )}
        {currentStep !== steps.length && (
          <button onClick={() => handleNext()}>Next</button>
        )}
      </div>
    </StepLayout>
  );
};

export default Stepper;
