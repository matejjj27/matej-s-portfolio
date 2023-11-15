import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavButton } from "../components/atoms/NavButton";

const Home = () => {
  const [buttonValues, setButtonValues] = useState({
    button1: "Hello.",
    button2: "I am",
    button3: "Matej"
  });

  const navigate = useNavigate();

  const handleMouseOver = (button: string, newText: string) => {
    setButtonValues((prev) => ({ ...prev, [button]: newText }));
  };

  const handleMouseLeave = (button: string, originalText: string) => {
    setButtonValues((prev) => ({ ...prev, [button]: originalText }));
  };

  return (
    <div className="min-h-screen flex items-center pl-40 bg-gray-900 text-white">
      <div className="max-w-2xl">
        <NavButton
          onClick={() => navigate("/about")}
          onMouseOver={() => handleMouseOver("button1", "About")}
          onMouseLeave={() => handleMouseLeave("button1", "Hello.")}
          text={buttonValues.button1}
        />
        <NavButton
          onClick={() => navigate("/work")}
          onMouseOver={() => handleMouseOver("button2", "Work")}
          onMouseLeave={() => handleMouseLeave("button2", "I am")}
          text={buttonValues.button2}
          color="text-green-300"
        />
        <NavButton
          onClick={() => navigate("/contact")}
          onMouseOver={() => handleMouseOver("button3", "Contact")}
          onMouseLeave={() => handleMouseLeave("button3", "Matej")}
          text={buttonValues.button3}
          color="text-green-300"
        />
      </div>
    </div>
  );
};

export default Home;
