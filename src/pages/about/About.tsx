import withTopNavigation from "../../HOCs/withTopNavigation";
import ParagraphSections from "../../components/ParagraphSections";
import useAboutParagraphSections from "../../hooks/useAboutParagraphSections";

const About = () => {
  const aboutParagraphSections = useAboutParagraphSections();
  return (
    <div className="page-wrapper">
      <h1 className="main-title">
        Passionate about every pixel & dedicated to every line of code
      </h1>

      <div className="content-wrapper">
        <h1 className="paragraph-title">about</h1>

        <ParagraphSections paragraphs={aboutParagraphSections} />
      </div>
    </div>
  );
};

const AboutWithTopNavigation = withTopNavigation(About);
export default AboutWithTopNavigation;
