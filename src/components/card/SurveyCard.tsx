import React from "react";
import { SurveyCardProps } from "../../utils/interface";
import { SiSolana } from "react-icons/si";
import { FaUserGroup } from "react-icons/fa6";
import { timestampToDateConverter, truncate } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import user from "../../assets/user.png";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { FaRegCopy } from "react-icons/fa";
import { toast } from "react-toastify";

export const SurveyCard: React.FC<SurveyCardProps> = ({ survey, type }) => {
  const navigate = useNavigate();
  const currentTimestamp = Math.floor(new Date().getTime() / 1000);
  const timeCondition = currentTimestamp >= survey.openTimestamp;
  const typeCondition = type != "My Responses";

  const handleClick = () => {
    switch (type) {
      case "My Creation":
        return navigate(`/creation/` + survey.id);
      case "All Survey":
        return navigate(`/survey/` + survey.id);
      default:
        return;
    }
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(survey.creator);
      toast.success("Successfully copied creator address.")
    }
    catch (error) {
      console.log(error)
      toast.error("Error copied creator address.")
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`rounded-lg hover:scale-105 duration-500 shadow-lg cursor-pointer gradient-component mr-4 mb-4 mt-4 h-auto`}
    >
      <div className="relative">
        <img
          src={`https://static.vecteezy.com/system/resources/previews/023/587/494/original/online-survey-concept-tiny-people-filling-survey-form-feedback-service-internet-surveying-questionnaire-customers-voting-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg`}
          alt={survey.title}
          className="rounded-xl h-48 w-full object-cover md:h-48 lg:h-48"
        />
        {typeCondition && (
          <div className="absolute top-0 p-2 left-0 flex space-x-1">
            <div
              className={`text-xs text-center font-semibold py-1 px-2 ${
                timeCondition ? "bg-green-600" : "bg-red-600"
              } rounded-md mx-auto uppercase`}
            >
              <div>{timeCondition ? "OPEN" : "CLOSED"}</div>
            </div>
          </div>
        )}
        <div className="absolute bottom-0 p-2 left-0 flex space-x-1">
          <div
            style={{ backgroundColor: "#542cac" }}
            className={`text-xs text-center font-semibold py-1 px-2 rounded-md mx-auto uppercase`}
          >
            <div className="flex items-center flex-row">
              <SiSolana className="mr-1" />
              <h5>{survey.rewardPerParticipant / LAMPORTS_PER_SOL} SOL</h5>
            </div>
          </div>
        </div>
        {typeCondition && (
          <div className="absolute bottom-0 p-2 right-0 flex space-x-1">
            <div
              style={{ backgroundColor: "#8575e0" }}
              className={`text-xs text-center font-semibold py-1 px-2 rounded-md mx-auto uppercase`}
            >
              <div className="flex items-center flex-row">
                <FaUserGroup className="mr-1" />
                <h5>
                  {survey.currentParticipant}/{survey.targetParticipant}
                </h5>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="p-4">
          <h5 className="font-semibold line-clamp-1 mb-2">{survey.title}</h5>
          <div>
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
          </div>
          {typeCondition && (
            <p className="font-normal text-xs line-clamp-2 text-n-3 my-2">
              {survey.description}
            </p>
          )}
          <div className="flex items-center justify-start mt-3 space-x-1">
            <img src={user} alt={survey.creator} className="size-6" />
            <p className="font-semibold text-sm">
              {truncate(survey.creator, 4, 4, 11)}
            </p>
            <FaRegCopy color="#542cac" onClick={onCopy}/>
          </div>
        </div>
      </div>
    </div>
  );
};
