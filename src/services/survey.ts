import { BN, Program, web3 } from "@project-serum/anchor";
import { survzProgramId, survzProgramInterface } from "../utils/constants";
import { SystemProgram } from "@solana/web3.js";
import { getProvider } from "../utils/helper";

export async function createSurvey(
    surveyTitle: string,
    surveyDescription: string,
    openTimestamp: number,
    closeTimestamp: number,
    targetParticipant: number,
    totalReward: number,
    questionList: string[]
) {
    const provider = await getProvider();
    if (!provider) {
        console.error("Provider isn't setup yet.")
        return null;
    }

    const user = provider.wallet;
    const program = new Program(survzProgramInterface, survzProgramId, provider);
    const systemProgramId = SystemProgram.programId;

    const convertedOpenTimestamp = new BN(openTimestamp);
    const convertedCloseTimestamp = new BN(closeTimestamp);

    const id = convertedCloseTimestamp.sub(convertedOpenTimestamp);
    const [surveyPda] = await web3.PublicKey.findProgramAddressSync(
        [Buffer.from("survey"), user.publicKey.toBuffer(), id.toBuffer()],
        program.programId
    )

    try {
        await program.methods
        .createSurvey(
            id,
            surveyTitle,
            surveyDescription,
            convertedOpenTimestamp,
            convertedCloseTimestamp,
            targetParticipant,
            totalReward,
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

export async function getAllSurvey() {
    return await loadSurvey();
}

async function loadSurvey() {
    try {
        const program = new Program(survzProgramInterface, survzProgramId);
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