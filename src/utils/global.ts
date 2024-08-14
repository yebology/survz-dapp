import { createGlobalState } from "react-hooks-global-state";

export const { setGlobalState, useGlobalState } = createGlobalState({
  createNewSurveyModalScale: "scale-0",
  errorCreateSurveyModalScale: "scale-0",
  errorFillSurveyModalScale: "scale-0",
  loadingModalScale: "scale-0",
  mustConnectWalletModalScale: "scale-0",
  successfullyCreateSurveyModal: "scale-0",
  successfullyFillSurveyModal: "scale-0",
});
