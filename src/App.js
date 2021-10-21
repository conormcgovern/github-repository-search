import React, { useState } from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Grid,
  CssBaseline,
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
import ErrorBanner from './components/ErrorBanner';

function App() {
  const [error, setError] = useState();
  const [queryClient] = useState(
    new QueryClient({
      queryCache: new QueryCache({
        onError: (error) => {
          setError(error);
        },
      }),
      defaultOptions: {
        queries: {
          useErrorBoundary: (error) => error.response?.status >= 500,
          refetchOnWindowFocus: false,
        },
      },
    })
  );

  const handleErrorClose = () => {
    setError();
  };

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <GitHubIcon fontSize="large" sx={{ marginRight: '1rem' }} />
            <Typography variant="h6">Repository Search</Typography>
          </Toolbar>
        </AppBar>
        <ErrorBanner
          open={!!error}
          error={error}
          handleClose={handleErrorClose}
        />
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
