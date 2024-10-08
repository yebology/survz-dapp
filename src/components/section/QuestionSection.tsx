import React, { useState } from "react";
import { QuestionSectionProps } from "../../utils/interface";
import { fillSurvey } from "../../services/answer";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { setGlobalState } from "../../utils/global";
import { useNavigate } from "react-router-dom";

export const QuestionSection: React.FC<QuestionSectionProps> = ({ data }) => {
  const wallet = useAnchorWallet();
  const navigate = useNavigate();

  const maxChars = 200;
  const placeholder = `Answer with maximum ${maxChars} characters`;

  const [firstAnswer, setFirstAnswer] = useState("");
  const [secondAnswer, setSecondAnswer] = useState("");
  const [thirdAnswer, setThirdAnswer] = useState("");
  const [fourthAnswer, setFourthAnswer] = useState("");
  const [fifthAnswer, setFifthAnswer] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    setAnswer: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const text = e.target.value;

    if (text.length <= maxChars) {
      setAnswer(text);
    }
  };

  const arrangeAnwer = () => {
    return [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, fifthAnswer];
  };

  const onSubmit = () => {
    const validate = checkInput();
    switch (validate) {
      case true:
        processInput();
        break;
      case false:
        setGlobalState("errorFillSurveyModalScale", "scale-100");
        break;
      default:
        break;
    }
  };

  const checkInput = () => {
    if (
      firstAnswer != "" &&
      secondAnswer != "" &&
      thirdAnswer != "" &&
      fourthAnswer != "" &&
      fifthAnswer != ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const processInput = async () => {
    try {
      if (!wallet) {
        setGlobalState("mustConnectWalletModalScale", "scale-100");
      }
      const answerList = arrangeAnwer();
      setGlobalState("loadingModalScale", "scale-100");
      await fillSurvey(
        wallet,
        data.id,
        data.creator,
        answerList
      );
      successScenario();
    } catch (error) {
      errorScenario();
      console.log(error);
    }
  };

  const successScenario = () => {
    setGlobalState("loadingModalScale", "scale-0");
    setGlobalState("successfullyFillSurveyModal", "scale-100");
    reset();
    navigate(`/survey`);
  };

  const errorScenario = () => {
    setGlobalState("loadingModalScale", "scale-0");
    setGlobalState("errorFillSurveyModalScale", "scale-100");
  };

  const reset = () => {
    setFirstAnswer("");
    setSecondAnswer("");
    setThirdAnswer("");
    setFourthAnswer("");
    setFifthAnswer("");
  };

  return (
    <div id="question" className="mt-8 mx-10 mb-16">
      <h1 className="font-bold text-3xl mb-10">
        Please fill this survey complete!
      </h1>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="col-span-2">
          <label className="font-semibold">{data.questionList[0]}</label>
          <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-200">
            <textarea
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-n-8 focus:outline-none focus:ring-0"
              placeholder={placeholder}
              onChange={(e) => handleInputChange(e, setFirstAnswer)}
              value={firstAnswer}
              required
            />
          </div>
        </div>
        <div className="col-span-2">
          <label className="font-semibold">{data.questionList[1]}</label>
          <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-200">
            <textarea
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-n-8 focus:outline-none focus:ring-0"
              placeholder={placeholder}
              onChange={(e) => handleInputChange(e, setSecondAnswer)}
              value={secondAnswer}
              required
            />
          </div>
        </div>
        <div className="col-span-2">
          <label className="font-semibold">{data.questionList[2]}</label>
          <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-200">
            <textarea
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-n-8 focus:outline-none focus:ring-0"
              placeholder={placeholder}
              onChange={(e) => handleInputChange(e, setThirdAnswer)}
              value={thirdAnswer}
              required
            />
          </div>
        </div>
        <div className="col-span-2">
          <label className="font-semibold">{data.questionList[3]}</label>
          <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-200">
            <textarea
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-n-8 focus:outline-none focus:ring-0"
              placeholder={placeholder}
              onChange={(e) => handleInputChange(e, setFourthAnswer)}
              value={fourthAnswer}
              required
            />
          </div>
        </div>
        <div className="col-span-2">
          <label className="font-semibold">{data.questionList[4]}</label>
          <div className="flex justify-between mt-4 items-center rounded-xl bg-gray-200">
            <textarea
              className="block w-full bg-transparent border-0 text-sm py-3 px-3 text-n-8 focus:outline-none focus:ring-0"
              placeholder={placeholder}
              onChange={(e) => handleInputChange(e, setFifthAnswer)}
              value={fifthAnswer}
              required
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={onSubmit}
          className="mt-6 text-white font-normal rounded-xl gradient-component p-4 transition-transform transform hover:shadow-lg hover:scale-105 transition:200"
        >
          Submit Response
        </button>
      </div>
    </div>
  );
};
