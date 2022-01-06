import React from 'react';
import { useTranslation } from 'react-i18next';
import { removeItem } from '../../services/storage-service';
import APP_CONSTANTS from '../../constants/app-constants';

function Dashboard() {
  const { t: LOCALE } = useTranslation();

  const logout = () => {
    removeItem(APP_CONSTANTS.ACCESS_TOKEN);

    location.reload();
  };

  return (
    <div>
      <div>{LOCALE('dashboardComponent')}</div>

      <button onClick={logout}>{LOCALE('logout')}</button>
    </div>
  );
}

export default Dashboard;
