import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import constants from "../../libs/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Optionally use a GitHub token for higher rate limits
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const headers: any = {};
    if (GITHUB_TOKEN) {
      headers["Authorization"] = `token ${GITHUB_TOKEN}`;
    }
    // Fetch repos
    const repoFetch = await axios.get(constants.fetchReposEndpoint, {
      headers,
    });
    let repos = repoFetch.data;
    // Fetch language colors
    const colorFetch = await axios.get(constants.languageColorEndpoint);
    repos.map((repo: any) => {
      repo["color"] = colorFetch.data[repo.language]?.color || null;
    });
    repos = repos.filter((repo: any) => !repo.fork);
    res.status(200).json(repos);
  } catch (error: any) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}
