import idl from "../idl/DeployedContract.json";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const commitmentLevel = "confirmed";
export const endpoint = clusterApiUrl("devnet");
export const programId = import.meta.env.PROGRAM_ID;
export const connection = new Connection(endpoint, commitmentLevel);

export const survzProgramId = new PublicKey(idl.metadata.address);
export const survzProgramInterface = JSON.parse(JSON.stringify(idl));
