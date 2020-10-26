import React, { useState } from "react";
import "./Layout.css";
import Menu from "../Menu/Menu";

function Layout(props) {
  const [showSidebar, setShowSidebar] = useState(true);
  const { children } = props;
  return (
    <div
      className="container"
      style={showSidebar === true ? { background: "rgba(0, 0, 0, 0.5)" } : null}
    >
      <Menu />
      <div className="content">{children}</div>
    </div>
  );
}

export default Layout;
