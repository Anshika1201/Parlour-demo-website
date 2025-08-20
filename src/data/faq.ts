export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We provide a full range of beauty treatments including hair styling, skincare, manicures, pedicures, and makeup services."
  },
  {
    id: 2,
    question: "Do I need to book an appointment?",
    answer:
      "While walk-ins are welcome, we recommend booking an appointment to guarantee your preferred time and service."
  },
  {
    id: 3,
    question: "What are your working hours?",
    answer:
      "Our salon is open from Monday to Saturday, 9 AM to 7 PM, and closed on Sundays and public holidays."
  },
  {
    id: 4,
    question: "Are your products cruelty-free?",
    answer:
      "Yes, we only use high-quality cruelty-free and environmentally friendly products in our treatments."
  }
];
