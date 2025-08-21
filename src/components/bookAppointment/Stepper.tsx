"use client";
import React, { useState } from "react";
import StepNavigation from "./StepNavigation";
import ServiceStep from "./ServiceStep";
import DateTimeStep from "./DateTimeStep";
import ClientInfoStep from "./ClientInfoStep";
import SummaryStep from "./SummaryStep";
// import PaymentStep from "./PaymentStep";
import BookStep from "./BookStep";

const steps = [
  "Select Service",
  "Date & Time",
  "Client Info",
  "Summary",
  // "Payment",
  "Book",
];

interface ServiceSimplified {
  id: number;
  heading: string;
  subservices: { name: string; price: string }[];
}

interface FormData {
  service: ServiceSimplified[];
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  // payment?: string;
}

export default function Stepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<boolean[]>(Array(steps.length).fill(false));
  const [formData, setFormData] = useState<FormData>({
    service: [],
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const gotoNext = () => {
    setCompleted(prev => {
      const newCompleted = [...prev];
      newCompleted[activeStep] = true;
      return newCompleted;
    });
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const gotoBack = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const stepComponents = [
    <ServiceStep formData={formData} setFormData={setFormData} gotoNext={gotoNext} />,
    <DateTimeStep formData={formData} setFormData={setFormData} gotoBack={gotoBack} gotoNext={gotoNext} />,
    <ClientInfoStep formData={formData} setFormData={setFormData} gotoBack={gotoBack} gotoNext={gotoNext} />,
    <SummaryStep formData={formData} gotoBack={gotoBack} gotoNext={gotoNext} />,
    // <PaymentStep formData={formData} setFormData={setFormData} gotoBack={gotoBack} gotoNext={gotoNext} />,
    <BookStep formData={formData} gotoBack={gotoBack} />,
  ];

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <aside className="md:w-1/4 bg-white min-h-full px-2 py-12 flex flex-col items-center">
        <StepNavigation steps={steps} activeStep={activeStep} completed={completed} />
      </aside>
      <main className="md:w-3/4 p-8 flex shadow-lg rounded-lg bg-pink-200 items-center justify-center">
        <div className="w-full max-w-xl">{stepComponents[activeStep]}</div>
      </main>
    </div>
  );
}
