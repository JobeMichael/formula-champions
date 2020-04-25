import React from "react";
import "./Layout.css";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <div className="app-layout">
      <header className="app-header"></header>
      <div className="app-container">{children}</div>
    </div>
  );
};

export default AppLayout;
