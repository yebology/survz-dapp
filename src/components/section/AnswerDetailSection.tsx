import React, { useEffect } from "react";
import { AnswerDetailSectionProps } from "../../utils/interface";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { setGlobalState } from "../../utils/global";

export const AnswerDetailSection: React.FC<AnswerDetailSectionProps> = ({
  survey,
  answer,
}) => {
  const wallet = useAnchorWallet();

  useEffect(() => {
    const loading = !wallet;
    setGlobalState("loadingModalScale", loading ? "scale-100" : "scale-0");
  }, [wallet]);

  return (
    <div className="mb-10 w-full">
      <h1 className="font-bold text-3xl mb-10">Responses by {answer.user}</h1>
      {answer.answerList.map((ans, index) => (
        <div key={index} className="flex flex-col mb-4">
          <h1 className="text-xl mb-2">
            {survey.questionList[index] || "No question available"}
          </h1>
          <div className="mb-2 gradient-component">{ans}</div>
        </div>
      ))}
    </div>
  );
};
