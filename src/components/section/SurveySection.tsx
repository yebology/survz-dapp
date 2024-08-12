import React from "react";
import { SurveyCard } from "../card/SurveyCard";
import { SurveySectionProps } from "../../utils/interface";
import not_found from "../../assets/not_found.svg";

export const SurveySection: React.FC<SurveySectionProps> = ({ data, type }) => {
  return (
    <div className="my-12">
      <h1 className="font-bold text-3xl mb-6">{type}</h1>
      {data.length != 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {data.map((survey) => (
            <SurveyCard key={survey.id} survey={survey} type={type} />
          ))}
        </div>
      ) : (
        <div className="w-full flex items-center flex-col">
          <img src={not_found} alt="Not Found" className="size-80" />
          <h1 className="text-n-1 font-bold text-3xl"> Data Not Found! </h1>
        </div>
      )}
    </div>
  );
};
