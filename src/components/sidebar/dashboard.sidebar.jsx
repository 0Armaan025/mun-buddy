import React from "react";

const DashboardSideBar = () => {
  return (
    <>
      <div className="dashboardSideBar flex flex-col justify-center items-center border-2 border-white w-40 rounded-r-lg ">
        <div className="items flex flex-col justify-center items-center w-full">
          <div className="item flex flex-row justify-center items-center w-full hover:bg-black cursor-pointer transition-all">
            <img
              src="https://cdn-icons-png.flaticon.com/128/10397/10397171.png"
              className="m-2"
              style={{ width: "30px" }}
            />

            <h3 className="text-white mr-2" style={{ fontFamily: "Poppins" }}>
              Dashboard
            </h3>
          </div>

          <hr className="border-1 mt-1 mb-2 border-gray-400 w-full" />
          <br />
          <div className="item flex flex-row justify-start w-full bg-red-900 rounded items-center hover:bg-red-500 hover:text-black cursor-pointer transition-all">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1828/1828490.png"
              className="m-2"
              style={{ width: "30px" }}
            />

            <h3 className="text-white mr-2" style={{ fontFamily: "Poppins" }}>
              Log out
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSideBar;
