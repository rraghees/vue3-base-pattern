import { defineStore } from "pinia";

export interface State {
  isUserSettingsOpen: boolean;
  rolesList: string[];
  designationsList: string[];
  usersCount: number;
  error: any;
}

export const useState = defineStore({
  id: "UM.state",
  state: (): State => {
    return {
      isUserSettingsOpen: false,
      rolesList: [],
      designationsList: [],
      usersCount: 0,
      error: null,
    };
  },
});
