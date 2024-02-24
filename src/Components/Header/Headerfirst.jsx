import React from "react";

const Headerfirst = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-12">
        <div>
          <h4 className="font-bold text-lg mb-4">
            Restricted by opportunities?
          </h4>
        </div>
        <div>
          <h1 className="text-6xl text-wrap font-bold">
            Get the tech career <br />
            <span className="leading-normal"> you deserve. Faster</span>
          </h1>
        </div>
        <div>
          <p className="mt-3 text-slate-700">
            Structured coding courses that get you there faster with confidence.
          </p>
        </div>
        <div className="mt-12">
          <button className=" border border-amber-500 opacity-85 px-8 py-4 rounded bg-orange-500 text-white font-bold">
            Explore Courses
            <img
              className="inline-block ml-2"
              src="https://files.codingninjas.com/arrow-double-down-32299.svg"
              alt="arrowdown"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Headerfirst;
