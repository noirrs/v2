import { Heads } from "@components/Heads";
import Landing from "@components/Landing";
import Loading from "@components/Loading";
import Projects from "@components/Projects";
import Repositories from "@components/Repositories";
import { usernames } from "@libs/accounts";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home({ projects }: any) {
	let [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 400);
	});
	return loading ? (
		<div className="w-screen h-screen bg-black">
			<Heads page={"Projects"} />
			<Loading />
		</div>
	) : (
		<div className=" w-screen h-full bg-black">
			<Heads page={"Projects"} />
			<Projects projects={projects} />
			<br />
			<br />
			<br />
		</div>
	);
}

export async function getServerSideProps() {
	let projectFetch = await axios.get(`https://raw.githubusercontent.com/${usernames.GITHUB}/${usernames.GITHUB}/master/Projects.json`);

	let data = projectFetch.data.projects;
	console.log("data: ", data);
	return {
		props: {
			projects: data || null
		}
	};
}
