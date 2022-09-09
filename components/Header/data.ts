export interface HeaderDataType {
  resume: {
    href: string;
    text: string;
  };
  projects: {
    href: string;
    text: string;
  };
  source: {
    href: string;
    text: string;
  };
}
[];

export const HeaderData = [
  // {
  //   href: "resume",
  //   text: "Resume",
  // },
  {
    href: "projects",
    text: "Projects",
  },
  {
    // add github
    href: "https://github.com/Tomo5524/Portofolio",
    text: "source",
  },
];
