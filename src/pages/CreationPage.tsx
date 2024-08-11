import { useEffect, useState } from "react";
import { Survey } from "../utils/interface";
import { surveyList } from "../utils/list";
import { SearchBar } from "../components/bar/SearchBar";
import { SurveySection } from "../components/section/SurveySection";

export const CreationPage = () => {
  const message = "Search my survey...";
  const type = "My Creation";
  const [query, setQuery] = useState("");
  const [filteredSurvey, setFilteredSurvey] = useState<Survey[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (surveyList) {
      const filteredData = surveyList.filter((survey) =>
        survey.title.toLocaleLowerCase().includes(query.toLowerCase())
      );
      setFilteredSurvey(filteredData);
    }
  }, [query]);

  return (
    <div className="mt-32 mx-10">
      <SearchBar query={query} handleSearch={handleSearch} message={message} />
      <SurveySection data={filteredSurvey} type={type} />
    </div>
  );
};
