import React from "react";
import Skill from "./Skill";

const SkillCard = ({ skillArray, skillName }) => {
  return (
    <div className="w-[500px] border-primary border-4 h-[500px] hover:animate-flip-scale-2-hor-top  ">
      <div className="backface-hidden absolute z-20   rotate-0 w-[500px] text-primary h-[500px]  ">
        {/* card front */}
        <h2>{skillName}</h2>
      </div>
      <div className="rotate-180 bg-primary ">
        {/* card back side */}
        <ul className="flex gap-5 flex-col">
          {skillArray.map((skill) => {
            return (
              <li key={skill.id}>
                <Skill {...skill} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
