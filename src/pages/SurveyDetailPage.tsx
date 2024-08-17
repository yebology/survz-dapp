import { useParams } from "react-router-dom";
import { SurveyHeroSection } from "../components/section/SurveyHeroSection";
import { useEffect, useState } from "react";
import { Survey } from "../utils/interface";
import { QuestionSection } from "../components/section/QuestionSection";
import { defaultSurvey } from "../utils/default";
import { getAllSurvey } from "../services/survey";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { setGlobalState } from "../utils/global";

export const SurveyDetailPage = () => {
  const wallet = useAnchorWallet();

  const { id } = useParams();
  const type = "survey";
  const [data, setData] = useState<Survey>(defaultSurvey);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const surveyId = parseInt(id);
          const surveyData = await getAllSurvey(wallet);
          const surveyDetail = surveyData.find(
            (survey: Survey) => survey.id === surveyId
          );
          setData(surveyDetail);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [id, data]);

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
      <SurveyHeroSection data={data} type={type} />
      <QuestionSection data={data} />
    </>
  );
};
