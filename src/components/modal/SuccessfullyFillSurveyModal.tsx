import { setGlobalState, useGlobalState } from "../../utils/global";
import checked from "../../assets/checked.png";

export const SuccessfullyFillSurveyModal = () => {
  const [modalScale] = useGlobalState("successfullyFillSurveyModal");

  const onClose = () => {
    setGlobalState("successfullyFillSurveyModal", "scale-0");
  };

  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform duration-300 ${modalScale} z-2`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div className="flex justify-center items-center mt-5">
          <img src={checked} alt="" className="size-48" />
        </div>
        <div className="mt-2">
          <h1 className="text-center font-extrabold text-2xl text-n-7">
            Awesome!
          </h1>
          <h2 className="text-center font-semibold text-lg text-n-7">
            Thanks for your input!
          </h2>
          <h3 className="text-center font-normal text-md text-n-7">
            Your response is recorded. Check your balance – it should be
            updated!
          </h3>
        </div>
        <button
          onClick={onClose}
          style={{
            backgroundColor: "#542cac",
          }}
          className="inline-block w-full px-6 py-2.5 mt-5 text-white font-medium rounded-lg hover:scale-105 duration-200 shadow-md"
        >
          Close Popup
        </button>
      </div>
    </div>
  );
};
