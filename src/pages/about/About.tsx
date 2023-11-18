import withTopNavigation from "../../HOCs/withTopNavigation";
import ParagraphSections from "../../components/ParagraphSections";
import { aboutParagraphSections } from "../../utils/constants";

const About = () => {
  return (
    <div className="page-wrapper">
      <h1 className="main-title">i am a front end (react) developer</h1>

      <div className="content-wrapper">
        <h1 className="paragraph-title">about</h1>

        <ParagraphSections paragraphs={aboutParagraphSections} />
      </div>
    </div>
  );
};

const AboutWithTopNavigation = withTopNavigation(About);
export default AboutWithTopNavigation;
