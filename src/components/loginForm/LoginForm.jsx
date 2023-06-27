// import { login } from "components/services/authApi";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
// import { useNavigate } from "react-router-dom";
import { getProfileThunk, loginThunk } from 'redux/auth/authThunks';

const theme = createTheme();

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    await dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(async res => {
        // navigate('/contacts')
        toast.success(`Welcome ${res.user.name}!!!`);
        return await dispatch(getProfileThunk(res.user));
      })
      .catch(error => {
        toast.error('Invalid email or password.');
        return error;
      });
  };

  const handleChange = ({ target: { value, name } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  return (
    //  <form autoComplete="off" onSubmit={handleSubmit}>
    //       <label>
    //         Email
    //         <input
    //           type="email"
    //             name="email"
    //             value={email}
    //             onChange={handleChange}
    //           placeholder="Enter email"
    //         />
    //       </label>
    //       <label>
    //         Password
    //         <input
    //           type="password"
    //             name="password"
    //             value={password}
    //             onChange={handleChange}
    //           placeholder="Enter password"
    //         />
    //       </label>
    //       <button type="submit" disabled={!email || !password}>
    //         Log In
    //       </button>
    //       <div></div>
    //       </form>

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Typography component="p" variant="h5">
            Log In
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!email || !password}
            >
              Log In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography color="inherit" align="center" component="p">
                  You don't have an account? Sign Up
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginForm;
