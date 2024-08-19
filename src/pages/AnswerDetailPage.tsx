import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { defaultAnswer, defaultSurvey } from "../utils/default";
import { Answer, Survey } from "../utils/interface";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { getAllSurvey } from "../services/survey";
import { getAnswer } from "../services/answer";
import { setGlobalState } from "../utils/global";
import { truncate } from "../utils/helper";
import { toast } from "react-toastify";
import { FaRegCopy } from "react-icons/fa6";

export const AnswerDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const wallet = useAnchorWallet();
  const [loading, setLoading] = useState(true);
  const [answerData, setAnswerData] = useState<Answer>(defaultAnswer);
  const [surveyData, setSurveyData] = useState<Survey>(defaultSurvey);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const answerId = parseInt(id);
          const allAnswer = await getAnswer(wallet);
          const filteredAnswer = allAnswer.find(
            (answer: Answer) => answer.timestamp === answerId
          );
          if (filteredAnswer) {
            setAnswerData(filteredAnswer);
          }
        } 
        catch (error) {
          console.error("Error fetching answers:", error);
        }
      };
      fetchData();
    }
  }, [id, wallet]);

  useEffect(() => {
    if (answerData.surveyId) {
      const fetchData = async () => {
        try {
          const allSurvey = await getAllSurvey(wallet);
          const filteredSurvey = allSurvey.find(
            (survey: Survey) => survey.id === answerData.surveyId
          );
          if (filteredSurvey) {
            setSurveyData(filteredSurvey);
          }
        } 
        catch (error) {
          console.error("Error fetching surveys:", error);
        } 
        finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [answerData, wallet]);

  useEffect(() => {
    if (loading || !wallet) {
      setGlobalState("loadingModalScale", "scale-100");
    } else {
      setGlobalState("loadingModalScale", "scale-0");
    }
  }, [loading, wallet]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(answerData.user);
      toast.success("Successfully copied creator address.")
    }
    catch (error) {
      console.log(error)
      toast.error("Error copied creator address.")
    }
  }

  const onBack = async () => {
    navigate("/creation")
  }

  return (
    <div className="mt-32 mx-10">
      {loading ? (
        <div></div>
      ) : (
        <div className="mb-10 w-full">
          <div className="flex flex-row space-x-2">
            <h1 className="font-bold text-3xl mb-10">
              Responses by {truncate(answerData.user, 4, 4, 11) || ""}
            </h1>
            <FaRegCopy size={32} color="#542cac" onClick={onCopy} className="cursor-pointer"/>
          </div>
          {answerData.answerList.map((ans, index) => (
            <div key={index} className="flex flex-col mb-4">
              <h1 className="text-xl mb-2">
                {surveyData.questionList[index] || ""}
              </h1>
              <div className="mb-2 gradient-component p-4">{ans}</div>
            </div>
          ))}
          <div className="flex justify-end">
          <button onClick={onBack} className="gradient-component p-4 hover:scale-105 duration-200">
            Go to Previous
          </button>
          </div>
        </div>
      )}
    </div>
  );
  
};
