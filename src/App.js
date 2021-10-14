import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Grid,
  CssBaseline,
} from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RespositoryDetails from './views/RepositoryDetails';
import Search from './views/Search';

function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">GitHub Repository Search</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={2} sx={{ paddingTop: '2rem' }}>
          <Switch>
            <Route exact path="/">
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
    </Router>
  );
}

export default App;
