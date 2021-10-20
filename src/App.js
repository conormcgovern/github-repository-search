import React, { useState } from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Grid,
  CssBaseline,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';
import RespositoryDetails from './views/RepositoryDetails';
import Search from './views/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [errorMessage, setErrorMessage] = useState('');

  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      useErrorBoundary: (error) => error.response?.status >= 500,
      onError: (error) => {
        if (error.response?.headers['x-ratelimit-remaining'] === '0') {
          setErrorMessage('GitHub API Rate limit exceeded.');
        } else {
          setErrorMessage('Something went wrong.');
        }
      },
      refetchOnWindowFocus: false,
    }),
  });

  const handleErrorClose = () => {
    setErrorMessage('');
  };

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Snackbar
          open={!!errorMessage}
          onClose={handleErrorClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity="error" onClose={handleErrorClose}>
            {errorMessage}
          </Alert>
        </Snackbar>
        <AppBar position="static">
          <Toolbar>
            <GitHubIcon fontSize="large" sx={{ marginRight: '1rem' }} />
            <Typography variant="h6">Repository Search</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Grid container spacing={2} sx={{ paddingTop: '2rem' }}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/search" />
              </Route>
              <Route path="/search">
                <ErrorBoundary>
                  <Search />
                </ErrorBoundary>
              </Route>
              <Route path="/:ownerLogin/:repoName">
                <ErrorBoundary>
                  <RespositoryDetails />
                </ErrorBoundary>
              </Route>
              <Route path="/">
                <Grid container item xs={12} justifyContent={'center'}>
                  <Typography variant="h5">Page not found 🙈 </Typography>
                </Grid>
              </Route>
            </Switch>
          </Grid>
        </Container>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
