import { useState } from "react";
import { Projects } from "../Data/Projects";
import CategoryButton from "./small-components/CategoryButton";
import ProjectCard from "./small-components/ProjectCard";
import ProjectDetails from "./ProjectDetails";


export default function ProjectsScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openedProject, setOpenedProject] = useState(null); 


  return (
    <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700 p-6 md:p-8 overflow-y-auto">
      <div className="fade-in-bottom">
        <div className="h-full text-white flex flex-col p-6 lg:p-6">
          <h1 className="text-3xl py-2 md:text-4xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>

          {!openedProject ? (
            <>
              <div className="flex flex-wrap gap-3 mb-8">
                {Projects.map((category, index) => (
                  <CategoryButton
                    key={index}
                    title={category.type}
                    isSelected={index === selectedIndex}
                    onClick={() => setSelectedIndex(index)}
                  />
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Projects[selectedIndex].list.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.name}
                    image={project.image}
                    openProject={() => setOpenedProject(project)} 
                  />
                ))}
              </div>
            </>
          ) : (
            <ProjectDetails
              project={openedProject}
              type={Projects[selectedIndex].type}
              onBack={() => setOpenedProject(null)}
            />
          )
          }
        </div>
      </div>
    </div>
  );
}
