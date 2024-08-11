import React from "react";
import { SurveyCard } from "../card/SurveyCard";
import { SurveySectionProps } from "../../utils/interface";

export const SurveySection : React.FC<SurveySectionProps> = ({ data, type }) => {
  return (
    <div className="my-12">
      <h1 className="font-bold text-3xl mb-6">{type}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {data.map((survey) => (
          <SurveyCard key={survey.id} survey={survey} type={type}/>
        ))}
      </div>
    </div>
  );
};
