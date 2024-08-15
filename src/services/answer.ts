import { BN, Program, web3 } from "@project-serum/anchor";
import { survzProgramId, survzProgramInterface } from "../utils/constants";
import { SystemProgram } from "@solana/web3.js";
import { getProvider } from "../utils/helper";

export async function fillSurvey(
    wallet: any,
    surveyId: number,
    answerList: string[]
) {
    const provider = await getProvider(wallet);
    if (!provider) {
        console.error("Provider isn't setup yet.");
        return null;
    }

    const user = provider.wallet;
    const program = new Program(survzProgramInterface, survzProgramId, provider);
    const systemProgramId = SystemProgram.programId;

    const id = new BN(surveyId);
    const [surveyPda] = await web3.PublicKey.findProgramAddressSync(
        [Buffer.from("survey"), user.publicKey.toBuffer(), id.toBuffer()],
        program.programId
    )
    const [answerPda] = await web3.PublicKey.findProgramAddressSync(
        [Buffer.from("answer"), user.publicKey.toBuffer(), id.toBuffer()],
        program.programId
    )

    try {
        await program.methods
        .fillSurvey(
            surveyId,
            answerList
        )
        .accounts({
            user: user.publicKey,
            answer: answerPda,
            survey: surveyPda,
            systemProgram: systemProgramId
        })
        .rpc()
    }
    catch(error) {
        console.error(error);
    }
}

export async function getAnswer(surveyId: bigint) {

}

async function loadAnswer(surveyId: bigint) {

}

function structuredAnswer(allANswer: any) {
    
}