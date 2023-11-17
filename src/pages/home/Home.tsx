import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavButton } from "../../components/NavButton";
import { useHomeNavButtons } from "../../hooks/useHomeNavButtons";

const Home = () => {
  const homeNavButtons = useHomeNavButtons();
  const [buttons, setButtons] = useState(homeNavButtons);
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [isHomeClicked, setIsHomeClicked] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleMouseOver = (helloText: string, isHovered: boolean) => {
    if (!isMobile) {
      setButtons((prev) =>
        prev.map((button) => {
          if (button.helloText === helloText) {
            return { ...button, isHovered };
          } else {
            return button;
          }
        })
      );
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setButtons((prev) =>
        prev.map((button) => ({ ...button, isHovered: !button.isHovered }))
      );
      setIsHomeClicked((prev) => !prev);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home-wrapper" onClick={handleClick}>
      {buttons?.map(({ helloText, navText, color, path, isHovered }) => (
        <NavButton
          onClick={() => handleNavigation(path)}
          onMouseOver={() => handleMouseOver(helloText, true)}
          onMouseLeave={() => handleMouseOver(helloText, false)}
          text={isHovered ? navText : helloText}
          color={color}
          disabled={isMobile && !isHomeClicked}
        />
      ))}
    </div>
  );
};

export default Home;
