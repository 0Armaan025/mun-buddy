import React from "react";

const ResearchTile = () => {
  return (
    <>
      <div
        className="researchTile flex flex-col justify-center hover:pointer-cursor cursor-pointer hover:bg-blue-950 transition-all pointer-cursor items-center p-6 bg-blue-900 rounded text-white"
        style={{ fontFamily: "Poppins" }}
      >
        <h2 className="hover:pointer-cursor">+</h2>
        <h2 className="hoverpointer-cursor"> Research </h2>
      </div>
    </>
  );
};

export default ResearchTile;
