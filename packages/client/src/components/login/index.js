import React from "react";
import { useTranslation } from "react-i18next";
import { addItem } from "../../services/storage-service";
import { ACCESS_TOKEN } from "../../constants/app-constants";
import "./styles.css";

function Login() {
  const { t } = useTranslation();

  const login = () => {
    addItem(ACCESS_TOKEN, "TEST_TOKEN");

    location.reload();
  };

  return (
    <div>
      <div>{t("login")}</div>

      <button onClick={login}>{t("login")}</button>
    </div>
  );
}

export default Login;
