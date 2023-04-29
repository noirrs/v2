export default function Toast() {
	if (window.localStorage.getItem("toast") === "false") return <> </>;

	let positionForPC = "top-5 right-5";
	let positionForMobile = "bottom-5 left-[50%] right-[50%] transform translate-x-[-50%]";

	let position = window.screen.width < 1024 ? positionForMobile : positionForPC;

	return (
		<div
			id="toast-top-right"
			className={`fixed flex items-center w-full max-w-xs p-4 text-white rounded-lg shadow ${position} bg-[#111] border-2 border-white z-20`}
			role="alert">
			<div className="text-sm font-normal leading-[1.40rem]">
				<div className="flex justify-end">
					<button
						className="cursor-pointer bg-red-900 text-white py-1.5 px-3 rounded-md -mr-2 -mt-2"
						onClick={() => {
							window.localStorage.setItem("toast", "false");
							document.getElementById("toast-top-right")?.remove();
						}}>
						X
					</button>
				</div>
				<div className="-mt-7">
					Click on the profile photo or press <span className="bg-white p-1 text-black rounded-md break-normal">MetaKey</span> +{" "}
					<span className="bg-white p-1 text-black rounded-md break-normal">K</span> for navigating between routes
				</div>
			</div>
		</div>
	);
}
