import withTopNavigation from "../HOCs/withTopNavigation";

const Work = () => {
  return (
    <div className="page-wrapper">
      <div className="content-wrapper">
        <h1 className="paragraph-title">Work</h1>
      </div>
    </div>
  );
};

const WorkWithTopNavigation = withTopNavigation(Work);
export default WorkWithTopNavigation;
