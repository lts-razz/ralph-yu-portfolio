export interface Project {
  title: string;
  description: string;
  features?: string[];
  image: {
    src: string;
    alt: string;
  };
  repositoryUrl?: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    title: "Woodberry Resort and Events Booking and Management System",
    description: "A web-based booking and management system for resort and events operations.",
    image: {
      src: "/projects/woodberry-preview.png",
      alt: "Preview of the Woodberry Resort and Events Booking and Management System interface",
    },
    features: [
      "Booking management",
      "Availability management",
      "Sales forecasting",
      "Interactive Google Maps",
      "Email/SMS notifications",
    ],
    repositoryUrl: "https://github.com/lts-razz/capstone-clone",
    liveUrl: "https://capstone-clone-tan.vercel.app/",
  },
  {
    title: "Lost and Found Website for Local Schools",
    description: "A school-focused website for organizing and reporting lost-and-found items.",
    image: {
      src: "/projects/lost-and-found-preview.png",
      alt: "Preview of the Lost and Found Website for Local Schools interface",
    },
    liveUrl: "https://lost-and-found-website-azure.vercel.app/",
  },
];
