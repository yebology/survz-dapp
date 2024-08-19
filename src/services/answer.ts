import { Program, web3 } from "@project-serum/anchor";
import { BN } from "@coral-xyz/anchor";
import { survzProgramId, survzProgramInterface } from "../utils/constants";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { getProvider } from "../utils/helper";
import { Buffer } from "buffer";
import { AnchorWallet } from "@solana/wallet-adapter-react";

export async function fillSurvey(
  wallet: any,
  surveyId: number,
  surveyCreator: string,
  answerList: string[]
) {
  const provider = getProvider(wallet);
  if (!provider) {
    console.error("Provider isn't setup yet.");
    return null;
  }

  const user = provider.wallet;
  const creator = new PublicKey(surveyCreator);
  const program = new Program(survzProgramInterface, survzProgramId, provider);
  const systemProgramId = SystemProgram.programId;

  const id = new BN(surveyId);
  const convertedId = id.toArrayLike(Buffer, "le", 8);
  const [surveyPda] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from("survey"), creator.toBuffer(), convertedId],
    program.programId
  );
  const [answerPda] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from("answer"), user.publicKey.toBuffer(), convertedId],
    program.programId
  );

  try {
    await program.methods
      .fillSurvey(id, answerList)
      .accounts({
        user: user.publicKey,
        answer: answerPda,
        survey: surveyPda,
        systemProgram: systemProgramId,
      })
      .rpc();
  } catch (error) {
    console.error(error);
  }
}

export async function getAnswer(wallet: AnchorWallet | undefined) {
  return await loadAnswer(wallet);
}

async function loadAnswer(wallet: AnchorWallet | undefined) {
  try {
    const provider = getProvider(wallet);
    if (!provider) {
      console.log("Provider isn't setup yet.");
      return null;
    }
    const program = new Program(
      survzProgramInterface,
      survzProgramId,
      provider
    );
    const allAnswer = await program.account.answer.all();
    return structuredAnswer(allAnswer);
  } catch (error) {
    console.log(error);
    return [];
  }
}

function structuredAnswer(allAnswer: any) {
  const answerList = allAnswer.map((answer: any) => ({
    user: answer.account.user.toString(),
    surveyId: answer.account.surveyId.toNumber(),
    timestamp: answer.account.timestamp.toNumber(),
    answerList: answer.account.answerList
  }));
  return answerList;
}
