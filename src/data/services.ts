export interface ServiceSection {
  title: string;
  image: string;
  options: { name: string; price: string }[];
  description?: string;
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  price: string;
  description: string;
  icon: string;
  sections?: ServiceSection[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Skin Care",
    slug: "skin-care",
    price: "$199",
    description: "We craft stunning and amazing web UI, using a well drafted UX to fit your product.",
    icon: "/images/skincare_bg.webp",
    sections: [
      {
        "title": "Facials",
        "image": "/images/slider_3_facial.webp",
        "options": [
          { "name": "Classic/Fruit Facial", "price": "₹700" },
          { "name": "Gold/Diamond Facial", "price": "₹1,500" },
          { "name": "De-tanning Facial", "price": "₹1,000" }
        ],
        "description": "Our facials are tailored to your skin's needs, using professional products to cleanse, exfoliate, and hydrate, leaving you with a radiant glow."
      },
      {
        "title": "Bleaching & De-tanning",
        "image": "/images/facial_1.jpg",
        "options": [
          { "name": "Face Bleach", "price": "₹300" },
          { "name": "De-tanning Pack", "price": "₹500" }
        ],
        "description": "Get a brighter, more even skin tone with our bleaching and de-tanning services, perfect for a quick refresh."
      },
      {
        "title": "Body Polishing/Rejuvenation",
        "image": "/images/facial_3.webp",
        "options": [
          { "name": "Full Body Polishing", "price": "₹2,000" }
        ],
        "description": "Treat your body to a full-body exfoliation and massage that removes dead skin cells and leaves your skin feeling incredibly soft and smooth."
      }
    ],
  },
  {
    id: 2,
    title: "Hair services",
    slug: "hair-services",
    price: "$150",
    description:
      "Transform your look with our expert hair services. From precision haircuts to stunning color transformations, we use top-quality products to ensure healthy, beautiful results.",
    icon: "/images/hairservice_bg.jpeg",
    sections: [
      {
        title: "Hair Cutting & Styling",
        image: "/images/hairservice_1.avif",
        options: [
          { name: "Standard Haircut", price: "₹450" },
          { name: "Layered Cut", price: "₹600" },
          { name: "Butterfly Haircut", price: "₹800" },
          { name: "Short Haircuts", price: "₹600" },
          { name: "French Cut", price: "₹700" },
          { name: "Bangs/Fringe Cut", price: "₹250" },
        ],
        description: "Whether you're looking for a fresh trim, a complete restyle, or a perfect blowout, our stylists are trained to deliver a look that suits your personality and lifestyle",
      },
      {
        title: "Hair Coloring & Treatments",
        image: "/images/hairservice_2.webp",
        "options": [
          { "name": "Global Hair Color (Short)", "price": "₹1,800" },
          { "name": "Global Hair Color (Medium)", "price": "₹2,500" },
          { "name": "Global Hair Color (Long)", "price": "₹3,500+" },
          { "name": "Highlights/Balayage", "price": "₹3,000+" },
          { "name": "Keratin/Rebonding Treatment", "price": "₹4,500+" },
          { "name": "Hair Spa", "price": "₹900+" }
        ],
        description: "Elevate your hair with our coloring and treatment options. Our colorists can create everything from subtle highlights to bold, full-color changes. Our treatments are designed to restore health, shine, and manageability.",
      },
    ],
  },
  {
    id: 3,
    title: "Makeup",
    slug: "makeup",
    price: "$299",
    description:
      "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
    icon: "/images/makeup_bg.jpg",
    sections: [
      {
        "title": "Bridal Makeup",
        "image": "/images/makeup_4.png",
        "options": [
          { "name": "Standard Bridal Makeup", "price": "₹7,500" },
          { "name": "HD Bridal Makeup", "price": "₹10,000" },
          { "name": "Airbrush Bridal Makeup", "price": "₹15,000" }
        ],
        "description": "Look and feel like a queen on your wedding day with our professional bridal makeup services. We use premium products to ensure your look lasts from the ceremony to the reception."
      },
      {
        "title": "Party & Event Makeup",
        "image": "/images/makeup_3.jpg",
        "options": [
          { "name": "Simple Party Makeup", "price": "₹2,000" },
          { "name": "Glam Party Makeup", "price": "₹3,500" }
        ],
        "description": "Get ready for any special occasion with a professional makeup application that enhances your natural beauty."
      }
    ],
  },
  {
    id: 4,
    title: "Hand & feet care",
    slug: "hand-and-feet-care",
    price: "$250",
    description:
      "Relax and rejuvenate with our premium spa packages designed to refresh your mind and body.",
    icon: "/images/handfeetcare_bg.webp",
    sections: [

      {
        "title": "Waxing",
        "image": "/images/handfeetcare_1.jpg",
        "options": [
          { "name": "Underarms Waxing", "price": "₹200" },
          { "name": "Full Arms Waxing", "price": "₹450" },
          { "name": "Full Legs Waxing", "price": "₹600" },
          { "name": "Full Body Waxing", "price": "₹2,500+" }
        ],
        "description": "Achieve silky-smooth skin with our gentle and effective waxing services."
      }
    ],
  },
  {
    id: 5,
    title: "Nail Art & Care",
    slug: "nail-art-and-care",
    price: "$120",
    description:
      "Trendy and beautiful nail art with professional care for a perfect look.",
    icon: "/images/nailart_bg.jpg",
    sections: [
      {
        "title": "Manicure & Pedicure",
        "image": "/images/nailart_1.jpg",
        "options": [
          { "name": "Classic Manicure", "price": "₹600" },
          { "name": "Classic Pedicure", "price": "₹700" },
          { "name": "Spa Manicure", "price": "₹900" },
          { "name": "Spa Pedicure", "price": "₹1,200" }
        ],
        "description": "Indulge in our hand and foot care services, designed to soothe and beautify your hands and feet."
      },
      {
        "title": "Nail Art",
        "image": "/images/nailart_2.webp",
        "options": [
          { "name": "Simple Nail Art", "price": "₹300" },
          { "name": "Gel Extensions", "price": "₹1,500+" }
        ],
        "description": "Add a creative touch to your nails with our professional nail art services."
      },
    ],
  },

  {
    id: 6,
    title: "Other services",
    slug: "other-services",
    price: "$120",
    description:
      "Trendy and beautiful nail art with professional care for a perfect look.",
    icon: "/images/other_bg.jpeg",
    sections: [
      {
        "title": "Massages",
        "image": "/images/other_1.jpeg",
        "options": [
          { "name": "Head Massage", "price": "₹500" },
          { "name": "Foot Reflexology", "price": "₹700" }
        ],
        "description": "Unwind and relieve tension with our relaxing massage services."
      },
      {
        "title": "Threading",
        "image": "/images/other_2.jpg",
        "options": [
          { "name": "Eyebrow Threading", "price": "₹70" },
          { "name": "Upper Lip Threading", "price": "₹50" }
        ],
        "description": "A precise and gentle method for removing unwanted facial hair."
      }
    ],
  },

];
