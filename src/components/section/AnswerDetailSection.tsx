import React from "react";
import { AnswerDetailSectionProps } from "../../utils/interface";

export const AnswerDetailSection: React.FC<AnswerDetailSectionProps> = ({
  survey,
  answer,
}) => {
  return (
    <div className="mb-10 w-full">
      <h1 className="font-bold text-3xl mb-10">Responses by {answer.user}</h1>
      {answer.answerList.map((answer, index) => (
        <div className="flex flex-col mb-4">
          <h1 className="text-xl mb-2">{survey.questionList[index] || 'No question available'}</h1>
          <div className="mb-2 navbar-button">
            {answer}
          </div>
        </div>
      ))}
      <div className="flex items-center flex-col"></div>
    </div>
  );
};
