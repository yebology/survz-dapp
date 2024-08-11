import { Advantage, Navbar, Survey } from "./interface";
import decentralization from "../assets/decentralization.png";
import privacy from "../assets/privacy.png";
import incentives from "../assets/incentives.png";

export const navList : Navbar[] = [
  {
    id: 0,
    title: "Home",
    url: "/",
  },
  {
    id: 1,
    title: "Survey",
    url: "/survey",
  },
  {
    id: 2,
    title: "History",
    url: "/history",
  },
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
        openTimestamp: 1691356800, // Example timestamp
        closeTimestamp: 1694044800, // Example timestamp
        currentParticipant: 150,
        targetParticipant: 200,
        totalReward: 5, // Example reward in SOL
        rewardPerParticipant: 0.025,
        state: 1
    },
    {
        id: 2,
        title: "Crypto Adoption in 2024",
        image: "https://static.vecteezy.com/system/resources/previews/023/587/494/original/online-survey-concept-tiny-people-filling-survey-form-feedback-service-internet-surveying-questionnaire-customers-voting-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg",
        description: "Understanding the adoption rate and usage of cryptocurrencies in different regions.",
        creator: "Bob",
        openTimestamp: 1690953600, // Example timestamp
        closeTimestamp: 1693641600, // Example timestamp
        currentParticipant: 75,
        targetParticipant: 100,
        totalReward: 3,
        rewardPerParticipant: 0.03,
        state: 1
    },
    {
        id: 3,
        title: "Decentralized Finance (DeFi) Usage",
        image: "https://static.vecteezy.com/system/resources/previews/023/587/494/original/online-survey-concept-tiny-people-filling-survey-form-feedback-service-internet-surveying-questionnaire-customers-voting-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg",
        description: "Survey on the popularity and usage of DeFi platforms among various demographics.",
        creator: "Charlie",
        openTimestamp: 1692067200, // Example timestamp
        closeTimestamp: 1694755200, // Example timestamp
        currentParticipant: 50,
        targetParticipant: 50,
        totalReward: 2,
        rewardPerParticipant: 0.04,
        state: 0
    },
    {
        id: 4,
        title: "NFT Market Insights",
        image: "https://static.vecteezy.com/system/resources/previews/023/587/494/original/online-survey-concept-tiny-people-filling-survey-form-feedback-service-internet-surveying-questionnaire-customers-voting-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg",
        description: "Collecting insights on the buying and selling behavior in the NFT market.",
        creator: "Dave",
        openTimestamp: 1692576000, // Example timestamp
        closeTimestamp: 1695264000, // Example timestamp
        currentParticipant: 120,
        targetParticipant: 150,
        totalReward: 4.5,
        rewardPerParticipant: 0.03,
        state: 1
    }
];
