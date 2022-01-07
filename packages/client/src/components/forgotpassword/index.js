import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import HttpsIcon from '@mui/icons-material/Https';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Grid,
  Link,
  Typography,
  Container,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import { testServer } from '../../services/auth';
import Copyright from '../common/custom-component/copyright';

function Login() {
  const { t: LOCALE } = useTranslation();
  const theme = createTheme();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await testServer();
    console.log('response', response);
    if (response.data) {
      history.push('/login');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ p: 4, m: 3, bgcolor: 'secondary.main' }}>
            <HttpsIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            {LOCALE('passwordRecovery')}
          </Typography>
          <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label={LOCALE('emailAddress')}
              name='email'
              autoComplete='email'
              autoFocus
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              {LOCALE('sendEmail')}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='login' variant='body2'>
                  {LOCALE('rememberPasswordLogin')}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 6, mb: 2 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Login;
