import withTopNavigation from "../../HOCs/withTopNavigation";

const Work = () => {
  return (
    <div className="page-wrapper mt-12 max-lg:mt-10 max-sm:mt-6">
      <div className="content-wrapper gap-14">
        <div className="move-right-on-hover cursor-pointer flex flex-col gap-2">
          <h1 className="project-title">clone app</h1>
          <p className="project-subtitle">work in progress</p>
        </div>
        <div className="move-right-on-hover cursor-pointer flex flex-col gap-2">
          <h1 className="project-title">todo app</h1>
          <p className="project-subtitle">work in progress</p>
        </div>
        <div className="move-right-on-hover cursor-pointer flex flex-col gap-2">
          <h1 className="project-title">perfect score</h1>
          <p className="project-subtitle">work in progress</p>
        </div>
      </div>
    </div>
  );
};

const WorkWithTopNavigation = withTopNavigation(Work);
export default WorkWithTopNavigation;
