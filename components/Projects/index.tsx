import { BiStar } from "react-icons/bi";
import { useEffect, useState } from "react";
import CommandPalette from "@components/Commands/CommandPalette";
import Setter from "@components/Commands/Setter";
import Link from "next/link";
import constants from "@libs/constants";

export default function Projects({ projects }: any) {
	useEffect(() => {
		window && Setter(window);
		console.log(projects);
	});

	return (
		<div className="w-screen min-h-screen h-full bg-black py-10 overflow-x-hidden">
			<CommandPalette pg={[{ title: "Home", href: "/" }]} />
			<p className="text-white text-6xl lg:ml-10 roboto text-center lg:text-left">Projects & APIs</p>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 mt-12">
				{projects?.map((project: any) => {
					return (
						<ProjectCard
							name={project.name}
							description={project.description}
							url={project.link}
							type={project.type}
							img={project.image}
							status={project.status}
							title={project.title}
						/>
					);
				})}
			</div>
		</div>
	);
}

function ProjectCard({ name, description, url, img, type, status, title }: any) {
	const colors = constants.projectStatusColors;
	let color = (colors as any)[status];

	console.log(color);
	return (
		<Link
			href={url}
			target="_blank"
			className="x-2 h-72 ml-10  mr-10  cursor-pointer w-10/12 ">
			<div className="p-2 h-full hover:scale-105 transition duration-500 hover:shadow-blue-800  shadow-xl border-[#171717] border-2  rounded-md flex justify-between flex-col">
				<div>
					<div className="flex w-full mt-4">
						<div className="p-2">
							<img
								className="rounded-md w-24 h-24"
								src={img}
							/>
						</div>
						<div className="mx-4 mt-4">
							<div className="flex flex-row justify-between">
								<div className="flex flex-col mt-4">
									<p className="text-white font-bold text-2xl">{name}</p>
									<p className="text-white italic mont">{title}</p>
								</div>
							</div>
						</div>
					</div>
					<p className="text-white ml-2 mr-2 mont mt-4">{description}</p>
				</div>
				{/*
				<p
					className={`text-white mont -mt-1 px-4 py-2 my-auto rounded-md bg-[#171717]`}
					style={{ backgroundColor: color }}>
					{status || "Beta"}
				</p>
	*/}
				<div className="flex flex-row justify-between pb-2">
					{status && (
						<div className="">
							<p
								className="text-white mont py-2 px-8 bg-[#080808ö] rounded-md -mt-2 mr-4"
								style={{ color: color }}>
								{status || "status"}
							</p>
						</div>
					)}
					{type && (
						<div className="">
							<p className="text-white mont py-[10px] px-8 bg-[#171717] rounded-md -mt-2 mr-4">{type || "type"}</p>
						</div>
					)}
				</div>
			</div>
		</Link>
	);
}
