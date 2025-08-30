import CommandPalette from "@components/Commands/CommandPalette";
import Setter from "@components/Commands/Setter";
import Link from "next/link";
import { useEffect } from "react";
import Accounts from "@libs/accounts";
import { AiFillGithub } from "react-icons/ai";
import constants from "@libs/constants";
import { FaDiscord, FaLinkedin, FaSpotify, FaTwitter } from "react-icons/fa";
import { RiAtLine } from "react-icons/ri";
export default function Landing() {
  const { GITHUB, EMAIL, LINKEDIN } = Accounts;
  useEffect(() => {
    window && Setter(window);
  }, []);
  return (
    <div className="h-full n">
      <CommandPalette pg={[{ title: "Home", href: "/" }]} />
      <div className="w-screen min-h-screen flex flex-col items-center px-4 pt-8 pb-2 lg:h-screen lg:flex lg:flex-col lg:justify-center">
        <div className="flex flex-col items-center lg:flex-row lg:items-start justify-evenly gap-x-40 gap-y-4 lg:-mt-20 2xl:-mt-32 backdrop-blur-0 lg:mx-0 bg-black w-full max-w-5xl mx-auto">
          <div className="lg:-ml-20 mx-auto lg:mx-0 w-full max-w-[17rem] mt-2 flex flex-col items-center">
            {/* Image Div */}

            <div className="w-[12rem] sm:w-[17rem]">
              <label htmlFor={screen.width > 320 ? "modal-2" : "modal-1"}>
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
                I'm a self-educated backend developer who is also interested in
                developing frontend projects. I mostly use Go & Nest and Next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
