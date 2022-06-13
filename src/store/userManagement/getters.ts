import { defineStore } from "pinia";
import { computed } from "vue";
import { useState } from "./state";

export const useGetters = defineStore("UM.getters", () => {
  const state = useState();

  const isSettingsDialogOpen = computed(
    (): boolean => state.isUserSettingsOpen
  );
  const rolesList = computed((): string[] => {
    return state.rolesList;
  });

  const designationsList = computed((): string[] => state.designationsList);

  const count = computed((): number => state.usersCount);

  return {
    isSettingsDialogOpen,
    rolesList,
    designationsList,
    count,
  };
});
