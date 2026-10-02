export interface Project {
  marker: string;
  type: string;
  title: string;
  role: string;
  contributionAreas?: string;
  description: string;
  supportingAreas: string;
  technologies: string;
  integrations?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  repositoryUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    marker: "01",
    type: "Selected work",
    title: "Woodberry Resort and Events Booking and Management System",
    role: "Lead developer \u00b7 Team project of 3",
    contributionAreas: "Front-end UI/UX \u00b7 Documentation \u00b7 Sales forecasting",
    description:
      "A web-based booking and management system for resort and events operations, built to support customer, staff, and admin workflows.",
    supportingAreas: "Booking operations / Availability / Admin workflows / Notifications",
    technologies: "Astro \u00b7 TypeScript \u00b7 Tailwind CSS \u00b7 Supabase \u00b7 Zod \u00b7 Vercel",
    integrations: "PayMongo \u00b7 Brevo \u00b7 Termux-based SMS notifications",
    image: {
      src: "/projects/woodberry-preview.png",
      alt: "Preview of the Woodberry Resort and Events Booking and Management System interface",
      width: 1906,
      height: 1079,
    },
    repositoryUrl: "https://github.com/lts-razz/capstone-clone",
    liveUrl: "https://capstone-clone-tan.vercel.app/",
  },
  {
    marker: "02",
    type: "Selected work",
    title: "Lost and Found Website for Local Schools",
    role: "Sole developer",
    description:
      "A school-focused database for organizing missing and found items, filtering listings, and making item details easier to review.",
    supportingAreas: "Listings / Filtering / Item details / Admin posting",
    technologies: "Astro \u00b7 React \u00b7 JavaScript/JSX \u00b7 Tailwind CSS \u00b7 Supabase \u00b7 Vercel",
    image: {
      src: "/projects/lost-and-found-preview.png",
      alt: "Preview of the Lost and Found Website for Local Schools interface",
      width: 1903,
      height: 1079,
    },
    repositoryUrl: "https://github.com/lts-razz/Lost-and-Found-Website",
    liveUrl: "https://lost-and-found-website-azure.vercel.app/",
  },
];
