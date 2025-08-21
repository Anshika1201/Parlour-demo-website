import React from "react";
interface StepNavigationProps {
  steps: string[];
  activeStep: number;
  completed: boolean[];
}

export default function StepNavigation({ steps, activeStep, completed }: StepNavigationProps) {
  return (
    <ul className="space-y-6 w-full">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center">
          <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${activeStep === i ? "border-pink-600 bg-pink-100" : completed[i] ? "border-green-500 bg-green-100" : "border-gray-300 bg-gray-50"}`}>
            {completed[i] ? (
              <span className="text-green-500 font-bold">&#10003;</span>
            ) : (
              <span className="text-pink-600 font-bold">{i+1}</span>
            )}
          </div>
          <span className={`ml-4 font-bold ${activeStep === i ? "text-pink-600" : "text-gray-600"}`}>{step}</span>
        </li>
      ))}
    </ul>
  );
}
