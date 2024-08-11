import { advantageList } from "../../utils/list";

export const AdvantageSection = () => {
  return (
    <div className="my-36 xl:container m-auto px-6 md:px-12">
      <div>
        <h1 className="text-center font-bold text-4xl">Survz Advantages</h1>
        <div className="relative my-16 grid lg:grid-cols-3 gap-10 mx-auto w-full">
          <div className="absolute inset-0 my-auto w-full h-44 bg-gradient-to-r from-[#6a0572] via-[#8e44ad] to-[#a29bfe] blur-3xl opacity-40 dark:opacity-20"></div>
          {advantageList.map((advantage, index) => (
            <div
              key={index}
              className="cursor-pointer advantage-card transition-transform transition-shadow transform scale-100 hover:scale-105 hover:shadow-lg rounded-xl py-6 px-12 w-full flex flex-col justify-center items-center"
            >
              <div className="">
                <img className="size-20" src={advantage.image} alt="" />
              </div>
              <h3 className="font-bold my-3">{advantage.advantage}</h3>
              <p className="text-center font-light inline-block text-sm">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
