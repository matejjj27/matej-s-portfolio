import { ReactNode } from "react";
import TopNavigation from "./components/TopNavigation";

function App() {
  return (
    <>
      <div className="flex">
        <TopNavigation />
        <SideBar />
      </div>

      <h1 className="bold text-center m-20 text-3xl">Matej's Portfolio</h1>
    </>
  );
}

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg mt-16"
    >
      <SideBarIcon icon={<p>T1</p>} />
      <Divider />
      <SideBarIcon icon={<p>T2</p>} />
      <SideBarIcon icon={<p>T3</p>} />
      <SideBarIcon icon={<p>T4</p>} />
      <SideBarIcon icon={<p>T5</p>} />
    </div>
  );
};

const SideBarIcon = ({
  icon,
  text = "tooltip"
}: {
  icon: ReactNode;
  text?: string;
}) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr" />;

export default App;
