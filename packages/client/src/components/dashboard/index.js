import React from 'react';
import { useTranslation } from 'react-i18next';

function Dashboard() {
  const { t: LOCALE } = useTranslation();

  return (
    <div>
      <div>{LOCALE('dashboardComponent')}</div>
    </div>
  );
}

export default Dashboard;
