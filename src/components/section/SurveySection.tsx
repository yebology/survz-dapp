import React from "react";
import { SurveyCard } from "../card/SurveyCard";
import { SurveySectionProps } from "../../utils/interface";
import not_found from "../../assets/not_found.svg";
import { setGlobalState } from "../../utils/global";

export const SurveySection: React.FC<SurveySectionProps> = ({ data, type }) => {
  const onClick = () => {
    setGlobalState("createNewSurveyModalScale", "scale-100");
  };

  return (
    <div className="my-12">
      <div className="flex flex-row items-center space-x-4 mb-6">
        <h1 className="font-bold text-3xl">{type}</h1>
        {type == "My Creation" && (
          <button
            onClick={onClick}
            className="gradient-component p-4 hover:scale-105 duration-200"
          >
            Create New
          </button>
        )}
      </div>
      {data.length == 0 ? (
        <div className="w-full flex items-center flex-col">
          <img src={not_found} alt="Not Found" className="size-80" />
          <h1 className="text-n-1 font-bold text-3xl"> Data Not Found! </h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {data.map((survey) => (
            <SurveyCard survey={survey} type={type} />
          ))}
        </div>
      )}
    </div>
  );
};
