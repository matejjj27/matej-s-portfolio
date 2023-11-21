import { Paragraph } from "../utils/types";

interface ParagraphSectionsProps {
  paragraphs: Paragraph[];
}

const ParagraphSections = ({ paragraphs }: ParagraphSectionsProps) =>
  paragraphs.map(({ text, ...rest }, index) => (
    <p key={index} {...rest}>
      {text}
    </p>
  ));

export default ParagraphSections;
