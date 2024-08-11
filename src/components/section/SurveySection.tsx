import { surveyList } from "../../utils/list";
import { SurveyCard } from "../card/SurveyCard";

export const SurveySection = () => {
  return (
    <div className="mt-32 my-16 mx-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {surveyList.map((survey) => (
          <SurveyCard key={survey.id} survey={survey} />
        ))}
      </div>
    </div>
  );
};
