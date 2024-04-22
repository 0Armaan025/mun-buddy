import React from "react";
import Navbar from "../../components/navbar/Navbar";
import DashboardSideBar from "../../components/sidebar/dashboard.sidebar";
import ResearchTile from "../../components/research_tile/ResearchTile";

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard flex flex-row justify-start items-start">
        <DashboardSideBar />
        <div className="dashboardDiv ml-4 flex flex-col justify-start items-start">
          <h2 style={{ fontFamily: "Poppins" }} className="text-white text-2xl">
            {" "}
            Good evening, Armaan! 👋{" "}
          </h2>
        </div>
        <br />
        <div className="researchRow flex mt-16 flex-row absolute left-44">
          <ResearchTile />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
