export interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "Glamorous Makeup",
    description: "Get your perfect look with our professional makeup services for any occasion.",
    image: "/images/slider_1_makeup.jpg",
    buttonText: "Book Now"
  },
  {
    id: 2,
    title: "Trendy Haircuts",
    description: "Transform your style with a haircut that matches your personality.",
    image: "/images/slider_2_haircut.jpg",
    buttonText: "Explore Styles"
  },
  {
    id: 3,
    title: "Relaxing Facials",
    description: "Rejuvenate your skin with our premium facial treatments.",
    image: "/images/facial_1.jpg",
    buttonText: "Pamper Yourself"
  }
];
