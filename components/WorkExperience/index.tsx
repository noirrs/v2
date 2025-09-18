import { useEffect } from "react";
import CommandPalette from "@components/Commands/CommandPalette";
import Setter from "@components/Commands/Setter";
import Link from "next/link";
import { GoHome } from "@components/GoBack";
import { BiCalendar, BiMapPin } from "react-icons/bi";

export default function WorkExperience({ experiences }: any) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Setter(window);
    }
  }, []);

  const experienceList = Array.isArray(experiences) ? experiences : [];

  return (
    <div className="w-screen min-h-screen h-full bg-black py-10">
      <CommandPalette
        pg={[
          { title: "Home", href: "/" },
          { title: "Work Experience", href: "/work" },
        ]}
      />
      <p className="text-white text-6xl lg:ml-10 spacegrotesk text-center lg:text-left">
        Work Experience
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 mt-12 px-4">
        {experienceList.length === 0 ? (
          <p className="text-gray-400 text-center col-span-2">
            No work experience found.
          </p>
        ) : (
          experienceList.map((experience: any, index: number) => (
            <ExperienceCard
              key={experience.id || index}
              company={experience.company}
              position={experience.position}
              duration={experience.duration}
              location={experience.location}
              description={experience.description}
              technologies={experience.technologies}
              url={experience.url}
              current={experience.current}
            />
          ))
        )}
      </div>
    </div>
  );
}

function ExperienceCard({
  company,
  position,
  duration,
  location,
  description,
  technologies,
  url,
  current,
}: any) {
  return (
    <Link
      href={url || "#"}
      target={url ? "_blank" : "_self"}
      className="w-full lg:w-11/12 mx-auto mb-8 max-w-lg"
    >
      <div className="h-full flex flex-col justify-between rounded-2xl bg-black border border-[#23232a] shadow-lg hover:shadow-indigo-700/40 hover:scale-[1.03] transition-all duration-300 backdrop-blur-lg p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className="flex flex-col flex-grow">
              <p className="text-white font-bold text-2xl spacegrotesk leading-tight">
                {position}
              </p>
              <p className="text-indigo-300 font-semibold spacegrotesk text-xl mt-1">
                {company}
              </p>
            </div>
            {current && (
              <span className="px-3 py-1 rounded-full bg-green-600 text-xs font-semibold text-white spacegrotesk">
                Current
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 text-gray-300 spacegrotesk text-sm">
            <div className="flex items-center gap-2">
              <BiCalendar className="text-indigo-400" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <BiMapPin className="text-indigo-400" />
              <span>{location}</span>
            </div>
          </div>

          <p className="text-gray-200 spacegrotesk text-base leading-relaxed">
            {description}
          </p>

          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-[#23232a] text-xs font-semibold text-indigo-200 spacegrotesk"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
