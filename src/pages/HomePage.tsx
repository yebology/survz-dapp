import { useEffect, useState } from "react";
import { AdvantageSection } from "../components/section/AdvantageSection";
import { HomeHeroSection } from "../components/section/HomeHeroSection";
import { RecommendedSection } from "../components/section/RecommendedSection";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { getRecommendedSurvey } from "../services/survey";
import { Survey } from "../utils/interface";
import { setGlobalState } from "../utils/global";

export const HomePage = () => {
  const wallet = useAnchorWallet();

  const [recommendedData, setRecommendedData] = useState<Survey[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recommendedData = await getRecommendedSurvey(wallet);
        setRecommendedData(recommendedData);
      } 
      catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [wallet]);

  useEffect(() => {
    if (loading || !wallet) {
      setGlobalState("loadingModalScale", "scale-100");
    } 
    else {
      setGlobalState("loadingModalScale", "scale-0");
    }
  }, [loading, wallet]);

  return (
    <>
      <HomeHeroSection />
      <AdvantageSection />
      {recommendedData.length > 0 && <RecommendedSection data={recommendedData} />}
    </>
  );
};
