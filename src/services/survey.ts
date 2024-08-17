import { web3, Program } from "@project-serum/anchor";
import { BN } from "@coral-xyz/anchor";
import { survzProgramId, survzProgramInterface } from "../utils/constants";
import { LAMPORTS_PER_SOL, SystemProgram } from "@solana/web3.js";
import { getProvider } from "../utils/helper";
import { Buffer } from 'buffer';
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { Survey } from "../utils/interface";

// create survey
export async function createSurvey(
  wallet: AnchorWallet | undefined,
  surveyTitle: string,
  surveyDescription: string,
  openTimestamp: number,
  closeTimestamp: number,
  targetParticipant: number,
  totalReward: number,
  questionList: string[]
) {
  const provider = getProvider(wallet);
  if (!provider) {
    console.error("Provider isn't available yet.");
    return null;
  }

  const user = provider.wallet;
  const program = new Program(survzProgramInterface, survzProgramId, provider);
  const systemProgramId = SystemProgram.programId;

  const convertedOpenTimestamp = new BN(openTimestamp);
  const convertedCloseTimestamp = new BN(closeTimestamp);
  const convertedTargetParticipant = new BN(targetParticipant);
  const convertedTotalReward = new BN(totalReward * LAMPORTS_PER_SOL);

  const id = new BN(new Date().getTime());
  const surveyId = id.toArrayLike(Buffer, 'le', 8);
  const [surveyPda] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from("survey"), user.publicKey.toBuffer(), surveyId],
    program.programId
  );
  console.log(surveyId);

  try {
    await program.methods
      .createSurvey(
        id,
        surveyTitle,
        surveyDescription,
        convertedOpenTimestamp,
        convertedCloseTimestamp,
        convertedTargetParticipant,
        convertedTotalReward,
        questionList
      )
      .accounts({
        survey: surveyPda,
        user: user.publicKey,
        systemProgram: systemProgramId,
      })
      .rpc();
      console.log(surveyPda.toString());

  } catch (error) {
    console.error(error);
  }
}

// all survey
export async function getAllSurvey(wallet: AnchorWallet | undefined) {
  return await loadAllSurvey(wallet);
}

async function loadAllSurvey(wallet: AnchorWallet | undefined) {
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
    const allSurvey = await program.account.survey.all();
    return structuredSurvey(allSurvey);
  } catch (error) {
    console.error(error);
    return null;
  }
}

// creation survey
export async function getCreationSurvey(wallet : AnchorWallet | undefined) {
  return await loadCreationSurvey(wallet);
}

async function loadCreationSurvey(wallet : AnchorWallet | undefined) {
  try {
    const allSurvey = await loadAllSurvey(wallet);
    const creationSurvey = allSurvey.filter((survey : Survey) => survey.creator == wallet?.publicKey.toString());
    return creationSurvey;
  }
  catch (error) {
    console.error(error);
    return null;
  }
}

function structuredSurvey(allSurvey: any) {
  const surveyList = allSurvey.map((survey: any) => ({
    id: survey.account.id.toNumber(),
    title: survey.account.title,
    description: survey.account.description,
    creator: survey.account.creator.toString(),
    openTimestamp: survey.account.openTimestamp.toNumber(),
    closeTimestamp: survey.account.closeTimestamp.toNumber(),
    currentParticipant: survey.account.currentParticipant.toNumber(),
    targetParticipant: survey.account.targetParticipant.toNumber(),
    totalReward: survey.account.totalReward.toNumber(),
    rewardPerParticipant: survey.account.rewardPerParticipant.toNumber(),
    questionList: survey.account.questionList,
    state: survey.account.state.open ? 0 : 1,
  }));
  return surveyList;
}
