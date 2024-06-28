import React from "react";

const Skills = () => {
  return (
    <section>
      <h1 className="text-center">Skills</h1>
      <div className="flex justify-around gap-10 flex-col md:flex-row h-[500px]">
        <div className="flex-[0.5] border-primary border-4 ">
          front end skill
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
