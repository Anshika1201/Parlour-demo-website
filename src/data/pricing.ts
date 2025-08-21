export interface PricingItem {
  id: number;
  category: string;
  services: {
    id: number;
    name: string;
    price: string;
    duration?: string;
  }[];
}

export const pricingData: PricingItem[] = [
  {
    id: 1,
    category: "Basic Package",
    services: [
      { id: 13, name: "Basic Haircut & Shampoo", price: "₹450", duration: "45 mins" },
      { id: 14, name: "Simple Manicure", price: "₹300", duration: "30 mins" },
      { id: 15, name: "Quick Facial Cleanse", price: "₹350", duration: "30 mins" },
      { id: 16, name: "Eyebrow & Upper Lip Threading", price: "₹150", duration: "20 mins" },
    ]
  },
  {
    id: 2,
    category: "Regular Package",
    services: [
      { id: 17, name: "Haircut, Blow Dry & Hair Spa", price: "₹1,200", duration: "2.5 hrs" },
      { id: 18, name: "Manicure & Pedicure", price: "₹600", duration: "1 hr" },
      { id: 19, name: "Hydrating Facial", price: "₹750", duration: "1 hr" },
      { id: 20, name: "Full Hand & Half Leg Waxing", price: "₹850", duration: "1 hr" },
    ]
  },
  {
    id: 3,
    category: "Deluxe Package",
    services: [
      { id: 21, name: "Full Hair Transformation", price: "₹2,500", duration: "3.5 hrs" },
      { id: 22, name: "Deluxe Mani-Pedi & Paraffin", price: "₹950", duration: "1.5 hrs" },
      { id: 24, name: "Full Body Massage", price: "₹1,800", duration: "1.5 hrs" },
      { id: 25, name: "Full Body Waxing & Body Polish", price: "₹3,000", duration: "2.5 hrs" },
    ]
  },
];