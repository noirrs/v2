import { IoIosArrowRoundBack } from "react-icons/io";
import { useEffect, useState } from "react";
import Link from "next/link";
import constants from "@libs/constants";
export const GoHome = ({ url }: any) => {
	let [windower, setWindow] = useState<any>();
	useEffect(() => {
		if (typeof window != "undefined") {
			setWindow(window);
		}
	});
	return (
		<div className="w-24 bg-opacity-100 rounded">
			<Link
				href={
					windower && windower.location.hostname == "localhost"
						? "http://localhost:3000"
						: constants.domain.startsWith("https://")
						? constants.domain
						: "https://" + constants.domain
				}>
				<div className="flex w-21 hover:-ml-1 transition-all duration-300">
					<IoIosArrowRoundBack className="w-8 h-8 text-white " />
					<p className="text-white mt-1.5 text-sm">Go Home</p>
				</div>
			</Link>
		</div>
	);
};
