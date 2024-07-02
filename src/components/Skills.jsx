import React from "react";
import SkillCard from "../skill-components/SkillCard";
import frontEnd from "../data/front-end";
import backend from "../data/backend";
import others from "../data/others";
import code from "../assets/images/code.png";
const Skills = () => {
  return (
    <section className={`bg-[url(${code})]`}>
      <h1 className="text-center">Skills</h1>
      <div className="flex justify-around w-4/5 mx-auto gap-10 flex-col md:flex-row ">
        {/* <img src={code} alt="code" /> */}
        {/* <SkillCard
          skillArray={frontEnd}
          skillName={"frontend"}
        />

        <SkillCard
          skillArray={backend}
          skillName={"backend"}
        />
        <SkillCard
          skillArray={others}
          skillName={"others & tools"}
        /> */}
      </div>
    </section>
  );
};

export default Skills;
