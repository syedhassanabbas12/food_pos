import React from "react";
import { useTranslation } from "react-i18next";
import { addItem } from "../../services/storage-service";
import APP_CONSTANTS from "../../constants/app-constants";
import "./styles.css";
import { testServer } from "../../services/auth";

function Login() {
  const { t: LOCALE } = useTranslation();

  const login = async (e) => {
    e.stopPropagation();
    const response = await testServer();
    console.log("response", response);
    if (response.data) {
      addItem(APP_CONSTANTS.ACCESS_TOKEN, "TEST_TOKEN");
      location.reload();
    }
  };

  return (
    <div>
      <div>{LOCALE("login")}</div>
      <button onClick={login}>{LOCALE("login")}</button>
    </div>
  );
}

export default Login;
