import React from "react";
import Header from "../components/Header";

const NotFound = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header title="Opps! 404 Not Found" />
    </div>
  );
};

export default NotFound;
