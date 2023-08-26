import { ReactNode } from "react";

export interface Project {
  title: ReactNode | string;
  backgroundImage?: string;
  coverImage?: string;
  description: ReactNode | string;
  technologies: ReactNode | string;
  url?: string;
  frontendUrl?: string;
  backendUrl?: string;
}

export const projectData: Project[] = [
  {
    title: "Inventory Management",
    coverImage: "/InventoryManagementCard.jpg",
    description:
      "One stop solution for tracking the inventory of items for your business. Enables you to lend items to your team members. Has printable QR codes that can be used to easily check in/out the item.",
    technologies: "NextJS, .Net7, PostgreSQL",
    backendUrl: "https://github.com/hchev001/QR-Repository",
    frontendUrl: "https://github.com/hchev001/inventory-frontend",
  },
];
