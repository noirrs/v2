// expecting as username
export const usernames = {
  DISCORD: "noirrsw", // expecting username with discriminator tag
  GITHUB: "Noirrs",
  TWITTER: "Noirrsw",
  SPOTIFY: "Noir",
  LINKEDIN: "noirr",
  EMAIL: "hi@noir.land", // expecting as full email address
};

// expecting as id
export const IDs = {
  DISCORD: "922078187788308510",
  SPOTIFY: "oitziwwbyioezmtmfndiu3qqw",
};

// apps can change their url structure, so it's more clean to use this way

const accounts = {
  RESUME: "https://cdn.noir.land/resume",
  GITHUB: `https://github.com/${usernames.GITHUB}`,
  LINKEDIN: `https://www.linkedin.com/in/${usernames.LINKEDIN}/`,
  EMAIL: `mailto:${usernames.EMAIL}`,
};

export default accounts;
