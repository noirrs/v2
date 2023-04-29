import { Heads } from "@components/Heads";
import Landing from "@components/Landing";
import Loading from "@components/Loading";
import Toast from "@components/Toast";
import { useEffect, useState } from "react";

export default function Home() {
	let [loading, setLoading] = useState(true);
	useEffect(() => {
		window.document.body.style.background = window.navigator.platform === "iPhone" ? "black" : "none"; // fixing scrolling issue on ios

		setTimeout(() => {
			setLoading(false);
		}, 400);
	});
	return loading ? (
		<div className="w-screen h-full bg-black">
			<Heads page={"Home"} />
			<Loading />
		</div>
	) : (
		<div className="w-screen  min-h-screen bg-black">
			<Toast/>
			<Heads page={"Home"} />
			<Landing />
		</div>
	);
}
