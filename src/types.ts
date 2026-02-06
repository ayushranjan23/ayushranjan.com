export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
  NUM_CODE_ON_HOMEPAGE: number;
  NUM_XP_ON_HOMEPAGE: number;
  NUM_LEARN_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];
