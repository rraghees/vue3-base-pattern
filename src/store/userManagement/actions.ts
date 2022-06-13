import { defineStore } from "pinia";
import { useState } from "./state";
export const useActions = defineStore("UM.actions", () => {
  const state = useState();
  function setUserSettingsDialogState(payload: boolean): void {
    state.isUserSettingsOpen = payload;
  }

  // Note you are free to define as many internal functions as you want.
  // You only expose the functions that are returned.
  return {
    setUserSettingsDialogState,
  };
});
