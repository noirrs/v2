const keyListener = (e: any) => {
	if (e.key === "Escape") {
		// close modal
		(window.document.getElementById("modal-2") as any).checked = false;
	} else if (e.metaKey && e.key === "k") {
		window.document.body.style.backgroundColor = "none";
		window.document.body.style.background = "none";
		let dialog = window.document.getElementById("modal-2") as any;

		dialog.checked = !dialog.checked;
	}
};
export default function Setter(window: Window) {
	 if (window.screen.width < 1024) return;

	window.addEventListener("keydown", keyListener);

	return () => {
		window.removeEventListener("keydown", keyListener);
	};
}
