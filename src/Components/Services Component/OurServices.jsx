import React from "react";
import CourseCard from "./CourseCard";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const OurServices = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="">
          <div className="w-fit mt-16">
            <h1 className=" opacity-50 tracking-wide relative left-72 text-gray-400 place-content-center text-center text-8xl font-bold uppercase">
              Our Courses
            </h1>
          </div>
          <div></div>
          <div className="flex flex-row items-center relative top-8 left-28">
            <div>
              <img
                className="inline-block p-0 m-0"
                src="https://files.codingninjas.com/bootcampicon-32524.svg"
                alt=""
              />
            </div>
            <div className="relative ml-[-10px]">
              <h4 className="inline text-center text-lg font-bold relative top-[-16px]">
                Job Bootcamp Courses
                <span className="text-sm ml-2 border px-3 font-base  font-medium py-0.5 rounded-r-2xl bg-slate-300">
                  For professionals
                </span>
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 absolute ml-52">
            <CourseCard />
            <CourseCard />
          </div>
        </div>
        {/* <div className="flex flex-row">
          <div className="flex flex-row">
            <div>
              <img
                src="https://files.codingninjas.com/upskilling-course-icon-32521.svg"
                alt="Upskill Certificate"
              />
            </div>
            <div>
              <h4>Upskilling Courses</h4>
            </div>
            <div className="">
              <p>
                Get upto 100% Scholarship <ArrowOutwardIcon />
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default OurServices;
