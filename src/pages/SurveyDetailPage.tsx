import { useParams } from "react-router-dom";
import { SurveyHeroSection } from "../components/section/SurveyHeroSection";
import { useEffect, useState } from "react";
import { Survey } from "../utils/interface";
import { surveyList } from "../utils/list";
import { QuestionSection } from "../components/section/QuestionSection";

const defaultSurvey : Survey = {
  id: 0,
  title: "",
  description: "",
  image: "",
  creator: "",
  openTimestamp: 0,
  closeTimestamp: 0,
  currentParticipant: 0,
  targetParticipant: 0,
  totalReward: 0,
  rewardPerParticipant: 0,
  state: 2,
  questionList: []
}

export const SurveyDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<Survey>(defaultSurvey);

  useEffect(() => {
    if (id) {
      const surveyId = parseInt(id);
      const filtered = surveyList.find(
        (survey: Survey) => survey.id === surveyId
      );
      setData(filtered || defaultSurvey);
    }
  }, [id]);

  return (
    <>
      <SurveyHeroSection data={data} />
      <QuestionSection data={data} />
    </>
  );
};
