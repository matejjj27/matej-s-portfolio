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
    text: "hi, matej here - a multi-talented human with over 1+ years of experience in wide range of frontend technologies."
  },
  {
    className: "paragraph-text",
    text: " all about rolling up my sleeves and getting things done. i thrive on challenges and adapt like a chameleon in different work environments. the type who loves learning new stuff, and has a knack for picking things up fast. whether it's a new skill, tool, or a completely different job, i am up for the adventure."
  },
  {
    className: "paragraph-text",
    text: "let's not just work - let's make things happen together. if you've got a project or idea in mind, i am all ears. connect with me and explore the possibilities. i am not just a worker, but proactive problem solver and a dedicated team player."
  },
  {
    className: "paragraph-text",
    text: "excited about the opportunities to collaborate, innovate, and make a meaningful impact in my field. let's connect and explore how my skills and motivation can contribute to our shared goals."
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
    href: "https://www.linkedin.com/in/matej-kostov-949834134/",
    text: "instagram"
  },
  {
    className: "bottom-link",
    href: "https://www.linkedin.com/in/matej-kostov-949834134/",
    text: "linkedin"
  }
];
