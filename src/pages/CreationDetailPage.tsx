import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defaultSurvey } from "../utils/default";
import { Survey } from "../utils/interface";
import { answerList, surveyList } from "../utils/list";
import { SurveyHeroSection } from "../components/section/SurveyHeroSection";
import { RespondentSection } from "../components/section/RespondentSection";

export const CreationDetailPage = () => {
  const { id } = useParams();
  const type = "creation";
  const [surveyData, setSurveyData] = useState<Survey>(defaultSurvey);

  useEffect(() => {
    if (id) {
        const surveyId = parseInt(id);
        const filtered = surveyList.find((survey : Survey) => survey.id === surveyId);
        setSurveyData(filtered || defaultSurvey);
    }
  }, [id])

  return (
    <>
      <SurveyHeroSection data={surveyData} type={type}/>
      <RespondentSection data={answerList} targetParticipant={surveyData.targetParticipant}/>
    </>
  );
};
