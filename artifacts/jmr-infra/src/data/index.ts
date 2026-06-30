import heroImg from "../assets/hero.png";
import plotImg from "../assets/plot1.png";
import aptImg from "../assets/apartment1.png";
import villaImg from "../assets/villa1.png";
import commImg from "../assets/commercial1.png";

export const projects = [
  {
    id: "1",
    name: "Sri Sai Residency",
    location: "Guntur Road, Vijayawada",
    startingPrice: "₹45L",
    plotSizes: "100-300 sq yards",
    status: "Available",
    image: plotImg,
    type: "Open Plot",
    description: "Premium open plots with excellent connectivity and peaceful surroundings.",
  },
  {
    id: "2",
    name: "Lakshmi Apartments",
    location: "Benz Circle, Vijayawada",
    startingPrice: "₹65L",
    plotSizes: "2BHK/3BHK",
    status: "Ongoing",
    image: aptImg,
    type: "Apartment",
    description: "Luxury apartments in the heart of the city with modern amenities.",
  },
  {
    id: "3",
    name: "Green Valley Plots",
    location: "Mangalagiri, Vijayawada",
    startingPrice: "₹30L",
    plotSizes: "150-500 sq yards",
    status: "Sold Out",
    image: villaImg,
    type: "Open Plot",
    description: "Scenic plots surrounded by nature, perfect for your dream villa.",
  },
  {
    id: "4",
    name: "Royal Enclave",
    location: "Undavalli, Vijayawada",
    startingPrice: "₹80L",
    plotSizes: "200-600 sq yards",
    status: "Available",
    image: commImg,
    type: "Villa",
    description: "Exclusive gated community for luxury living.",
  },
  {
    id: "5",
    name: "Krishna View Apartments",
    location: "Ibrahimpatnam, Vijayawada",
    startingPrice: "₹55L",
    plotSizes: "2BHK/3BHK/4BHK",
    status: "Ongoing",
    image: aptImg,
    type: "Apartment",
    description: "Riverside apartments with breathtaking views.",
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    rating: 5,
    text: "JMR Infra made our dream home a reality. Professional team, transparent pricing, and excellent locations."
  },
  {
    id: 2,
    name: "Sunita Devi",
    rating: 5,
    text: "We bought plots in Green Valley. The registration process was smooth and all documents were clear."
  },
  {
    id: 3,
    name: "Venkat Rao",
    rating: 4,
    text: "Good service and quality construction. Highly recommend JMR for anyone looking for apartments."
  },
  {
    id: 4,
    name: "Priya Lakshmi",
    rating: 5,
    text: "The team guided us through every step. Our apartment in Lakshmi Apartments is beautiful."
  }
];

export const images = { heroImg, plotImg, aptImg, villaImg, commImg };
