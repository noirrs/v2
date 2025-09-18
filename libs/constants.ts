import { usernames } from "./accounts";

const constants = {
  domain: "noir.land",
  avatar: "/assets/pp.png",
  projectStatusColors: {
    developing: "#FFD700",
    beta: "#3B82F6",
    active: "#22C55E",
    inactive: "#6B7280",
    alpha: "#EF4444",
  },
  fetchReposEndpoint: `https://api.github.com/users/${usernames.GITHUB}/repos`,
  fetchProjectEndpoint: `https://raw.githubusercontent.com/${usernames.GITHUB}/${usernames.GITHUB}/master/data.json`,
  languageColorEndpoint:
    "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json",
};

export default constants;
