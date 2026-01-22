import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Ayush Ranjan",
  DESCRIPTION: "A collection of my projects and research.",
  EMAIL: "ayush.ranjan@mail.utoronto.ca",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "My name is Ayush and I like to research and learn engineering & business.",
};

export const BLOG: Metadata = {
  TITLE: "Research",
  DESCRIPTION: "My research articles and papers.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects.",
};

export const SOCIALS: Socials = [
  {
    NAME: "LinkedIn",
    HREF: "https://linkedin.com/in/ayushranjan23",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/ayushranjan23",
  },
  {
    NAME: "Website",
    HREF: "https://ayushranjan.com",
  },
];
