import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defaultSurvey } from "../utils/default";
import { Answer, Survey } from "../utils/interface";
import { SurveyHeroSection } from "../components/section/SurveyHeroSection";
import { RespondentSection } from "../components/section/RespondentSection";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { setGlobalState } from "../utils/global";
import { getCreationSurvey } from "../services/survey";
import { getAnswer } from "../services/answer";

export const CreationDetailPage = () => {
  const { id } = useParams();
  const wallet = useAnchorWallet();

  const type = "creation";
  const [surveyDetail, setSurveyDetail] = useState<Survey>(defaultSurvey);
  const [answerData, setAnswerData] = useState<Answer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const surveyId = parseInt(id);
          const creationSurvey = await getCreationSurvey(wallet);
          const surveyDetail = creationSurvey.find((survey : Survey) => survey.id === surveyId);
          setSurveyDetail(surveyDetail);
        }
        catch (error) {
          console.log(error)
        }
       
      }
      fetchData();
    }
  }, [id, surveyDetail])

  useEffect(() => {
    if (surveyDetail) {
      const fetchData = async () => {
        try {
          const allAnswer = await getAnswer(wallet);
          const answerData = allAnswer.filter((answer : Answer) => answer.surveyId === surveyDetail.id);
          setAnswerData(answerData);
          setLoading(false);
        }
        catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }
  }, [surveyDetail])

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
      <SurveyHeroSection data={surveyDetail} type={type}/>
      <RespondentSection data={answerData} targetParticipant={surveyDetail.targetParticipant}/>
    </>
  );
};
