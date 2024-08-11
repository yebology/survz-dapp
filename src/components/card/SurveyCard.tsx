import React from "react";
import { SurveyCardProps } from "../../utils/interface";
import { SiSolana } from "react-icons/si";
import { FaUserGroup } from "react-icons/fa6";
import { timestampToDateConverter } from "../../utils/helper";

export const SurveyCard: React.FC<SurveyCardProps> = ({ survey }) => {
  const currentTimestamp = Math.floor(new Date().getTime() / 1000);
  const condition =
    survey.state == 0 && currentTimestamp >= survey.openTimestamp;

  return (
    <div
      className={`rounded-lg hover:scale-105 duration-500 shadow-lg cursor-pointer survey-card mr-4 mb-4 mt-4 h-auto`}
    >
      <div className="relative">
        <img
          src={survey.image}
          alt={survey.title}
          className="rounded-xl h-48 w-full object-cover md:h-48 lg:h-48"
        />
        <div className="absolute top-0 p-2 left-0 flex space-x-1">
          <div
            className={`text-xs text-center font-semibold py-1 px-2 ${
              condition ? "bg-green-600" : "bg-red-600"
            } rounded-md mx-auto uppercase`}
          >
            <div>{condition ? "OPEN" : "CLOSED"}</div>
          </div>
        </div>
        <div className="absolute bottom-0 p-2 left-0 flex space-x-1">
          <div
            style={{ backgroundColor: "#8e44ad" }}
            className={`text-xs text-center font-semibold py-1 px-2 rounded-md mx-auto uppercase`}
          >
            <div className="flex items-center flex-row">
              <SiSolana className="mr-1" />
              <h5>{survey.rewardPerParticipant} SOL</h5>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 p-2 right-0 flex space-x-1">
          <div
            style={{ backgroundColor: "#a29bfe" }}
            className={`text-xs text-center font-semibold py-1 px-2 rounded-md mx-auto uppercase`}
          >
            <div className="flex items-center flex-row">
              <FaUserGroup className="mr-1" />
              <h5>{survey.currentParticipant}/{survey.targetParticipant}</h5>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="p-4">
          <h5 className="font-semibold line-clamp-1 mb-2">{survey.title}</h5>
          <div className="flex flex-row text-xs">
            <h5 className="font-semibold"> Start : </h5>
            <h5 className="font-normal ml-1">
              {timestampToDateConverter(survey.openTimestamp)}
            </h5>
          </div>
          <div className="mt-1 flex flex-row text-xs">
            <h5 className="font-semibold"> End : </h5>
            <h5 className="font-normal ml-1">
              {timestampToDateConverter(survey.closeTimestamp)}
            </h5>
          </div>
          <p className="font-normal text-xs line-clamp-2 text-n-3 my-2">
            {survey.description}
          </p>
        </div>
        <div className="flex justify-between items-center flex-wrap bg-gray-100 text-gray-500 font-semibold"></div>
      </div>
    </div>
  );
};
