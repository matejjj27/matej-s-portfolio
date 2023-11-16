import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopNavigation = () => {
  const [buttonText, setButtonText] = useState("matej.");
  const navigate = useNavigate();

  return (
    <nav className="bg-transparent pr-40 pt-20 flex justify-end sticky top-0">
      <span
        className="cursor-pointer text-lg"
        onClick={() => navigate("/")}
        onMouseOver={() => setButtonText("matej.dev")}
        onMouseLeave={() => setButtonText("matej.")}
      >
        {buttonText}
      </span>
    </nav>
  );
};

export default TopNavigation;
