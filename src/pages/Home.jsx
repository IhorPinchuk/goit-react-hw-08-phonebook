import {
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';

const theme = createTheme();

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        sx={{
          minHeight: 'calc(100vh - 50px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: 48,
            textAlign: 'center',
          }}
          align="center"
          component="p"
        >
          Register or log In to view contacts!!!
        </Typography>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;
