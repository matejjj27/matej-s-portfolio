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
    <h1
      className={`cursor-pointer text-8xl mb-8 ${color}`}
      onClick={onClick}
      style={{ fontSize: "94px", zoom: "1" }}
    >
      <span
        className="hoverable-text"
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        {text}
      </span>
    </h1>
  );
};
