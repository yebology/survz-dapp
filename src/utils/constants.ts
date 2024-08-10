import idl from "../idl/DeployedContract.json";
import { Connection, PublicKey } from "@solana/web3.js";
import { Advantage } from "./interface";
import decentralization from "../assets/decentralization.png";
import privacy from "../assets/privacy.png";
import incentives from "../assets/incentives.png";

export const commitmentLevel = "confirmed";
export const endpoint = import.meta.env.VITE_ALCHEMY_API_KEY;
export const programId = import.meta.env.PROGRAM_ID;
export const connection = new Connection(endpoint, commitmentLevel);

export const survzProgramId = new PublicKey(idl.metadata.address);
export const survzProgramInterface = JSON.parse(JSON.stringify(idl));

export const navList = [
  {
    id: 0,
    title: "Home",
    url: "/",
  },
  {
    id: 1,
    title: "Survey",
    url: "/survey",
  },
  {
    id: 2,
    title: "History",
    url: "/history",
  },
];

export const advantageList : Advantage[] = [
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
