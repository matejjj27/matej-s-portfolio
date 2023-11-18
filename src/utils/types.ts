export interface Paragraph extends React.HTMLProps<HTMLParagraphElement> {
  text: string;
}

export interface Anchor extends React.HTMLProps<HTMLAnchorElement> {
  text: string;
}

export interface HomeNavButton {
  color?: string;
  path: string;
  helloText: string;
  navText: string;
  isHovered: boolean;
  isRendered: boolean;
}
