import { Paragraph } from "../utils/types";

interface ParagraphSectionsProps {
  paragraphs: Paragraph[];
}

const ParagraphSections = ({ paragraphs }: ParagraphSectionsProps) =>
  paragraphs.map(({ text, ...rest }) => (
    <p key={text} {...rest}>
      {text}
    </p>
  ));

export default ParagraphSections;
