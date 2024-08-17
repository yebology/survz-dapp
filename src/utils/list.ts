import { Advantage, Answer, Navbar, Survey } from "./interface";
import decentralization from "../assets/decentralization.png";
import privacy from "../assets/privacy.png";
import incentives from "../assets/incentives.png";

export const navList: Navbar[] = [
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
    url: "/creation",
  },
  {
    title: "Responses",
    url: "/responses",
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
    description:
      "Survey on the latest trends in Web3 development, tools, and frameworks.",
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
      "What new Web3 trends excite you the most?",
    ],
  },
  {
    id: 2,
    title: "Crypto Adoption in 2024",
    description:
      "Understanding the adoption rate and usage of cryptocurrencies in different regions.",
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
      "What concerns do you have about cryptocurrencies?",
    ],
  },
  {
    id: 3,
    title: "Decentralized Finance (DeFi) Usage",
    description:
      "Survey on the popularity and usage of DeFi platforms among various demographics.",
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
      "How often do you participate in DeFi activities?",
    ],
  },
  {
    id: 4,
    title: "NFT Market Insights",
    description:
      "Collecting insights on the buying and selling behavior in the NFT market.",
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
      "What are your thoughts on the future of NFTs?",
    ],
  },
];

export const answerList: Answer[] = [
  {
    user: "user1",
    surveyId: 1,
    answerList: [
      "I prefer working from home.",
      "The interface is user-friendly.",
      "The product quality could be improved.",
      "I am satisfied with the customer service.",
      "I would recommend this to a friend.",
    ],
  },
  {
    user: "user2",
    surveyId: 1,
    answerList: [
      "The delivery was delayed.",
      "The pricing is reasonable.",
      "I like the variety of options available.",
      "The website is easy to navigate.",
      "I would buy this product again.",
    ],
  },
  {
    user: "user3",
    surveyId: 1,
    answerList: [
      "I found the tutorial helpful.",
      "The support team is responsive.",
      "The packaging was damaged.",
      "I enjoy using this product daily.",
      "The instructions were clear and concise.",
    ],
  },
  {
    user: "user4",
    surveyId: 1,
    answerList: [
      "The app crashes occasionally.",
      "I love the new features.",
      "The color scheme is appealing.",
      "I wish there were more payment options.",
      "The app is slow to load.",
    ],
  },
  {
    user: "user5",
    surveyId: 1,
    answerList: [
      "The survey was too long.",
      "The questions were relevant.",
      "The rewards are appealing.",
      "I would participate in future surveys.",
      "The survey was easy to complete.",
    ],
  },
];
