import { Advantage, Navbar } from "./interface";
import decentralization from "../assets/decentralization.png";
import privacy from "../assets/privacy.png";
import incentives from "../assets/incentives.png";

export const navList: Navbar[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Survey",
    url: "/survey",
  },
  {
    title: "Creation",
    url: "/creation",
  },
  {
    title: "Responses",
    url: "/responses",
  },
];

export const advantageList: Advantage[] = [
  {
    image: decentralization,
    advantage: "Decentralization",
    description:
      "Survz leverages decentralized networks, ensuring data is verifiable on the blockchain and cannot be tampered with.",
  },
  {
    image: incentives,
    advantage: "Incentives",
    description:
      "Participants earn SOL rewards, boosting engagement and motivation.",
  },
  {
    image: privacy,
    advantage: "Privacy",
    description:
      "Survz allows users to maintain control over their personal data and decide how it is shared or used.",
  },
];
