import { Anchor } from "../utils/types";

interface AnchorSectionsProps {
  anchors: Anchor[];
}

const AnchorSections = ({ anchors }: AnchorSectionsProps) =>
  anchors.map(({ text, ...rest }) => (
    <a key={text} {...rest}>
      {text}
    </a>
  ));

export default AnchorSections;
