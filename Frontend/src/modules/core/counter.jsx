import React from "react";
import userExperience from "../../assets/user-experience.svg";
import medal from "../../assets/medal.svg";
import houseWhite from "../../assets/house-white.svg";
import group from "../../assets/group.svg";

export function Counter() {
  return (
    <div className="bg-[#9B1915]/90 text-white py-8 shadow-lg">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <img
              src={userExperience}
              alt="userExperience"
              className="w-8 h-8 mr-2"
            />
            <span className="text-4xl font-bold">30+</span>
          </div>
          <p className="text-sm">Years Of Experience</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <img src={medal} alt="medal" className="w-8 h-8 mr-2" />
            <span className="text-4xl font-bold">180+</span>
          </div>
          <p className="text-sm">Awards Received</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <img src={houseWhite} alt="houseWhite" className="w-8 h-8 mr-2" />
            <span className="text-4xl font-bold">180+</span>
          </div>
          <p className="text-sm">Roofing Completed</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <img src={group} alt="group" className="w-8 h-8 mr-2" />
            <span className="text-4xl font-bold">85k</span>
          </div>
          <p className="text-sm">Roofing Completed</p>
        </div>
      </div>
    </div>
  );
}
