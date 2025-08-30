import { BiStar } from "react-icons/bi";
import { useEffect } from "react";
import CommandPalette from "@components/Commands/CommandPalette";
import Setter from "@components/Commands/Setter";
import Link from "next/link";
import { GoHome } from "@components/GoBack";

export default function Repositories({ repos }: any) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Setter(window);
    }
  }, []);
  const repoList = Array.isArray(repos) ? repos : [];
  return (
    <div className="w-screen min-h-screen h-full bg-black py-10">
      <CommandPalette
        pg={[
          { title: "Home", href: "/" },
          { title: "Repositories", href: "/repositories" },
        ]}
      />
      <p className="text-white text-6xl lg:ml-10 spacegrotesk text-center lg:text-left">
        Github Repositories
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 mt-10 px-4">
        {repoList.map((repo: any, index: number) => {
          return (
            <RepoCard
              key={repo.id || repo.name || index}
              name={repo.name}
              description={repo.description}
              starCount={repo.stargazers_count}
              language={repo.language}
              thisWebsite={repo.name == "v2"}
              url={repo.html_url}
              color={repo.color}
            />
          );
        })}
      </div>
    </div>
  );
}

function RepoCard({
  name,
  description,
  starCount,
  language,
  thisWebsite,
  url,
  color,
}: any) {
  return (
    <Link
      href={url}
      target="_blank"
      className="w-full lg:w-10/12 mx-auto mb-8 max-w-md"
    >
      <div className="h-full flex flex-col justify-between rounded-2xl bg-black border border-[#23232a] shadow-lg hover:shadow-indigo-700/40 hover:scale-[1.03] transition-all duration-300 backdrop-blur-lg p-5">
        <div className="flex items-center gap-4">
          <div className="flex flex-col justify-center flex-grow">
            <p className="text-white font-bold text-2xl spacegrotesk leading-tight">
              {name}
            </p>
            <p className="text-indigo-300 italic spacegrotesk text-lg mt-1 flex items-center gap-2">
              <BiStar className="text-yellow-400 text-xl" />
              {starCount}
            </p>
          </div>
          {language && (
            <div className="flex flex-row items-center">
              <div
                className="w-4 h-4 rounded-xl bg-white border border-[#23232a]"
                style={{ backgroundColor: color }}
              />
              <p className="text-white ml-2 spacegrotesk text-base">
                {language}
              </p>
            </div>
          )}
        </div>
        <p className="text-gray-200 spacegrotesk mt-2 text-base leading-relaxed">
          {description?.length > 70
            ? description?.slice(0, 70) + ".."
            : description}
        </p>
        <div className="flex flex-row justify-between items-center mt-3">
          {thisWebsite && (
            <span className="px-4 py-1 rounded-full bg-blue-800 text-xs font-semibold text-white spacegrotesk">
              This Website
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
