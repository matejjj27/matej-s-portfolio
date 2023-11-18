import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavButton } from "../../components/NavButton";
import { homeNavButtons } from "../../utils/constants";

const Home = () => {
  const [buttons, setButtons] = useState(homeNavButtons);
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [isHomeClicked, setIsHomeClicked] = useState<boolean>(false);
  const [animationIndex, setAnimationIndex] = useState<number>(0);

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

  const handleClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    if (isMobile) {
      setButtons((prev) =>
        prev.map((button) => ({
          ...button,
          isHovered: !button.isHovered,
          isRendered: false
        }))
      );
      setIsHomeClicked((prev) => !prev);
      setAnimationIndex(0);
    }
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

  useEffect(() => {
    if (animationIndex < buttons.length) {
      const timeoutId = setTimeout(() => {
        setButtons((prevButtons) =>
          prevButtons.map((button, index) =>
            index === animationIndex ? { ...button, isRendered: true } : button
          )
        );
        setAnimationIndex((prevIndex) => prevIndex + 1);
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [animationIndex, buttons, isHomeClicked]);

  const NavButtons = () =>
    buttons?.map(
      ({ helloText, navText, color, path, isHovered, isRendered }) => (
        <NavButton
          key={helloText}
          onClick={() => {
            if (isHomeClicked || !isMobile) navigate(path);
          }}
          onMouseOver={() => handleMouseOver(helloText, true)}
          onMouseLeave={() => handleMouseOver(helloText, false)}
          text={isHovered ? navText : helloText}
          color={color}
          className={`${!isMobile ? "move-right-on-hover" : ""} ${
            isHomeClicked || !isMobile ? "cursor-pointer" : ""
          } ${isRendered ? "text-appear" : ""} ${
            isRendered ? "" : "text-transparent"
          }`}
        />
      )
    );

  return (
    <div className="home-wrapper" onClick={handleClick}>
      {!isHomeClicked && (
        <div
          className="overlay fixed inset-0 opacity50"
          onClick={handleClick}
        ></div>
      )}

      <NavButtons />
      {isMobile && <p className="jump tap-anywhere">tap anywhere</p>}
    </div>
  );
};

export default Home;
