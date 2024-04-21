import React from "react";
import Navbar from "../../components/navbar/Navbar";
import DashboardSideBar from "../../components/sidebar/dashboard.sidebar";

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <DashboardSideBar />
      </div>
    </>
  );
};

export default DashboardPage;
