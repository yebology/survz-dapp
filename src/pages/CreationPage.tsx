import { useEffect, useState } from "react";
import { Survey } from "../utils/interface";
import { SearchBar } from "../components/bar/SearchBar";
import { SurveySection } from "../components/section/SurveySection";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { getCreationSurvey } from "../services/survey";
import { setGlobalState } from "../utils/global";

export const CreationPage = () => {
  const wallet = useAnchorWallet();

  const message = "Search my survey...";
  const type = "My Creation";
  const [query, setQuery] = useState("");
  const [filteredSurvey, setFilteredSurvey] = useState<Survey[]>([]);
  const [creationData, setCreationData] = useState<Survey[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const creationData = await getCreationSurvey(wallet);
        setCreationData(creationData);
      }
      catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    }
    fetchData()
  }, [wallet])

  useEffect(() => {
    if (creationData) {
      const filteredData = creationData.filter((survey : Survey) =>
        survey.title.toLocaleLowerCase().includes(query.toLowerCase())
      );
      setFilteredSurvey(filteredData);
    }
  }, [query, creationData]);

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
