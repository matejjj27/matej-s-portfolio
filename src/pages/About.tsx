import withTopNavigation from "../HOCs/withTopNavigation";

const About = () => {
  const handleDownload = () => {
    const cvUrl = import.meta.env.VITE_CV_URL;
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Matej Kostov Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="page-wrapper">
      <h1 className="main-title">I am a Front end (React) Developer</h1>

      <div className="content-wrapper">
        <h1 className="paragraph-title">About</h1>
        <p className="text-xl mb-2">
          Hi, I’m Matej. I'm a multi-talented human with over 1+ years of
          experience in wide range of frontend technologies.
        </p>
        <p>
          I'm all about rolling up my sleeves and getting things done. I thrive
          on challenges and adapt like a chameleon in different work
          environments. I'm the type who loves learning new stuff, and I've got
          a knack for picking things up fast. Whether it's a new skill, tool, or
          a completely different job, I'm up for the adventure.
        </p>
        <p>
          Let's not just work - let's make things happen together. If you've got
          a project or idea in mind, I'm all ears. Let's connect and explore the
          possibilities. I'm not just a worker, I'm a proactive problem solver
          and a dedicated team player.
        </p>
        <p>
          I'm excited about the opportunities to collaborate, innovate, and make
          a meaningful impact in my field. Let's connect and explore how my
          skills and motivation can contribute to our shared goals.
        </p>
        <p>
          You can read more about my biography, experience, skills, education
          and much more in the PDF attached bellow:
        </p>
        <p className="bottom-link" onClick={handleDownload}>
          My resume (CV)
        </p>
      </div>
    </div>
  );
};

const AboutWithTopNavigation = withTopNavigation(About);
export default AboutWithTopNavigation;
