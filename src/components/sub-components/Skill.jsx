import React from "react";
import htmlSvg from "../../assets/icons/html.svg";

const Skill = () => {
  return (
    <div className="flex gap-5 items-center text-[1.6rem] p-1">
      <img src={htmlSvg} className="w-[5rem]" alt="html" />
      <div>
        <progress
          max={100}
          value={95}
          className="rounded-sm bg-white text-[#fff]"
        />
        <p>Beginner</p>
      </div>
    </div>
  );
};

export default Skill;
