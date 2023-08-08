import { BiStar } from "react-icons/bi";
import { useEffect } from "react";
import CommandPalette from "@components/Commands/CommandPalette";
import Setter from "@components/Commands/Setter";
import Link from "next/link";
import { GoHome } from "@components/GoBack";

export default function Repositories({ repos }: any) {
	useEffect(() => {
		window && Setter(window);
	});
	return (
		<div className="w-screen min-h-screen h-full bg-black py-10">
			<CommandPalette pg={[{ title: "Home", href: "/" }]} />
			<div className="lg:hidden">
				<GoHome />
			</div>
			<p className="text-white text-6xl lg:ml-10 roboto text-center lg:text-left">Github Repositories</p>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 mt-20">
				{repos.map((repo: any) => {
					return (
						<RepoCard
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

function RepoCard({ name, description, starCount, language, thisWebsite, url, color }: any) {
	console.log(color);
	return (
		<Link
			href={url}
			target="_blank"
			className="h-40  ml-10  mr-10  cursor-pointer">
			<div className="py-1 flex flex-col justify-between h-full hover:scale-105 transition duration-500 hover:shadow-blue-800  shadow-xl border-[#171717] border-2 outline-none rounded-md">
				<div className="mx-4">
					<div className="flex flex-row justify-between mt-2">
						<p className="text-white font-bold text-2xl">{name}</p>
						<div className="flex gap-x-1">
							<p className="text-white text-lg mont">{starCount}</p>
							<BiStar className="text-yellow-600 text-lg mt-1" />
						</div>
					</div>

					<p className="text-gray-100 mont mt-1">{description?.length > 70 ? (description?.slice(0, 70)+"..") : description?.length}</p>
				</div>
				<div className="flex flex-row ml-4 justify-between">
					{language && (
						<div className="flex flex-row">
							<div
								className="w-3 h-3 rounded-xl mt-1 md:mt-0 md:mb-4 bg-white"
								style={{ backgroundColor: color }}
							/>
							<p className="text-white ml-2 mont md:-mt-[5px]">{language}</p>
						</div>
					)}
					{thisWebsite && (
						<div className="invisible md:visible">
							<p className="text-white ml-2 mont -mt-5  mr-4 py-2 px-4 my-auto bg-blue-800 rounded-md">This Website</p>
						</div>
					)}
				</div>
			</div>
		</Link>
	);
}
