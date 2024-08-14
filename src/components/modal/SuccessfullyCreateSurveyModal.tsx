import { setGlobalState, useGlobalState } from "../../utils/global";
import checked from "../../assets/checked.png";

export const SuccessfullyCreateSurveyModal = () => {
  const [modalScale] = useGlobalState("successfullyCreateSurveyModal");

  const onClose = () => {
    setGlobalState("successfullyCreateSurveyModal", "scale-0");
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
            Woohoo!
          </h1>
          <h2 className="text-center font-semibold text-lg text-n-7">
            Your survey is live!
          </h2>
          <h3 className="text-center font-normal text-md text-n-7">
            Share it with your community and start collecting responses.
          </h3>
        </div>
        <button
          onClick={onClose}
          style={{
            backgroundColor: "#8e44ad",
          }}
          className="inline-block w-full px-6 py-2.5 mt-5 text-white font-medium rounded-lg hover:scale-105 duration-200 shadow-md"
        >
          Close Popup
        </button>
      </div>
    </div>
  );
};
