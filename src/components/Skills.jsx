import React from "react";
import Skill from "./sub-components/Skill";

const Skills = () => {
  return (
    <section>
      <h1 className="text-center">Skills</h1>
      <div className="flex justify-around w-4/5 mx-auto gap-10 flex-col md:flex-row min-h-[900px] max-h-fit">
        <div className="flex-[0.5] border-primary border-4 ">
          <Skill />
        </div>
        <div className="flex-[0.5] border-black border-4">
          back end skill
        </div>
        <div className="flex-[0.5] border-primary border-4">
          Others skill
        </div>
      </div>
    </section>
  );
};

export default Skills;
