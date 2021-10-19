import React from 'react';
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
import { QueryClient, QueryClientProvider } from 'react-query';
import RespositoryDetails from './views/RepositoryDetails';
import Search from './views/Search';
import GitHubIcon from '@mui/icons-material/GitHub';

const queryClient = new QueryClient();

function App() {
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
        <Container>
          <Grid container spacing={2} sx={{ paddingTop: '2rem' }}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/search" />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/:ownerLogin/:repoName">
                <RespositoryDetails />
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
