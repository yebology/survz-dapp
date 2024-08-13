import React from "react";
import { RespondentCardProps } from "../../utils/interface";
import { useNavigate } from "react-router-dom";
import user from "../../assets/user.png";
import { timestampToDateConverter } from "../../utils/helper";

export const RespondentCard: React.FC<RespondentCardProps> = ({ answer }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/answer_detail/` + answer.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`rounded-lg hover:scale-105 duration-500 shadow-lg cursor-pointer survey-card mr-4 mb-4 mt-4 h-auto`}
    >
      <div className="p-4">
        <div className="flex items-center justify-start">
          <img src={user} alt={answer.user} className="size-8 mr-1" />
          <p className="font-semibold text-md">{answer.user}</p>
        </div>
        <div>
          <p className="mt-2 text-sm">
            {`Succesfully filled survey on ${timestampToDateConverter(answer.timestamp)}`}
          </p>
        </div>
      </div>
    </div>
  );
};
