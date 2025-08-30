import { useEffect, useState } from "react";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { SlHome, SlSocialSpotify } from "react-icons/sl";
import { AiOutlineFolder } from "react-icons/ai";
import { BiBook, BiGitRepoForked } from "react-icons/bi";
import { RxDiscordLogo } from "react-icons/rx";
import { RiAtLine } from "react-icons/ri";
import accounts from "@libs/accounts";
import Link from "next/link";
import constants from "@libs/constants";

function CommandPalette({ pg }: any) {
  const [content, setContent] = useState("");
  const [pages, setPages]: any = useState();
  let { GITHUB, EMAIL, RESUME } = accounts;
  const allPages = [
    {
      category: "MOST VISITED",
      commands: [
        {
          icon: <SlHome />,
          text: "Home",
          href: "/",
        },
        {
          icon: <AiOutlineFolder />,
          text: "Projects",
          href: "/projects",
        },
        {
          icon: <BiGitRepoForked />,
          text: "Repositories",
          href: "/repositories",
        },
      ],
    },
    {
      category: "LINKS",
      commands: [
        {
          icon: <FiGithub />,
          text: "Github",
          href: GITHUB,
        },
        {
          icon: <BiBook />, // Document/book icon for Resume
          text: "Resume",
          href: RESUME,
        },
        {
          icon: <RiAtLine />, // At symbol icon for Email
          text: "Email",
          href: EMAIL,
        },
      ],
    },
  ];
  useEffect(() => {
    setPages(allPages);
  }, []);
  return (
    pages &&
    window && (
      <div className="">
        <input className="modal-state" id="modal-2" type="checkbox" />
        <div className="modal w-screen backdrop-blur-sm">
          <label className="modal-overlay " htmlFor="modal-2"></label>
          <div className=" modal-content px-0 max-h-[400px] overflow-hidden flex flex-col gap-5 w-11/12 lg:w-8/12 bg-[#171717] outline-none border-[#333]   border-[1px]">
            <div className="sticky">
              <div className="breadcrumbs text-sm relative">
                <ul>
                  {pg.map((page: any, i: number) => {
                    return (
                      <li key={i}>
                        <a href={page.href}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="mr-2 h-4 w-4 stroke-current text-white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            ></path>
                          </svg>
                          <p className="text-gray-500">{page.title}</p>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <input
                className="input-xl border-[#333] outline-none w-full px-4 py-2 mt-2 bg-[#171717] border-b-[1px]  text-white placeholder-gray-800"
                placeholder="Placeholder"
                id="search"
                tabIndex={1}
                autoFocus
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);

                  let filteredPages = allPages
                    .map((page) =>
                      page.commands
                        .filter((command) =>
                          command.text
                            .toLowerCase()
                            .includes(e.target.value.toLowerCase())
                        )
                        .map((el) => {
                          return { category: page.category, command: el };
                        })
                    )
                    .flat();
                  let categories = GetClearCategories(filteredPages);
                  let final = categories.map((category: any) => {
                    return {
                      category: category,
                      commands: filteredPages
                        .filter((page: any) => page.category === category)
                        .map((el: any) => el.command),
                    };
                  });
                  setPages(final);
                  console.log(filteredPages);
                }}
              />
            </div>
            <div className=" scroll-smooth spscroll h-[300px] overflow-auto">
              {pages.map((page: any, i1: number) => (
                <div className="flex flex-col gap-y-2" key={i1}>
                  <label className="text-xs inter ml-[18px] text-gray-700">
                    {page.category}
                  </label>
                  <div className="flex flex-col p-2 pt-0">
                    {page.commands.map((cmd: any, i: number) => (
                      <Link
                        key={i1.toString() + i.toString()}
                        href={cmd.href}
                        target={
                          !cmd.href.includes("://") ||
                          cmd.href.includes(constants.domain)
                            ? "_self"
                            : "_blank"
                        }
                      >
                        <div
                          className="flex gap-2 hover:bg-[#2f2f2f] hover:text-white py-2 rounded-md transition  cursor-pointer"
                          onMouseOver={() => {
                            let ref = window.document.getElementById(
                              i1.toString() + i.toString()
                            ) as any;

                            ref.classList.remove("text-gray-800");
                            ref.classList.add("text-white");
                          }}
                          onMouseOut={() => {
                            let ref = window.document.getElementById(
                              i1.toString() + i.toString()
                            ) as any;

                            ref.classList.remove("text-white");
                            ref.classList.add("text-gray-800");
                          }}
                        >
                          <div className="flex items-center justify-center w-10 h-10 rounded-xl text-white">
                            {cmd.icon}
                          </div>
                          <div className="flex flex-col">
                            <h1
                              className="font-medium text-gray-800 my-auto inter transition"
                              id={i1.toString() + i.toString()}
                              key={i1.toString() + i.toString()}
                            >
                              {cmd.text}
                            </h1>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

function GetClearCategories(arr: Array<any>) {
  let categories: any = [];

  arr.forEach((cmd) => {
    if (!categories.includes(cmd.category)) {
      categories.push(cmd.category);
    }
  });

  return categories;
}

export default CommandPalette;
