import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";

import { useTranslation } from "react-i18next";
import { addItem } from "../../services/storage-service";
import APP_CONSTANTS from "../../constants/app-constants";
import { signin, testServer } from "../../services/auth";
import Copyright from "../common/custom-component/copyright";

function Login() {
  const { t: LOCALE } = useTranslation();
  const theme = createTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await signin({ email, password });
    const { data } = response.data;
    if (data) {
      addItem(APP_CONSTANTS.ACCESS_TOKEN, data?.token);
      addItem(APP_CONSTANTS.USER, JSON.stringify(data?.user));
      location.reload();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {LOCALE("signIn")}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={LOCALE("emailAddress")}
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onInput={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={LOCALE("password")}
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={LOCALE("rememberMe")}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {LOCALE("signIn")}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="forgotpassword" variant="body2">
                  {LOCALE("forgotPassword")}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Login;
