import { ThemeProvider } from '@emotion/react';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  createTheme,
} from '@mui/material';
import { register } from 'components/services/authApi';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    register({
      name,
      email,
      password,
    })
      .then(() => navigate('/login'))
      .catch(error => {
        toast.error(
          'Invalid email or password. The minimum password length must be 7 characters'
        );

        return error.response.data.message;
      });
  };

  const handleChange = ({ target: { value, name } }) => {
    name === 'email'
      ? setEmail(value)
      : name === 'password'
      ? setPassword(value)
      : setName(value);
    console.log('value :>> ', value);
    console.log('name :>> ', name);
  };

  return (
    // <form autoComplete="off" onSubmit={handleSubmit}>
    //   <label>
    //     Username
    //     <input
    //       type="text"
    //       name="name"
    //       value={name}
    //       onChange={handleChange}
    //       placeholder="Enter user name"
    //     />
    //   </label>
    //   <label>
    //     Email
    //     <input
    //       type="email"
    //       name="email"
    //       value={email}
    //       onChange={handleChange}
    //       placeholder="Enter email"
    //     />
    //   </label>
    //   <label>
    //     Password
    //     <input
    //       type="password"
    //       name="password"
    //       value={password}
    //       onChange={handleChange}
    //       placeholder="Enter password"
    //     />
    //   </label>
    //   <button type="submit" disabled={!name || !email || !password}>Sign Up</button>
    // </form>

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
            Sign up
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
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  label="Name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
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
              disabled={!name || !email || !password}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography color="inherit" align="center" component="p">
                  Already have an account? Log in
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegisterForm;
