import { Advantage, Navbar, Survey } from "./interface";
import decentralization from "../assets/decentralization.png";
import privacy from "../assets/privacy.png";
import incentives from "../assets/incentives.png";

export const navList : Navbar[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Survey",
    url: "/survey",
  },
  {
    title: "Creation",
    url: "/creation"
  },
  {
    title: "Responses",
    url: "/responses"
  }
];

export const advantageList: Advantage[] = [
  {
    image: decentralization,
    advantage: "Decentralization",
    description:
      "Survz leverages decentralized networks, ensuring data is verifiable on the blockchain and cannot be tampered with.",
  },
  {
    image: incentives,
    advantage: "Incentives",
    description:
      "Participants earn SOL rewards, boosting engagement and motivation.",
  },
  {
    image: privacy,
    advantage: "Privacy",
    description:
      "Survz allows users to maintain control over their personal data and decide how it is shared or used.",
  },
];

export const surveyList: Survey[] = [
  {
      id: 1,
      title: "Web3 Development Trends",
      image: "https://static.vecteezy.com/system/resources/previews/023/587/494/original/online-survey-concept-tiny-people-filling-survey-form-feedback-service-internet-surveying-questionnaire-customers-voting-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg",
      description: "Survey on the latest trends in Web3 development, tools, and frameworks.",
      creator: "Alice",
      openTimestamp: 1691356800,
      closeTimestamp: 1694044800,
      currentParticipant: 150,
      targetParticipant: 200,
      totalReward: 5,
      rewardPerParticipant: 0.025,
      state: 1,
      questionList: [
          "Which Web3 development tool do you prefer?",
          "What challenges do you face in Web3 development?",
          "How often do you use smart contracts?",
          "Which blockchain platform do you use the most?",
          "What new Web3 trends excite you the most?"
      ]
  },
  {
      id: 2,
      title: "Crypto Adoption in 2024",
      image: "https://static.vecteezy.com/system/resources/previews/023/587/494/original/online-survey-concept-tiny-people-filling-survey-form-feedback-service-internet-surveying-questionnaire-customers-voting-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg",
      description: "Understanding the adoption rate and usage of cryptocurrencies in different regions.",
      creator: "Bob",
      openTimestamp: 1690953600,
      closeTimestamp: 1693641600,
      currentParticipant: 75,
      targetParticipant: 100,
      totalReward: 3,
      rewardPerParticipant: 0.03,
      state: 1,
      questionList: [
          "How often do you use cryptocurrencies?",
          "Which cryptocurrencies do you hold?",
          "What factors influence your crypto adoption?",
          "Do you believe crypto will become mainstream?",
          "What concerns do you have about cryptocurrencies?"
      ]
  },
  {
      id: 3,
      title: "Decentralized Finance (DeFi) Usage",
      image: "https://static.vecteezy.com/system/resources/previews/023/587/494/original/online-survey-concept-tiny-people-filling-survey-form-feedback-service-internet-surveying-questionnaire-customers-voting-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg",
      description: "Survey on the popularity and usage of DeFi platforms among various demographics.",
      creator: "Charlie",
      openTimestamp: 1692067200,
      closeTimestamp: 1694755200,
      currentParticipant: 50,
      targetParticipant: 50,
      totalReward: 2,
      rewardPerParticipant: 0.04,
      state: 0,
      questionList: [
          "How familiar are you with DeFi?",
          "Which DeFi platforms do you use?",
          "What attracts you to DeFi platforms?",
          "What risks do you associate with DeFi?",
          "How often do you participate in DeFi activities?"
      ]
  },
  {
      id: 4,
      title: "NFT Market Insights",
      image: "https://static.vecteezy.com/system/resources/previews/023/587/494/original/online-survey-concept-tiny-people-filling-survey-form-feedback-service-internet-surveying-questionnaire-customers-voting-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg",
      description: "Collecting insights on the buying and selling behavior in the NFT market.",
      creator: "Dave",
      openTimestamp: 1692576000,
      closeTimestamp: 1695264000,
      currentParticipant: 120,
      targetParticipant: 150,
      totalReward: 4.5,
      rewardPerParticipant: 0.03,
      state: 1,
      questionList: [
          "How often do you buy NFTs?",
          "What platforms do you use for NFT trading?",
          "What types of NFTs do you prefer?",
          "What do you consider when buying an NFT?",
          "What are your thoughts on the future of NFTs?"
      ]
  }
];

