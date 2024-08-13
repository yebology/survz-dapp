import { useParams } from "react-router-dom";
import { SurveyHeroSection } from "../components/section/SurveyHeroSection";
import { useEffect, useState } from "react";
import { Survey } from "../utils/interface";
import { surveyList } from "../utils/list";
import { QuestionSection } from "../components/section/QuestionSection";
import { defaultSurvey } from "../utils/default";

export const SurveyDetailPage = () => {
  const { id } = useParams();
  const type = "survey";
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
      <SurveyHeroSection data={data} type={type}/>
      <QuestionSection data={data} />
    </>
  );
};
