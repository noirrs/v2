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
  const { GITHUB, DISCORD, SPOTIFY, EMAIL, TWITTER, LINKEDIN } = Accounts;
  useEffect(() => {
    window && Setter(window);
  }, []);
  return (
    <div className="h-screen">
      <CommandPalette pg={[{ title: "Home", href: "/" }]} />
      <div className="w-screen h-screen lg:flex lg:flex-col lg:justify-center">
        <div className="flex flex-col lg:flex-row justify-evenly gap-x-40 lg:-mt-20 2xl:-mt-32 backdrop-blur-0 lg:mx-0 bg-black ">
          <div className="lg:-ml-20 mx-auto lg:mx-0 6/12 mt-8">
            {/* Image Div */}

            <div className="w-[17rem]">
              <label htmlFor={screen.width > 1024 ? "modal-2" : "modal-2"}>
                <img
                  className={`w-full specialshadow rounded-xl transition duration-500 cursor-pointer `}
                  src={constants.avatar}
                />
              </label>
            </div>

            <div className="mt-6 flex gap-x-[6px] justify-center">
              <Link href={GITHUB} target="_blank">
                <AiFillGithub className="w-8 h-8 hover:text-red-800 -mt-1 text-white rounded-lg transition duration-500" />
              </Link>
              <Link href={DISCORD} target="_blank">
                <FaDiscord className="w-8 h-[28px] text-white hover:text-indigo-600 transition duration-500" />
              </Link>
              <Link href={TWITTER} target="_blank">
                <FaTwitter className="w-8 h-[28px] text-white hover:text-blue-700 transition duration-500" />
              </Link>
              <Link href={EMAIL} target="_blank">
                <RiAtLine className="w-8 h-[28px] text-white hover:text-yellow-500 transition duration-500" />
              </Link>
              <Link href={SPOTIFY} target="_blank">
                <FaSpotify className="w-8 h-[28px] text-white hover:text-emerald-500 transition duration-500" />
              </Link>
              <Link href={LINKEDIN} target="_blank">
                <FaLinkedin className="w-8 h-[28px] text-white hover:text-blue-800 transition duration-500" />
              </Link>
            </div>
          </div>

          <div className="lg:my-auto text-center mt-20">
            {/* Text Div */}
            <div className="">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#ffffff] roboto">
                Taha Kaçmaz
              </h1>
              <p
                className={`text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-indigo-100 to-indigo-600 text-center mt-0.5 mont`}
              >
                backend developer
              </p>
            </div>
            <div className="flex justify-center text-center mt-4">
              <p className="text-lg font-medium  text-white text-center  mont lg:absolute  max-w-md m-1">
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
