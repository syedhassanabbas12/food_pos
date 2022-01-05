import React from "react";
import { useTranslation } from "react-i18next";
import { removeItem } from "../../services/storage-service";
import APP_CONSTANTS from "../../constants/app-constants";
import "./styles.css";

function Dashboard() {
  const { t } = useTranslation();

  const logout = () => {
    removeItem(APP_CONSTANTS.ACCESS_TOKEN);

    location.reload();
  };

  return (
    <div>
      <div>{t("dashboardComponent")}</div>

      <button onClick={logout}>{t("logout")}</button>
    </div>
  );
}

export default Dashboard;
