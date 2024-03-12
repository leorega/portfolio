import { ImGithub } from "react-icons/im";
import { MdCallMissedOutgoing } from "react-icons/md";
import PropTypes from "prop-types";

const ProjectCard = (props) => {
    const { project } = props;

    return (
        <div
            translate="no"
            className="flex flex-col items-center md:w-[45%] lg:w-[30%] lg:h-96 ml-1 mr-1 mb-8 shadow-md shadow-green-100 scale-100 lg:hover:scale-105 ease-in duration-500 hover:bg-gradient-to-br from-slate-600 to-slate-300"
        >
            <img
                src={project?.image}
                alt={project?.name}
                className="lg:h-1/2"
            />
            <div className="p-3 flex flex-col h-1/2 items-center">
                <h4 className="font-bold text-base mt-4 mb-4">
                    {project?.name}
                </h4>
                <p className="font-semibold text-sm">{project?.description}</p>
                <div className="mt-auto w-4/5 flex justify-around py-2">
                    {project.link ? (
                        <a
                            href={project?.link}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center cursor-pointer text-sm font-semibold border-2 border-black hover:bg-green-500"
                        >
                            + Visitar <MdCallMissedOutgoing className="mx-2" />{" "}
                            +
                        </a>
                    ) : (
                        <p className="hidden"></p>
                    )}
                    <a
                        href={project?.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center cursor-pointer text-sm font-semibold border-2 border-black hover:bg-green-500"
                    >
                        + Ver Repo <ImGithub className="mx-2" /> +
                    </a>
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.arrayOf,
};

export default ProjectCard;
