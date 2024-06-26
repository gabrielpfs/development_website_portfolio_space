import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="تنبؤ هروب العملاء لشركةت"
          // title="Modern Next.js Portfolio"
          description="بناءلخطر مغادرةالآلة ، الهدف هو تطوير نموذج تنبؤي يمكنه التنبؤ بالعملاء الذين من المحتمل أن يهربوا في المستقبل."
        />
        <ProjectCard
          src="/CardImage.png"
          title="تنبؤ هروب العملا"
          // title="Interactive Website Cards"
          description="بناءلخطر مغادرةالآلة ، الهدف هو تطوير نموذج تنبؤي يمكنه التنبؤ بالعملاء الذين من المحتمل أن يهربوا في المستقبل."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="تحليل المشاعر"
          // title="Space Themed Website"
          description="بناءلخطر مغادرةالآلة ، الهدف هو تطوير نموذج تنبؤي يمكنه التنبؤ بالعملاء الذين من المحتمل أن يهربوا في المستقبل."
        />
      </div>
    </div>
  );
};

export default Projects;