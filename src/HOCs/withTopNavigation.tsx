import React from "react";
import TopNavigation from "../components/TopNavigation";

const withTopNavigation = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithTopNavigation: React.FC<P> = (props) => (
    <div className="bg-gray-900 text-white">
      <TopNavigation />
      <WrappedComponent {...props} />
    </div>
  );

  return WithTopNavigation;
};

export default withTopNavigation;
