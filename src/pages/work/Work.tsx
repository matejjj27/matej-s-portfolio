import withTopNavigation from "../../HOCs/withTopNavigation";

const Work = () => {
  return (
    <div className="page-wrapper mt-10">
      <div className="content-wrapper gap-10">
        <div className="move-right-on-hover cursor-pointer flex flex-col gap-2">
          <h1 className="text-6xl">clone app</h1>
          <p className="text-lg text-green-300">work in progress</p>
        </div>
        <div className="move-right-on-hover cursor-pointer flex flex-col gap-2">
          <h1 className="text-6xl">todo app</h1>
          <p className="text-lg text-green-300">work in progress</p>
        </div>
        <div className="move-right-on-hover cursor-pointer flex flex-col gap-2">
          <h1 className="text-6xl">perfect score</h1>
          <p className="text-lg text-green-300">work in progress</p>
        </div>
      </div>
    </div>
  );
};

const WorkWithTopNavigation = withTopNavigation(Work);
export default WorkWithTopNavigation;
