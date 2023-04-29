import { Heads } from "@components/Heads";
import Loading from "@components/Loading";
import Projects from "@components/Projects";
import Toast from "@components/Toast";
import constants from "@libs/constants";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home({ projects }: any) {
	let [loading, setLoading] = useState(true);
	useEffect(() => {
		window.document.body.style.background = window.navigator.platform === "iPhone" ? "black" : "none";

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
			<Toast />
			<br />
			<br />
			<br />
		</div>
	);
}

export async function getServerSideProps() {
	let projectFetch = await axios.get(constants.fetchProjectEndpoint);

	let data = projectFetch.data.projects;
	console.log("data: ", data);
	return {
		props: {
			projects: data || null
		}
	};
}
