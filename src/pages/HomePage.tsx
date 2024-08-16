import { useEffect } from "react";
import { AdvantageSection } from "../components/section/AdvantageSection";
import { HomeHeroSection } from "../components/section/HomeHeroSection";
import { RecommendedSection } from "../components/section/RecommendedSection";
import { getAllSurvey } from "../services/survey";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";

export const HomePage = () => {
  const wallet = useAnchorWallet();
  const { connected } = useWallet();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllSurvey(wallet);
      console.log("wallet" + wallet?.publicKey);
      console.log("connected" + connected);
      console.log(data)
    }
    fetchData();
  }, [wallet, connected])

  return (
    <> 
      <HomeHeroSection />
      <AdvantageSection />
      <RecommendedSection />
    </>
  );
};
