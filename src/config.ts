import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://astro-paper.pages.dev/",
  author: "Kinshuk Phalke",
  desc: "Personal Website of Kinshuk Phalke, a Student at Georgia Institute of Technology",
  title: "Kinshuk Phalke",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/xinslu/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kinshukphalke/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:phalkekinshuk@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
