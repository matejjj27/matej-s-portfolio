import withTopNavigation from "../../HOCs/withTopNavigation";

const Work = () => {
  const handleExternalLinkClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="page-wrapper mt-12 max-lg:mt-10 max-sm:mt-6">
      <div className="content-wrapper gap-14">
        <div className="project-wrapper">
          <h1 className="project-title">portfolio</h1>
          <p className="project-subtitle">portfolio web app with react</p>
          <p className="project-subtitle">you are browsing it now</p>
        </div>
        <div
          className="project-wrapper"
          onClick={() =>
            handleExternalLinkClick("https://todoer-app-zeta.vercel.app")
          }
        >
          <h1 className="project-title">to-doer</h1>
          <p className="project-subtitle">to-do web app with react</p>
          <p className="project-subtitle text-orange-300">in progress</p>
        </div>
        <div
          className="project-wrapper"
          // onClick={() =>
          //   handleExternalLinkClick("https://todoer-app-zeta.vercel.app")
          // }
        >
          <h1 className="project-title">netflix clone</h1>
          <p className="project-subtitle">web app in react</p>
          <p className="project-subtitle text-red-400">todo</p>
        </div>
      </div>
    </div>
  );
};

const WorkWithTopNavigation = withTopNavigation(Work);
export default WorkWithTopNavigation;
