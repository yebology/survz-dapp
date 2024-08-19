import { IoClose } from "react-icons/io5";
import { setGlobalState, useGlobalState } from "../../utils/global";
import React, { useState } from "react";
import { createSurvey } from "../../services/survey";
import { useAnchorWallet } from "@solana/wallet-adapter-react";

export const CreateNewSurveyModal = () => {
  const wallet = useAnchorWallet();

  const [modalScale] = useGlobalState("createNewSurveyModalScale");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [targetParticipant, setTargetParticipant] = useState("");
  const [totalReward, setTotalReward] = useState("");
  const [questionList, setQuestionList] = useState<string[]>(
    Array(5).fill("")
  );

  const now = new Date().getDate();

  const fieldStyle = `block w-full bg-transparent border-0 text-sm py-3 px-3 text-slate-500 focus:outline-none focus:ring-0`;

  const maxTitleChars = 60;
  const maxQuestionAndDescriptionChars = 160;
  const minTargetParticipant = 10;
  const minTotalReward = 1;

  const titleAndImagePlaceholder = `Maximum ${maxTitleChars} characters`;
  const questionAndDescriptionPlaceholder = `Maximum ${maxQuestionAndDescriptionChars} characters`;
  const targetParticipantPlaceholder = `Minimum ${minTargetParticipant} participants`;
  const totalRewardPlaceholder = `Minimum ${minTotalReward} SOL`;

  const onClose = () => {
    setGlobalState("createNewSurveyModalScale", "scale-0");
  };

  const reset = () => {
    setTitle("");
    setDescription("");
    setOpenTime("");
    setCloseTime("");
    setTargetParticipant("");
    setTotalReward("");
  };

  const handleTitleAndImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setAnswer: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const text = e.target.value;

    if (text.length <= maxTitleChars) {
      setAnswer(text);
    }
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    setAnswer: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const text = e.target.value;

    if (text.length <= maxQuestionAndDescriptionChars) {
      setAnswer(text);
    }
  };

  const handleQuestionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const text = e.target.value;

    if (text.length <= maxQuestionAndDescriptionChars) {
      const updatedQuestion = [...questionList];
      updatedQuestion[index] = text;
      setQuestionList(updatedQuestion);
    }
  };

  const onSubmit = async () => {
    setGlobalState("createNewSurveyModalScale", "scale-0");

    const openTimestamp = Math.floor(new Date(openTime).getTime() / 1000);
    const closeTimestamp = Math.floor(new Date(closeTime).getTime() / 1000);
    const targetParticipantNumber = parseInt(targetParticipant);
    const totalRewardNumber = parseFloat(totalReward);
    const allQuestionFilled = questionList.every(
      (question) => question.trim() !== ""
    );

    if (
      title != "" &&
      description != "" &&
      closeTimestamp >= openTimestamp &&
      targetParticipantNumber >= 10 &&
      totalRewardNumber >= 0.1 &&
      allQuestionFilled
    ) {
      try {
        setGlobalState("loadingModalScale", "scale-100");
        await createSurvey(
          wallet,
          title,
          description,
          openTimestamp,
          closeTimestamp,
          targetParticipantNumber,
          totalRewardNumber,
          questionList
        );
        successScenario();
      } 
      catch (error) {
        console.log(error);
        errorScenario();
      }
    } 
    else {
      setGlobalState("errorCreateSurveyModalScale", "scale-100");
    }
  };

  const successScenario = () => {
    setGlobalState("loadingModalScale", "scale-0");
    setGlobalState("successfullyCreateSurveyModal", "scale-100");
    reset();
    window.location.reload();
  };

  const errorScenario = () => {
    setGlobalState("loadingModalScale", "scale-0");
    setGlobalState("errorCreateSurveyModalScale", "scale-100");    
  };

  return (
    <div
      className={`fixed flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform duration-300 ${modalScale} z-2`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 max-h-[70vh] p-6 overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-n-8">Create Survey</p>
            <button
              type="button"
              className="border-0 bg-transparent focus:outline-none"
              onClick={onClose}
            >
              <IoClose color="black" size={24} />
            </button>
          </div>
          <div className="my-3">
            <label className="font-semibold text-n-7 text-sm">
              Survey Title
            </label>
            <div className="flex justify-between mt-2 items-center rounded-xl bg-gray-200">
              <input
                className={fieldStyle}
                type="text"
                placeholder={titleAndImagePlaceholder}
                onChange={(e) => handleTitleAndImageChange(e, setTitle)}
                value={title}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="col-span-1">
              <label className="font-semibold text-n-7 text-sm">
                Open Time
              </label>
              <div className="flex justify-between mt-2 items-center rounded-xl bg-gray-200">
                <input
                  className={fieldStyle}
                  type="datetime-local"
                  min={now}
                  onChange={(e) => setOpenTime(e.target.value)}
                  value={openTime}
                  required
                />
              </div>
            </div>
            <div className="col-span-1">
              <label className="font-semibold text-sm text-n-7">
                Close Time
              </label>
              <div className="flex justify-between mt-2 items-center rounded-xl bg-gray-200">
                <input
                  className={fieldStyle}
                  min={openTime}
                  type="datetime-local"
                  onChange={(e) => setCloseTime(e.target.value)}
                  value={closeTime}
                  required
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="col-span-1">
              <label className="font-semibold text-n-7 text-sm">
                Target Participant
              </label>
              <div className="flex justify-between mt-2 items-center rounded-xl bg-gray-200">
                <input
                  className={fieldStyle}
                  type="number"
                  placeholder={targetParticipantPlaceholder}
                  onChange={(e) => setTargetParticipant(e.target.value)}
                  value={targetParticipant}
                  required
                />
              </div>
            </div>
            <div className="col-span-1">
              <label className="font-semibold text-sm text-n-7">
                Total Reward
              </label>
              <div className="flex justify-between mt-2 items-center rounded-xl bg-gray-200">
                <input
                  className={fieldStyle}
                  type="number"
                  min={0.1}
                  step={0.1}
                  placeholder={totalRewardPlaceholder}
                  onChange={(e) => setTotalReward(e.target.value)}
                  value={totalReward}
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="font-semibold text-sm text-n-7">
              Short Description
            </label>
            <div className="flex justify-between mt-2 items-center rounded-xl bg-gray-200">
              <textarea
                className={fieldStyle}
                placeholder={questionAndDescriptionPlaceholder}
                onChange={(e) => handleDescriptionChange(e, setDescription)}
                value={description}
                required
              />
            </div>
          </div>
          {Array.from({ length: 5 }, (_, index: number) => (
            <div key={index} className="mb-3">
              <label className="font-semibold text-sm text-n-7">
                Question {index + 1}
              </label>
              <div className="flex justify-between mt-2 items-center rounded-xl bg-gray-200">
                <input
                  className={fieldStyle}
                  type="text"
                  placeholder={questionAndDescriptionPlaceholder}
                  onChange={(e) => handleQuestionChange(e, index)}
                  value={questionList[index]}
                  required
                />
              </div>
            </div>
          ))}

          <button
            onClick={onSubmit}
            style={{
              backgroundColor: "#542cac",
            }}
            className="inline-block px-6 py-2.5 mt-5 text-white font-medium rounded-lg hover:scale-105 duration-200 shadow-md"
          >
            Create Survey
          </button>
        </div>
      </div>
    </div>
  );
};
