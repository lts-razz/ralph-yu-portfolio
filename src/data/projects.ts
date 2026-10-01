export interface Project {
  title: string;
  description: string;
  features?: string[];
  repositoryUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Woodberry Resort and Events Booking and Management System",
    description: "A web-based booking and management system for resort and events operations.",
    features: [
      "Booking management",
      "Availability management",
      "Sales forecasting",
      "Interactive Google Maps",
      "Email/SMS notifications",
    ],
    repositoryUrl: "https://github.com/lts-razz/capstone-clone",
  },
  {
    title: "Lost and Found Website for Local Schools",
    description: "A school-focused website for organizing and reporting lost-and-found items.",
  },
];
