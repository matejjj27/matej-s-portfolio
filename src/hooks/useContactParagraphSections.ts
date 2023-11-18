import { useState } from "react";

export const useContactParagraphSections = () => {
  const [buttonText, setButtonText] = useState("matej4o9@gmail.com");

  return [
    {
      className: "paragraph-text",
      text: "hey there! i am all about rolling up my sleeves and getting things done. I thrive on challenges and adapt like a chameleon in different work environments. I'm the type who loves learning new stuff, and I've got a knack for picking things up fast. Whether it's a new skill, tool, or a completely different job, I'm up for the adventure."
    },
    {
      className: "paragraph-text",
      text: "let's not just work - let's make things happen together. If you've got a project or idea in mind, I'm all ears. Let's connect and explore the possibilities. I'm not just a worker, I'm a proactive problem solver and a dedicated team player."
    },
    {
      className: "paragraph-text",
      text: "excited about the opportunities to collaborate, innovate, and make a meaningful impact in my field. let's connect and explore how my skills and motivation can contribute to our shared goals."
    },
    {
      className: "paragraph-text",
      text: "feel free to reach out at any of the platforms below:"
    },
    {
      className: "bottom-link",
      text: buttonText,
      onClick: () => console.log("copied to clipboard"),
      onMouseOver: () => setButtonText("copy to clipboard"),
      onMouseLeave: () => setButtonText("matej4o9@gmail.com")
    }
  ];
};
