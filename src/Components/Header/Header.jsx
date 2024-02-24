import React from "react";
import Headerfirst from "./Headerfirst";
import VideoSection from "./VideoSection";

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Headerfirst />
      </div>
      <div className="w-9/12 mt-16">
        <VideoSection />
      </div>
    </div>
  );
};

export default Header;
