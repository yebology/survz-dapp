import React from "react";
import { RespondentCardProps } from "../../utils/interface";
import { useNavigate } from "react-router-dom";
import user from "../../assets/user.png";
import { timestampToDateConverter, truncate } from "../../utils/helper";

export const RespondentCard: React.FC<RespondentCardProps> = ({ answer }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/answer_detail/` + answer.timestamp);
  };

  return (
    <div
      onClick={handleClick}
      className={`rounded-lg hover:scale-105 duration-500 shadow-lg cursor-pointer gradient-component p-3 mr-4 mb-4 mt-4 h-auto`}
    >
      <div className="p-4">
        <div className="flex items-center justify-start">
          <img src={user} alt={answer.user} className="size-8 mr-1" />
          <p className="font-semibold text-md">{truncate(answer.user, 4, 4, 11)}</p>
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
