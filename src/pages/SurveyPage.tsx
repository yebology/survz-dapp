import { useEffect, useState } from "react";
import { SearchBar } from "../components/bar/SearchBar";
import { SurveySection } from "../components/section/SurveySection";
import { Survey } from "../utils/interface";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { getAllSurvey } from "../services/survey";

export const SurveyPage = () => {
  const wallet = useAnchorWallet();

  const message = "Search survey...";
  const type = "All Survey";
  const [query, setQuery] = useState("");
  const [filteredSurvey, setFilteredSurvey] = useState<Survey[]>([]);
  const [surveyData, setSurveyData] = useState<Survey[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  console.log(wallet);

  useEffect(() => {
    const fetchData = async () => {
      const surveyData = await getAllSurvey(wallet);
      setSurveyData(surveyData);
      console.log(surveyData);
    };
    fetchData();
  }, [wallet]);

  useEffect(() => {
    if (surveyData) {
      const filteredData = surveyData.filter((survey : Survey) =>
        survey.title.toLocaleLowerCase().includes(query.toLowerCase())
      );
      setFilteredSurvey(filteredData);
    }
  }, [query, surveyData]);

  return (
    <div className="mt-32 mx-10">
      <SearchBar query={query} handleSearch={handleSearch} message={message} />
      <SurveySection data={filteredSurvey} type={type} />
    </div>
  );
};
