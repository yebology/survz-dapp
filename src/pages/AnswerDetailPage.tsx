import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defaultAnswer, defaultSurvey } from "../utils/default";
import { Answer, Survey } from "../utils/interface";
import { AnswerDetailSection } from "../components/section/AnswerDetailSection";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { getAllSurvey } from "../services/survey";
import { getAnswer } from "../services/answer";
import { setGlobalState } from "../utils/global";

export const AnswerDetailPage = () => {
  const { id } = useParams();
  const wallet = useAnchorWallet();
  const [loading, setLoading] = useState(true);
  const [answerData, setAnswerData] = useState<Answer>(defaultAnswer);
  const [surveyData, setSurveyData] = useState<Survey>(defaultSurvey);

  useEffect(() => {
    if (id) {
      const fetchData = async() => {
        const allAnswer = await getAnswer(wallet);
        const filteredAnswer = allAnswer.find((answer : Answer) => answer.timestamp === parseInt(id));
        setAnswerData(filteredAnswer);

        const allSurvey = await getAllSurvey(wallet);
        const filteredSurvey = allSurvey.find((survey : Survey) => survey.id === answerData.surveyId);
        setSurveyData(filteredSurvey);

        setLoading(false);
      } 
      fetchData();
    }
  }, [id, surveyData, answerData]);

  useEffect(() => {
    if (loading || !wallet) {
      setGlobalState("loadingModalScale", "scale-100");
    }
    else {
      setGlobalState("loadingModalScale", "scale-0");
    }
  }, [loading, wallet])

  return (
    <div className="mt-32 mx-10">
      <AnswerDetailSection survey={surveyData} answer={answerData} />
    </div>
  );
};
