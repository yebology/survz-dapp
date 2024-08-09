import { AnchorProvider } from "@coral-xyz/anchor";
import { commitmentLevel, connection } from "./constants";

export async function truncateAccount() {
    
}

export async function getProvider() { 
    if (!wallet) {
        console.error("Wallet not connected.");
        return null;
    }
    const provider = new AnchorProvider(connection, wallet, {
        preflightCommitment: commitmentLevel
    });
    return provider;
}