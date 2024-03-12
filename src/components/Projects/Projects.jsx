import React from "react";
import projectsJson from "../../../public/projects.json";
import ProjectCard from "../projectCard/ProjectCard";

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full min-h-screen flex justify-center bg-slate-500 pt-20"
        >
            <div className="lg:w-4/5 flex flex-col items-center bg-slate-600 border-t-4 border-blue-400">
                <h3 className="text-3xl font-bold text-green-500 h-20 flex items-center">
                    Proyectos
                </h3>
                <div className="w-full flex flex-wrap justify-evenly bg-slate-500 border-t-4 border-blue-400 pt-4">
                    {projectsJson.projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
