import survey from "../../assets/survey.svg";

export const HomeHeroSection = () => {
  return (
    <div className="mt-24 pt-32 md:py-12 xl:container m-auto px-6 md:px-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"
      ></div>
      <div className="relative lg:flex lg:items-center lg:gap-36">
        <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
          <h1 className="text-n-1 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl">
            Turn Question into SOL :{" "}
            <span
              style={{
                background: "linear-gradient(45deg, #6a0572, #8e44ad, #a29bfe)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Create,
            </span>
            <span
              style={{
                background: "linear-gradient(45deg, #6a0572, #8e44ad, #a29bfe)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}
              Share,{" "}
            </span>
            <span
              style={{
                background: "linear-gradient(45deg, #6a0572, #8e44ad, #a29bfe)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}
              Reward.{" "}
            </span>
          </h1>
          <p className="mt-8 text-n-2 dark:text-gray-300 text-md">
            With Survz, complete 5 surveys and earn SOL rewards. Share your
            insights and get rewarded easily. Start today and see how your
            contributions turn into valuable rewards.
          </p>
        </div>
        <div className="overflow-hidden hidden w-full xl:flex lg:w-7/12 xl:w-6/12">
          <img src={survey} alt="survey" />
        </div>
      </div>
    </div>
  );
};
