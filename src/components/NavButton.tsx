interface NavButtonProps {
  onClick: () => void;
  onMouseOver: () => void;
  onMouseLeave: () => void;
  text: string;
  color?: string;
}

export const NavButton = ({
  onClick,
  onMouseOver,
  onMouseLeave,
  text,
  color
}: NavButtonProps) => {
  return (
    <h1 className={`nav-button ${color}`} onClick={onClick}>
      <span onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        {text}
      </span>
    </h1>
  );
};
