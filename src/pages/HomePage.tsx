import { AdvantageSection } from "../components/section/AdvantageSection";
import { HomeHeroSection } from "../components/section/HomeHeroSection";
import { RecommendedSection } from "../components/section/RecommendedSection";

export const HomePage = () => {
  return (
    <> 
      <HomeHeroSection />
      <AdvantageSection />
      <RecommendedSection />
    </>
  );
};
