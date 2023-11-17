import { ButtonHTMLAttributes } from "react";

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: string;
}

export const NavButton = ({
  onClick,
  text,
  color,
  ...rest
}: NavButtonProps) => {
  return (
    <button {...rest} className={`nav-button ${color}`} onClick={onClick}>
      {text}
    </button>
  );
};
