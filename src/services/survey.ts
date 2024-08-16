import { web3, Program } from "@project-serum/anchor";
import * as anchor from "@coral-xyz/anchor";
import { survzProgramId, survzProgramInterface } from "../utils/constants";
import { LAMPORTS_PER_SOL, SystemProgram } from "@solana/web3.js";
import { getProvider } from "../utils/helper";

export async function createSurvey(
    connected: any,
    wallet: any,
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
        console.error("Provider isn't available yet.")
        return null;
    }
    if (!connected) {
        console.error("Wallet is not connected.")
    }

    const user = provider.wallet;
    const program = new Program(survzProgramInterface, survzProgramId, provider);
    const systemProgramId = SystemProgram.programId;

    const convertedOpenTimestamp = new anchor.BN(openTimestamp);
    console.log("open " + openTimestamp);
    console.log("convert " + convertedOpenTimestamp);
    const convertedCloseTimestamp = new anchor.BN(closeTimestamp);
    console.log("close " + closeTimestamp);
    console.log("convert " + convertedCloseTimestamp);
    const convertedTargetParticipant = new anchor.BN(targetParticipant);
    console.log("target " + targetParticipant);
    console.log("convertedTargetParticipant")
    const convertedTotalReward = new anchor.BN(totalReward * LAMPORTS_PER_SOL);
    console.log("total reward " + totalReward);
    console.log("converted " + convertedTotalReward);

    const id = convertedCloseTimestamp.sub(convertedOpenTimestamp);
    const surveyId = id.toArrayLike(Buffer, "le", 8);
    const [surveyPda] = web3.PublicKey.findProgramAddressSync(
        [Buffer.from("survey"), user.publicKey.toBuffer(), surveyId],
        program.programId
    )
    console.log(surveyPda.toString());

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
            systemProgram: systemProgramId
        })
        .rpc()
    }
    catch (error) {
        console.error(error);
    }

}

export async function getAllSurvey(wallet : any) {
    return await loadSurvey(wallet);
}

async function loadSurvey(wallet : any) {
    try {
        const provider = getProvider(wallet)
        if (!provider) {
            console.log("Provider isn't setup yet.")
            return null;
        }
        const program = new Program(survzProgramInterface, survzProgramId, provider);
        const allSurvey = await program.account.survey.all();
        return structuredSurvey(allSurvey);
    }
    catch (error) {
        console.error(error);
        return null;
    }
} 

function structuredSurvey(allSurvey: any) {
    const surveyList = allSurvey.map((survey: any) => ({
        id: parseInt(survey.id),
        title: survey.title,
        description: survey.description,
        creator: survey.creator.toString(),
        openTimestamp: parseInt(survey.openTimestamp),
        closeTimestamp: parseInt(survey.closeTimestamp),
        currentParticipant: parseInt(survey.currentParticipant),
        targetParticipant: parseInt(survey.targetParticipant),
        totalReward: parseFloat(survey.totalReward),
        rewardPerParticipant: parseFloat(survey.rewardPerParticipant),
        state: parseInt(survey.state)
    }))
    return surveyList;
}