interface NavButtonProps {
  text: string;
  color?: string;
  className: string;
  onClick: () => void;
  onMouseOver: () => void;
  onMouseLeave: () => void;
}

export const NavButton = ({
  text,
  color,
  className,
  ...rest
}: NavButtonProps) => {
  return (
    <div {...rest} className={`nav-button ${color} `}>
      <p className={`${className}`}>{text}</p>
    </div>
  );
};
