import { Anchor, HomeNavButton, Paragraph } from "./types";
import { handleCVDownload } from "./utils";

export const homeNavButtons: HomeNavButton[] = [
  {
    path: "/about",
    helloText: "hello.",
    navText: "about",
    isHovered: false,
    isRendered: false
  },
  {
    color: "text-green-300",
    path: "/work",
    helloText: "i am",
    navText: "work",
    isHovered: false,
    isRendered: false
  },
  {
    color: "text-green-300",
    path: "/contact",
    helloText: "matej",
    navText: "contact",
    isHovered: false,
    isRendered: false
  }
];

export const aboutParagraphSections: Paragraph[] = [
  {
    className: "main-paragraph-text",
    text: "hi, matej here - a versatile and dynamic front-end web developer, fueled by over a year of experience in a broad spectrum of cutting-edge frontend technologies."
  },
  {
    className: "paragraph-text",
    text: "all about rolling up my sleeves and getting things done. i thrive on challenges and adapt like a chameleon in different work environments. the type who loves learning new stuff, and has a knack for picking things up fast. whether it's a new skill, tool, or a completely different job, i am up for the adventure."
  },
  {
    className: "paragraph-text",
    text: "in my professional endeavors, which you can explore in more detail on my [work page], I have consistently demonstrated a knack for rapidly acquiring new skills and tools. this ability to adapt and grow has not just been a part of my work, but a defining aspect of my character. my career is not just about coding; it's about making a tangible impact, solving real-world problems, and collaborating to bring visions to life."
  },
  {
    className: "paragraph-text",
    text: "i believe in the synergy of teamwork and the power of collective effort. beyond just being a team player, i see myself as a proactive problem solver who's always eager to contribute to a larger vision. whether it's a complex project or an innovative idea, i am all in for collaborating and exploring possibilities."
  },
  {
    className: "paragraph-text",
    text: "let's connect and explore how my skills, motivation, and zest for innovation can contribute to our shared goals. i am always open to discussing new projects, tech trends, or potential collaborations. feel free to reach out to me."
  },
  {
    className: "paragraph-text",
    text: "you can read more about my biography, experience, skills, education and much more in the pdf attached bellow:"
  },
  {
    className: "bottom-link",
    text: "my resume (cv)",
    onClick: handleCVDownload
  }
];

export const contactAnchorSections: Anchor[] = [
  {
    className: "bottom-link",
    href: "https://instagram.com/matejkostov?igshid=OGQ5ZDc2ODk2ZA==",
    text: "instagram"
  },
  {
    className: "bottom-link",
    href: "https://www.linkedin.com/in/matej-kostov-949834134/",
    text: "linkedin"
  }
];

export const aboutAnchorSections: Anchor[] = [
  {
    className: "bottom-link",
    href: "https://github.com/matejjj27",
    text: "github"
  }
];
