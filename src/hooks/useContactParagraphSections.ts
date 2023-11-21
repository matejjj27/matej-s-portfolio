import { useState } from "react";

export const useContactParagraphSections = () => {
  const [buttonText, setButtonText] = useState("matej4o9@gmail.com");
  const [isEmailCopied, setIsEmailCopied] = useState<boolean>(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("matej4o9@gmail.com");
      setIsEmailCopied(true);
      setButtonText("copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return [
    {
      className: "paragraph-text",
      text: "hey there! if you are seeking a tech-savvy professional to elevate your project or team, I'm ready to contribute my skills and enthusiasm."
    },
    {
      className: "paragraph-text",
      text: "collaboration is at the heart of innovation. whether it's developing cutting-edge web applications, crafting user-centric interfaces, or exploring new tech frontiers, i bring a combination of technical expertise and creative problem-solving to the table. let's collaborate to create something exceptional."
    },
    {
      className: "paragraph-text",
      text: "open to a variety of projects and roles. from startups needing a dynamic developer to established companies seeking fresh perspectives, i am eager to contribute and grow in diverse environments."
    },
    {
      className: "paragraph-text",
      text: "in a world driven by technology, the right collaboration can lead to groundbreaking results. if you are looking for a developer who not only understands code but also the bigger picture of project goals and user experience, let's connect and make a significant impact together."
    },
    {
      className: "paragraph-text",
      text: "available for projects that require a blend of technical proficiency and innovative thinking. Here is how you can reach me:"
    },
    {
      className: "bottom-link",
      text: buttonText,
      onClick: () => copyToClipboard(),
      onMouseOver: () =>
        setButtonText(`${isEmailCopied ? "copied" : "copy"} to clipboard`),
      onMouseLeave: () => setButtonText("matej4o9@gmail.com")
    }
  ];
};
