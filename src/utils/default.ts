import { Answer, Survey } from "./interface";

export const defaultSurvey: Survey = {
  id: 0,
  title: "",
  description: "",
  image: "",
  creator: "",
  openTimestamp: 0,
  closeTimestamp: 0,
  currentParticipant: 0,
  targetParticipant: 0,
  totalReward: 0,
  rewardPerParticipant: 0,
  state: 2,
  questionList: [],
};

export const defaultAnswer: Answer = {
  id: 0,
  user: "",
  surveyId: 0,
  timestamp: 0,
  answerList: []
};
