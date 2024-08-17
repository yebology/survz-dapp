import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/fixed/Navbar";
import { Footer } from "./components/fixed/Footer";
import { SurveyPage } from "./pages/SurveyPage";
import { CreationPage } from "./pages/CreationPage";
import { ResponsesPage } from "./pages/ResponsesPage";
import { SurveyDetailPage } from "./pages/SurveyDetailPage";
import { CreationDetailPage } from "./pages/CreationDetailPage";
import { AnswerDetailPage } from "./pages/AnswerDetailPage";
import { CreateNewSurveyModal } from "./components/modal/CreateNewSurveyModal";
import { ErrorCreateSurveyModal } from "./components/modal/ErrorCreateSurveyModal";
import { SuccessfullyCreateSurveyModal } from "./components/modal/SuccessfullyCreateSurveyModal";
import { ErrorFillSurveyModal } from "./components/modal/ErrorFillSurveyModal";
import { SuccessfullyFillSurveyModal } from "./components/modal/SuccessfullyFillSurveyModal";
import { MustConnectWalletModal } from "./components/modal/MustConnectWalletModal";
import { LoadingModal } from "./components/modal/LoadingModal";
import { ToastContainer } from "react-toastify";

function Content() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/creation" element={<CreationPage />} />
        <Route path="/responses" element={<ResponsesPage />} />
        <Route path="/survey/:id" element={<SurveyDetailPage />} />
        <Route path="/creation/:id" element={<CreationDetailPage />} />
        <Route path="/answer_detail/:id" element={<AnswerDetailPage />} />
      </Routes>
      <Footer />
      <MustConnectWalletModal />
      <LoadingModal />
      <CreateNewSurveyModal />
      <ErrorCreateSurveyModal />
      <ErrorFillSurveyModal />
      <SuccessfullyCreateSurveyModal />
      <SuccessfullyFillSurveyModal />
      <ToastContainer 
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
      />
    </div>
  );
}

export default Content;