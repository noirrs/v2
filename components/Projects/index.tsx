import { useEffect } from "react";
import CommandPalette from "@components/Commands/CommandPalette";
import Setter from "@components/Commands/Setter";
import Link from "next/link";
import constants from "@libs/constants";
import { GoHome } from "@components/GoBack";

export default function Projects({ projects }: any) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Setter(window);
    }
    console.log(projects);
  }, [projects]);
  const projectList = Array.isArray(projects) ? projects : [];
  return (
    <div className="w-screen min-h-screen h-full bg-black py-10 overflow-x-hidden">
      <CommandPalette pg={[{ title: "Home", href: "/" }]} />
      <p className="text-white text-6xl lg:ml-10 spacegrotesk text-center lg:text-left">
        Projects
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 mt-12 px-4">
        {projectList.length === 0 ? (
          <p className="text-gray-400 text-center col-span-3">
            No projects found.
          </p>
        ) : (
          projectList.map((project: any) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              url={project.link}
              type={project.type}
              img={project.image}
              status={project.status}
              title={project.title}
            />
          ))
        )}
      </div>
    </div>
  );
}

function ProjectCard({
  name,
  description,
  url,
  img,
  type,
  status,
  title,
}: any) {
  const colors = constants.projectStatusColors;
  let color = (colors as any)[status];

  return (
    <Link
      href={url}
      target="_blank"
      className="w-full lg:w-10/12 mx-auto mb-8 max-w-md"
    >
      <div className="h-full flex flex-col justify-between rounded-2xl bg-black border border-[#23232a] shadow-lg hover:shadow-indigo-700/40 hover:scale-[1.03] transition-all duration-300 backdrop-blur-lg p-5">
        <div className="flex items-center gap-4">
          <img
            className="rounded-xl w-20 h-20 object-cover border-2 border-[#23232a] shadow-md"
            src={img}
            alt={name}
          />
          <div className="flex flex-col justify-center">
            <p className="text-white font-bold text-2xl spacegrotesk leading-tight">
              {name}
            </p>
            <p className="text-indigo-300 italic spacegrotesk text-lg mt-1">
              {title}
            </p>
          </div>
        </div>
        <p className="text-gray-200 spacegrotesk mt-4 text-base leading-relaxed">
          {description}
        </p>
        <div className="flex flex-row justify-between items-center mt-6">
          {status && (
            <span
              className="px-4 py-1 rounded-full text-xs font-semibold spacegrotesk"
              style={{ backgroundColor: color, color: "#fff" }}
            >
              {status || "Beta"}
            </span>
          )}
          {type && (
            <span className="px-4 py-1 rounded-full bg-[#23232a] text-xs font-semibold text-indigo-200 spacegrotesk">
              {type || "type"}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
