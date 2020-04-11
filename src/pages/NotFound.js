import React from "react";
import Header from "../components/Header";

const NotFound = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header
        title="Opps! 404 Not Found"
        background="linear-gradient(to right, #d53369, #cbad6d)"
      >
        <h1 className="title">Opps! 404 Not Found</h1>
      </Header>
    </div>
  );
};

export default NotFound;
