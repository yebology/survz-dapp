import { useGlobalState } from "../../utils/global";
import loading from "../../assets/loading.gif";

export const LoadingModal = () => {
  const [modalScale] = useGlobalState("loadingModalScale");

  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform duration-300 ${modalScale} z-2`}
    >
      <div className="shadow-xl rounded-xl p-6">
        <div className="flex justify-center items-center mt-5">
          <img src={loading} alt="" className="size-48" />
        </div>
        <h1 className="mt-2 text-center font-extrabold text-2xl text-white">
          Loading...
        </h1>
      </div>
    </div>
  );
};
