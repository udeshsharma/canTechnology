import React from "react";
import CircleIcon from "@mui/icons-material/Circle";

const LeftNavbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-around">
        <div>
          <img
            src="https://files.codingninjas.in/new_cn_logo-29829.svg"
            alt="Logo"
          />
        </div>
        <div className="ml-16 font-bold">
          <p className="shadow-sm">Job Bootcamp</p>
        </div>
        <div className="ml-16 flex flex-col font-bold items-center">
          <p className="shadow-sm">
            Upskilling Courses
            <span>
              <CircleIcon
                color="primary"
                style={{
                  fontSize: 8,
                  position: "absolute",
                  top: 20,
                }}
              />
            </span>
          </p>
          <p className="text-xs font-normal">Upto 100% Scholarship</p>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
