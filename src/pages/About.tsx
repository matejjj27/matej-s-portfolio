import withTopNavigation from "../HOCs/withTopNavigation";

const About = () => {
  return (
    <div className="p-10 text-center">
      <div className="flex flex-col gap-4 text-start max-w-xl mx-auto mb-20">
        <h1 className="text-start mt-20 mb-3 text-4xl">About</h1>
      </div>
    </div>
  );
};

const AboutWithTopNavigation = withTopNavigation(About);
export default AboutWithTopNavigation;
