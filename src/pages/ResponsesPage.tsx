import { useEffect, useState } from "react";
import { Survey } from "../utils/interface";
import { SearchBar } from "../components/bar/SearchBar";
import { SurveySection } from "../components/section/SurveySection";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { setGlobalState } from "../utils/global";
import { getResponsesSurvey } from "../services/survey";

export const ResponsesPage = () => {
  const wallet = useAnchorWallet();

  const message = "Search history...";
  const type = "My Responses";
  const [query, setQuery] = useState("");
  const [responsesData, setResponsesData] = useState<Survey[]>([]);
  const [filteredSurvey, setFilteredSurvey] = useState<Survey[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const responsesData = await getResponsesSurvey(wallet);
      setResponsesData(responsesData);
    }
    fetchData();
  }, [wallet]);

  useEffect(() => {
    if (responsesData) {
      const filteredData = responsesData.filter((survey : Survey) =>
        survey.title.toLocaleLowerCase().includes(query.toLowerCase())
      );
      setFilteredSurvey(filteredData);
      setLoading(false);
    }
  }, [query, responsesData]);

  useEffect(() => {
    if (loading || !wallet) {
      setGlobalState("loadingModalScale", "scale-100");
    }
    else {
      setGlobalState("loadingModalScale", "scale-0");
    }
  }, [loading, wallet]);

  return (
    <div className="mt-32 mx-10">
      <SearchBar query={query} handleSearch={handleSearch} message={message} />
      <SurveySection data={filteredSurvey} type={type} />
    </div>
  );
};
