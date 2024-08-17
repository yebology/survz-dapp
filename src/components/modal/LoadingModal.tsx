import { useGlobalState } from "../../utils/global";
import loading from "../../assets/loading.mp4";

export const LoadingModal = () => {
  const [modalScale] = useGlobalState("loadingModalScale");

  return (
    <div
      className={`fixed font-poppins flex items-center justify-center w-screen h-screen inset-0 bg-black bg-opacity-50 transform transition-transform duration-300 ${modalScale} z-2`}
    >
      <div className="bg-white shadow-xl rounded-xl p-6">
        <div className="flex justify-center items-center">
          <video src={loading} autoPlay loop muted className="size-64"/>
        </div>
        <h1 className="text-center font-extrabold text-2xl text-n-7">
          Loading...
        </h1>
      </div>
    </div>
  );
};
