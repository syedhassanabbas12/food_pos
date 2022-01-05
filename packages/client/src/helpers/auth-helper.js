import APP_CONSTANTS from "../constants/app-constants";

export const isLoggedIn = () => {
  if (localStorage.getItem(APP_CONSTANTS.ACCESS_TOKEN)) {
    return true;
  }
  return false;
};
