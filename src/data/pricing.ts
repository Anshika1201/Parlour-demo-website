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
    category: "Hair Services",
    services: [
      { id: 1, name: "Hair Cut & Blow Dry", price: "$45", duration: "1 hr" },
      { id: 2, name: "Hair Color", price: "$80", duration: "2 hrs" },
      { id: 3, name: "Hair Highlights", price: "$120", duration: "3 hrs" },
      { id: 4, name: "Hair Treatment", price: "$60", duration: "1.5 hrs" },
    ]
  },
  {
    id: 2,
    category: "Facial Services",
    services: [
      { id: 5, name: "Classic Facial", price: "$55", duration: "1 hr" },
      { id: 6, name: "Anti-Aging Facial", price: "$85", duration: "1.5 hrs" },
      { id: 7, name: "Acne Treatment", price: "$70", duration: "1 hr" },
      { id: 8, name: "Hydrating Facial", price: "$65", duration: "1 hr" },
    ]
  },
  {
    id: 3,
    category: "Body Services",
    services: [
      { id: 9, name: "Full Body Massage", price: "$90", duration: "1.5 hrs" },
      { id: 10, name: "Body Scrub", price: "$75", duration: "1 hr" },
      { id: 11, name: "Waxing (Full Body)", price: "$150", duration: "2 hrs" },
      { id: 12, name: "Manicure & Pedicure", price: "$45", duration: "1 hr" },
    ]
  },
];
