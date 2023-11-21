import { useNavigate } from "react-router-dom";

export const useScrollToTopNavigate = () => {
  const navigate = useNavigate();

  const scrollToTopNavigate = (to: string) => {
    navigate(to);
    window.scrollTo(0, 0);
  };

  return scrollToTopNavigate;
};
