import { handleCVDownload } from "../utils/utils";
import { useState } from "react";
import { useScrollToTopNavigate } from "./useScrollToTopNavigate";

const useAboutParagraphSections = () => {
  const [contactStyles, setContactStyles] = useState<string>("paragraph-text");
  const [workStyles, setWorkStyles] = useState<string>(
    "paragraph-text text-green-300"
  );
  const navigate = useScrollToTopNavigate();

  return [
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
      text: (
        <span>
          {
            "in my professional endeavors, which you can explore in more detail on my "
          }
          <span
            className={workStyles}
            onClick={() => navigate("/work")}
            onMouseOver={() =>
              setWorkStyles("paragraph-text text-green-300 cursor-pointer")
            }
            onMouseLeave={() => setWorkStyles("paragraph-text text-green-300")}
          >
            work page
          </span>
          {
            ", i have consistently demonstrated a knack for rapidly acquiring new skills and tools. this ability to adapt and grow has not just been a part of my work, but a defining aspect of my character. my career is not just about coding; it's about making a tangible impact, solving real-world problems, and collaborating to bring visions to life."
          }
        </span>
      )
    },
    {
      className: "paragraph-text",
      text: "i believe in the synergy of teamwork and the power of collective effort. beyond just being a team player, i see myself as a proactive problem solver who's always eager to contribute to a larger vision. whether it's a complex project or an innovative idea, i am all in for collaborating and exploring possibilities."
    },
    {
      className: contactStyles,
      text: (
        <span>
          {
            "let's connect and explore how my skills, motivation, and zest for innovation can contribute to our shared goals. i am always open to discussing new projects, tech trends, or potential collaborations. feel free to "
          }
          <span
            className="cursor-pointer text-green-300 "
            onClick={() => navigate("/contact")}
            onMouseOver={() => setContactStyles("paragraph-text")}
            onMouseLeave={() => setContactStyles("paragraph-text")}
          >
            reach out
          </span>
          {" to me. "}
        </span>
      )
    },
    {
      className: "paragraph-text",
      text: "you can read more about my biography, experience, skills, education and much more in the pdf attached bellow or visit my github to see some of my projects:"
    },
    {
      className: "bottom-link",
      text: "my resume (cv) - en",
      onClick: () => handleCVDownload(import.meta.env.VITE_CV_URL)
    },
    {
      className: "bottom-link",
      text: "my resume (cv) - de",
      onClick: () => handleCVDownload(import.meta.env.VITE_CV_URL_DE)
    }
  ];
};

export default useAboutParagraphSections;
