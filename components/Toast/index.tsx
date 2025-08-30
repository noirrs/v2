import { FiZap } from "react-icons/fi";

export default function Toast() {
  if (window.localStorage.getItem("toast") === "false") return <></>;

  let positionForPC = "top-5 right-5";
  let positionForMobile = "left-1/2 bottom-8 transform -translate-x-1/2";
  let position = window.screen.width < 1024 ? positionForMobile : positionForPC;

  return (
    <div
      id="toast-top-right"
      className={`fixed flex items-center w-full max-w-xs p-4 text-white rounded-xl shadow-lg backdrop-blur-md bg-black/70 border border-indigo-500 ${position} z-30 animate-fade-in`}
      role="alert"
      style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
    >
      <FiZap className="w-6 h-6 text-indigo-400 mr-3 drop-shadow" />
      <div className="flex-1 text-sm font-medium spacegrotesk">
        <div className="flex justify-end">
          <button
            className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-2 rounded-full text-xs transition-all"
            aria-label="Close toast"
            onClick={() => {
              window.localStorage.setItem("toast", "false");
              document.getElementById("toast-top-right")?.remove();
            }}
          >
            ×
          </button>
        </div>
        <div className="-mt-6">
          Click the profile photo or press{" "}
          <span className="bg-indigo-500 text-white px-2 py-1 rounded-md mx-1">
            MetaKey
          </span>
          +{" "}
          <span className="bg-indigo-500 text-white px-2 py-1 rounded-md mx-1">
            K
          </span>{" "}
          to navigate between routes
        </div>
      </div>
    </div>
  );
}
