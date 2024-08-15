import { setGlobalState, useGlobalState } from "../../utils/global";
import error from "../../assets/error.png";

export const ErrorCreateSurveyModal = () => {
  const [modalScale] = useGlobalState("errorCreateSurveyModalScale");

  const onClose = () => {
    setGlobalState("errorCreateSurveyModalScale", "scale-0");
  };

  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform duration-300 ${modalScale} z-2`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div className="flex justify-center items-center mt-5">
          <img src={error} alt="" className="size-48" />
        </div>
        <div className="mt-2">
          <h1 className="text-center font-extrabold text-2xl text-n-7">
            Oops..
          </h1>
          <h2 className="text-center font-semibold text-lg text-n-7">
            Failed to create survey!
          </h2>
          <h3 className="text-center font-normal text-md text-n-7">
            Please check your input and try again.
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
