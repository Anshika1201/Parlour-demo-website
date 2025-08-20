export interface Testimonial {
  id: number;
  name: string;
  review: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Layrena Meglio",
    review: "First time trying it out. I loved the cleanliness. Great customer service and affordable.",
    avatar: "/images/customer1.jpg",
  },
  {
    id: 2,
    name: "Ayesha Patel",
    review: "Amazing atmosphere! The staff was friendly and my styling was perfect.",
    avatar: "/images/customer2.jpg",
  },
  {
    id: 3,
    name: "Priya Anand",
    review: "Affordable prices and the services exceeded my expectations. Highly recommended.",
    avatar: "/images/customer3.jpg",
  },
];
