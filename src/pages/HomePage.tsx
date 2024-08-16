import { useEffect } from "react";
import { AdvantageSection } from "../components/section/AdvantageSection";
import { HomeHeroSection } from "../components/section/HomeHeroSection";
import { RecommendedSection } from "../components/section/RecommendedSection";
import { getAllSurvey } from "../services/survey";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";
import { AnchorProvider } from "@coral-xyz/anchor";
import { Program } from "@project-serum/anchor";
import { survzProgramId, survzProgramInterface } from "../utils/constants";
import { getProvider } from "../utils/helper";

export const HomePage = () => {
  const wallet = useAnchorWallet();
  const { connected } = useWallet();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // const data = await getAllSurvey(wallet);
  //     // console.log("wallet" + wallet?.publicKey);
  //     // console.log("connected" + connected);
  //     // console.log(data)
  //   }
  //   fetchData();
  // }, [wallet, connected])


  useEffect(() => {
    console.log(wallet);
    console.log(connected);
    if (!wallet) {
      console.log("Wallet isn't connected yet.");
      return;
    }

    const provider = getProvider(wallet);
    if (!provider) {
      return;
    }

    const program = new Program(
      survzProgramInterface,
      survzProgramId,
      provider
    );

    const fetch = async () => {
      try {
        const surveyPublicKey = new PublicKey("8uwRnbyve8EvaPEn1BdUttLCQxK2EGSatLNjZZzkvrtW");
        const data : any = await program.account.survey.fetch(surveyPublicKey);
        console.log("Fetched survey data:", data);
        console.log(data.title);
        if (data.title == "a") {
          console.log('b')
        }
        const data2 : any = await program.account.survey.all();
        console.log(data2);
      } catch (error) {
        console.error("Error fetching survey data:", error);
      }
    };
    fetch();
    // const fetchData = async () => {
    //   const data = await getAllSurvey(wallet)
    //   console.log(data)
    // }
    // fetchData();
  }, [wallet, connected])

  return (
    <> 
      <HomeHeroSection />
      <AdvantageSection />
      <RecommendedSection />
    </>
  );
};
