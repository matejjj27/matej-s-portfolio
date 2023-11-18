import withTopNavigation from "../../HOCs/withTopNavigation";
import AnchorSections from "../../components/AnchorSections";
import ParagraphSections from "../../components/ParagraphSections";
import { useContactParagraphSections } from "../../hooks/useContactParagraphSections";
import { contactAnchorSections } from "../../utils/constants";

const Contact = () => {
  const paragraphSections = useContactParagraphSections();

  return (
    <div className="page-wrapper">
      <h1 className="main-title">let's team up to create wonders!</h1>
      <div className="content-wrapper">
        <h1 className="paragraph-title">contact</h1>

        <ParagraphSections paragraphs={paragraphSections} />
        <AnchorSections anchors={contactAnchorSections} />
      </div>
    </div>
  );
};

const ContactWithTopNavigation = withTopNavigation(Contact);
export default ContactWithTopNavigation;
