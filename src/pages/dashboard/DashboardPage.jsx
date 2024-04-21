import React from "react";
import Navbar from "../../components/navbar/Navbar";
import DashboardSideBar from "../../components/sidebar/dashboard.sidebar";

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard flex flex-row justify-start items-start">
        <DashboardSideBar />
        <div className="dashboardDiv ml-4">
          <h2 style={{ fontFamily: "Poppins" }} className="text-white text-2xl">
            {" "}
            Good evening, Armaan! 👋{" "}
          </h2>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
