import React from 'react';
import { Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Copyright(props) {
  const { t: LOCALE } = useTranslation();

  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {LOCALE('copyright')}
      <Link color='inherit' href='https://www.folio3.com/'>
        {LOCALE('copyrightWebsiteName')}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;
