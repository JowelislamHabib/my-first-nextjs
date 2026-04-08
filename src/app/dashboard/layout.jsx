import React from "react";
import DashboardPage from "./page";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <p>Common parts of the dashboard</p>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
