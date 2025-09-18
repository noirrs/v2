import CommandPalette from "@components/Commands/CommandPalette";
import Setter from "@components/Commands/Setter";
import { useEffect, useState } from "react";
import Projects from "@components/Projects";
import Repositories from "@components/Repositories";
import WorkExperience from "@components/WorkExperience";
import axios from "axios";
import constants from "@libs/constants";

export async function getServerSideProps() {
  // Fetch projects and work experience
  const projectFetch = await axios
    .get(constants.fetchProjectEndpoint)
    .catch((err) => {
      console.error("Error fetching projects and work experiences:", err);
      return { data: { projects: [], works: [] } };
    });
  const projects = projectFetch.data.projects || [];
  const workExperiences = projectFetch.data.works || [];

  // Fetch repos
  const repoFetch = await axios.get(constants.fetchReposEndpoint);
  let repos = repoFetch.data;

  // Fetch language colors
  const colorFetch = await axios.get(constants.languageColorEndpoint);
  repos = repos.map((repo: any) => ({
    ...repo,
    color: colorFetch.data[repo.language]?.color || null,
  }));

  repos = repos.filter((repo: any) => !repo.fork && repo.name != "noirrs");

  return {
    props: {
      projects,
      repos,
      workExperiences,
    },
  };
}

export default function Home({ projects, repos, workExperiences }: any) {
  const [modalId, setModalId] = useState("modal-1");

  useEffect(() => {
    if (typeof window !== "undefined") {
      Setter(window);
      setModalId(window.screen.width > 320 ? "modal-2" : "modal-1");
    }
  }, []);

  return (
    <div className="h-full w-full overflow-x-hidden">
      <CommandPalette pg={[{ title: "Home", href: "/" }]} />
      <div className="h-full w-full overflow-y-auto scroll-smooth snap-y snap-mandatory">
        {/* Hero Section */}
        <section className="w-screen min-h-screen flex flex-col items-center px-4 pt-8 pb-2 lg:h-screen lg:flex lg:flex-col lg:justify-center bg-black relative snap-start snap-always">
          <div className="w-screen min-h-screen flex flex-col items-center px-4 pt-8 pb-2 lg:h-screen lg:flex lg:flex-col lg:justify-center">
            <div className="flex flex-col items-center lg:flex-row lg:items-start justify-evenly gap-x-40 gap-y-4 lg:-mt-20 2xl:-mt-32 backdrop-blur-0 lg:mx-0 bg-black w-full max-w-5xl mx-auto">
              <div className="lg:-ml-20 mx-auto lg:mx-0 w-full max-w-[17rem] mt-2 flex flex-col items-center">
                {/* Image Div */}

                <div className="w-[12rem] sm:w-[17rem]">
                  <label htmlFor={modalId}>
                    <img
                      className={`w-full specialshadow rounded-xl transition duration-500 cursor-pointer `}
                      src={constants.avatar}
                    />
                  </label>
                </div>

                <div className="mt-6 flex gap-x-[6px] justify-center">
                  <span className="text-base text-gray-400 spacegrotesk text-center max-w-[17rem] break-words">
                    Click the profile photo to access all my links and pages
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-start text-center flex-grow lg:my-auto mt-2">
                {/* Text Div */}
                <div className="">
                  <h1 className="text-5xl lg:text-6xl font-bold text-[#ffffff] climatecrisis">
                    Taha Kaçmaz
                  </h1>
                  <p
                    className={`text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-100 to-indigo-600 text-center mt-0.5 spacegrotesk`}
                  >
                    backend developer
                  </p>
                </div>
                <div className="flex justify-center text-center mt-4">
                  <p className="text-lg font-medium text-white text-center spacegrotesk lg:absolute max-w-md m-1">
                    I'm a self-educated backend developer who is also interested
                    in developing frontend projects. I mostly use Go & Nest and
                    Next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="work-section"
          className="w-screen min-h-screen bg-black flex items-center justify-center snap-start snap-always"
        >
          <div className="h-max mb-10">
            <WorkExperience experiences={workExperiences} />
          </div>
        </section>
        {/* Projects Section */}
        <section
          id="projects-section"
          className="w-screen min-h-screen bg-black flex items-center justify-center snap-start snap-always"
        >
          <div className="h-max mb-10">
            <Projects projects={projects} />
            <Repositories repos={repos} />
          </div>
        </section>

        {/* Work Experience Section */}
      </div>
    </div>
  );
}
