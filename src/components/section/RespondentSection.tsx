import React from "react";
import { RespondentSectionProps } from "../../utils/interface";
import { RespondentCard } from "../card/RespondentCard";
import not_found from "../../assets/not_found.svg";
import user from "../../assets/user.png";

export const RespondentSection: React.FC<RespondentSectionProps> = ({
  data,
  targetParticipant
}) => {
  return (
    <div className="my-12 mx-10">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl mb-6">All Respondent</h1>
        <div className="flex flex-row items-center space-x-1">
          <img src={user} alt="user" className="size-10" />
          <h1 className="font-semibold text-xl">{data.length}/{targetParticipant}</h1>
        </div>
      </div>
      {data.length != 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {data.map((respondent) => (
            <RespondentCard key={respondent.surveyId} answer={respondent} />
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
