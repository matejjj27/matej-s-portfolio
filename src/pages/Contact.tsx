import { useState } from "react";
import withTopNavigation from "../HOCs/withTopNavigation";

const Contact = () => {
  const [buttonText, setButtonText] = useState("matej4o9@gmail.com");

  return (
    <div className="p-10 text-center">
      <h1 className="text-start m-12 mb-8 text-8xl max-w-5xl mx-auto">
        Let's make something great together!
      </h1>
      <div className="flex flex-col gap-4 text-start max-w-xl mx-auto mb-20">
        <h1 className="text-start mt-20 mb-3 text-4xl">Contact</h1>
        <p>
          Hey there! I'm all about rolling up my sleeves and getting things
          done. I thrive on challenges and adapt like a chameleon in different
          work environments. I'm the type who loves learning new stuff, and I've
          got a knack for picking things up fast. Whether it's a new skill,
          tool, or a completely different job, I'm up for the adventure.
        </p>
        <p>
          Let's not just work - let's make things happen together. If you've got
          a project or idea in mind, I'm all ears. Let's connect and explore the
          possibilities. I'm not just a worker, I'm a proactive problem solver
          and a dedicated team player.
        </p>
        <p>
          I'm excited about the opportunities to collaborate, innovate, and make
          a meaningful impact in my field. Let's connect and explore how my
          skills and motivation can contribute to our shared goals.
        </p>
        <p>Feel free to reach out at any of the platforms below:</p>
        <p
          className="cursor-pointer text-green-300"
          onClick={() => console.log("copied")}
          onMouseOver={() => setButtonText("Copied to clipboard")}
          onMouseLeave={() => setButtonText("matej4o9@gmail.com")}
        >
          {buttonText}
        </p>
        <a
          className="flex text-green-300"
          href="https://www.linkedin.com/in/matej-kostov-949834134/"
        >
          Instagram
        </a>
        <a
          className="flex text-green-300"
          href="https://www.linkedin.com/in/matej-kostov-949834134/"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

const ContactWithTopNavigation = withTopNavigation(Contact);
export default ContactWithTopNavigation;
