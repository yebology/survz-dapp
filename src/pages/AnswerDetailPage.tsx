import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defaultAnswer, defaultSurvey } from "../utils/default";
import { Answer, Survey } from "../utils/interface";
import { answerList, surveyList } from "../utils/list";
import { AnswerDetailSection } from "../components/section/AnswerDetailSection";

export const AnswerDetailPage = () => {
  const { id } = useParams();
  const [answerData, setAnswerData] = useState<Answer>(defaultAnswer);
  const [surveyData, setSurveyData] = useState<Survey>(defaultSurvey);

  useEffect(() => {
    if (id) {
      const answerId = parseInt(id);
      const filteredAnswer = answerList.find(
        (answer: Answer) => answer.id === answerId
      );
      setAnswerData(filteredAnswer || defaultAnswer);

      const surveyId = answerData.surveyId;
      const filteredSurvey = surveyList.find(
        (survey: Survey) => survey.id === surveyId
      );
      setSurveyData(filteredSurvey || defaultSurvey);
    }
  }, [id]);

  return (
    <div className="mt-32 mx-10">
      <AnswerDetailSection survey={surveyData} answer={answerData} />
    </div>
  );
};
