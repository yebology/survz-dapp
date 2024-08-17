import React from "react";
import { SurveyHeroSectionProps } from "../../utils/interface";

export const SurveyHeroSection: React.FC<SurveyHeroSectionProps> = ({
  data,
  type
}) => {
  const currentTimestamp = Math.floor(new Date().getTime() / 1000);
  const timeCondition = currentTimestamp >= data.openTimestamp;

  const scrollToQuestion = () => {
    const element = document.getElementById("question");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative flex justify-center text-white items-center mb-8 mt-24">
      <div className="relative w-full h-full py-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/023/587/494/original/online-survey-concept-tiny-people-filling-survey-form-feedback-service-internet-surveying-questionnaire-customers-voting-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
        </div>

        <div className="relative w-full">
          <section className="flex md:flex-row flex-col sm:py-8 py-6">
            <div className="flex-1 flex flex-col xl:px-0 sm:px-16 px-8 items-center text-center">
              <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2">
                <p className="font-normal text-[18px] leading-[30.8px] ml-2">
                  <span className="">Welcome</span> to{" "}
                </p>
              </div>

              <div className="w-full flex flex-col items-center">
                <div className="w-full flex flex-col md:flex-row items-center justify-center">
                  <h1 className="mr-2 font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px]">
                    {data.title}
                  </h1>
                </div>
              </div>
              <p className="font-normal text-[18px] leading-[30.8px] max-w-[600px] my-5">
                {data.description}
              </p>
              {(timeCondition && type == "survey") && (
                <button
                  onClick={scrollToQuestion}
                  style={{ backgroundColor: "#542cac" }}
                  className="hover:scale-105 duration-200 uppercase p-4 rounded-xl shadow-md"
                >
                  fill survey
                </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
