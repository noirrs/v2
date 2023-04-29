import { Heads } from "@components/Heads";
import Loading from "@components/Loading";
import Repositories from "@components/Repositories";
import Toast from "@components/Toast";
import constants from "@libs/constants";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home({ repos }: any) {
	let [loading, setLoading] = useState(true);
	useEffect(() => {
		window.document.body.style.background = window.navigator.platform === "iPhone" ? "black" : "none";

		setTimeout(() => {
			setLoading(false);
		}, 400);
	});
	return loading ? (
		<div className="w-screen h-screen bg-black">
			<Heads page={"Repos"} />
			<Loading />
		</div>
	) : (
		<div className=" w-screen h-full bg-black">
			<Heads page={"Repos"} />
			<Repositories repos={repos} />
			<Toast />
			<br />
			<br />
			<br />
		</div>
	);
}

export async function getServerSideProps() {
	const repoFetch = await axios.get(constants.fetchReposEndpoint);
	let repos = repoFetch.data;

	let colorFetch = await axios.get(constants.languageColorEndpoint);

	repos.map((repo: any) => {
		repo["color"] = colorFetch.data[repo.language]?.color || null;
	});
	repos = repos.filter((repo: any) => !repo.fork);
	return {
		props: {
			repos
		}
	};
}
