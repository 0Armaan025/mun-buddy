import React from "react";

const MiddlePart = () => {
  return (
    <div className="middlePart flex flex-col justify-center items-center">
      <center>
        <div className="text-center md:text-left">
          <br />
          <h3
            className="text-3xl font-semibold text-white md:text-4xl"
            style={{ fontFamily: "Poppins" }}
          >
            Explore the Possibilities
          </h3>
          <h3
            className="text-3xl mt-2 font-semibold text-[#d4d4d4] md:text-4xl"
            style={{ fontFamily: "Poppins" }}
          >
            of AI with M.U.N-Buddy
          </h3>
          <h4
            className="max-w-[40rem] mt-4 text-lg text-gray-300 md:text-xl"
            style={{ fontFamily: "Poppins" }}
          >
            Unleash the power of AI within Model United Nations. Upgrade your
            productivity with AI
          </h4>
          <br />
          <div className="buttonDiv w-full flex flex-row justify-center items-center">
            <input
              type="button"
              value="Get Started"
              style={{ fontFamily: "Poppins" }}
              className="bg-[#ffffff] cursor-pointer hover:bg-[#cacaca] px-6 py-2 rounded-lg shadow-md shadow-black"
            />
          </div>

          <br />
          <img
            src="https://plus.unsplash.com/premium_photo-1708345949080-94637ecc1ad0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdGVkJTIwbmF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D"
            className="rounded-sm"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <br />
      </center>
    </div>
  );
};

export default MiddlePart;
