import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopNavigation = () => {
  const [buttonText, setButtonText] = useState("matej.");
  const navigate = useNavigate();

  return (
    <nav className="nav-wrapper">
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
