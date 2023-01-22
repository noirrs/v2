import Landing from "@components/Landing";
import Loading from "@components/Loading";
import { useEffect, useState } from "react";
export default function Home() {
	let [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 400);
	});
	return loading ? (
		<Loading />
	) : (
		<div className=" w-screen h-screen bg-black">
			<Landing />

		</div>
	);
}
