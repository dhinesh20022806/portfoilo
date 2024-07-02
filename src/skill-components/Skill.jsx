import React from "react";

const Skill = ({ img, score, level }) => {
  return (
    <div className="flex gap-5 items-center text-[1.6rem] p-1">
      <img src={img} alt="html" />
      <div>
        <progress
          max={100}
          value={score}
          className="rounded-sm bg-primary "
        />
        <p>{level}</p>
      </div>
    </div>
  );
};

export default Skill;
