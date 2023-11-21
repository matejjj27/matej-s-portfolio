import withTopNavigation from "../../HOCs/withTopNavigation";
import AnchorSections from "../../components/AnchorSections";
import ParagraphSections from "../../components/ParagraphSections";
import useAboutParagraphSections from "../../hooks/useAboutParagraphSections";
import { aboutAnchorSections } from "../../utils/constants";

const About = () => {
  const aboutParagraphSections = useAboutParagraphSections();
  return (
    <div className="page-wrapper">
      <h1 className="main-title">
        passionate about every pixel & dedicated to every line of code
      </h1>

      <div className="content-wrapper">
        <h1 className="paragraph-title">about</h1>

        <ParagraphSections paragraphs={aboutParagraphSections} />
        <AnchorSections anchors={aboutAnchorSections} />
      </div>
    </div>
  );
};

const AboutWithTopNavigation = withTopNavigation(About);
export default AboutWithTopNavigation;
