import { useAnchorWallet } from "@solana/wallet-adapter-react";
import idl from "../idl/DeployedContract.json";
import { Connection, PublicKey } from "@solana/web3.js";

export const wallet = useAnchorWallet();
export const commitmentLevel = "confirmed";
export const endpoint = import.meta.env.VITE_ALCHEMY_API_KEY;
export const programId = import.meta.env.PROGRAM_ID;
export const connection = new Connection(endpoint, commitmentLevel);

export const survzProgramId = new PublicKey(idl.metadata.address);
export const survzProgramInterface = JSON.parse(JSON.stringify(idl));