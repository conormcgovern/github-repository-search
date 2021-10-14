import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Grid,
  InputLabel,
  useMediaQuery,
  CssBaseline,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchWidget from './components/SearchWidget';
import SortSelect from './components/SortSelect';
import LanguageSelect from './components/LanguageSelect';
import LanguageMenu from './components/LanguageMenu';
import Results from './components/Results';

function ResultsHeader() {
  return (
    <Typography variant="h6">Results for &quot;react query&quot;</Typography>
  );
}

function App() {
  const theme = useTheme();
  const isExtraSmallWidth = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">GitHub Repository Search</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={2} sx={{ paddingTop: '2rem' }}>
          <Grid item xs={12}>
            <SearchWidget />
          </Grid>
          {isExtraSmallWidth && (
            <>
              <Grid item xs={12}>
                <ResultsHeader />
              </Grid>
              <Grid item container spacing={2} alignItems="center">
                <Grid item>
                  <InputLabel sx={{ minWidth: '80px' }}>Language</InputLabel>
                </Grid>
                <Grid item flexGrow={1}>
                  <LanguageSelect />
                </Grid>
              </Grid>
              <Grid item container spacing={2} alignItems="center">
                <Grid item>
                  <InputLabel sx={{ minWidth: '80px' }}>Sort</InputLabel>
                </Grid>
                <Grid item flexGrow={1}>
                  <SortSelect />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Results />
              </Grid>
            </>
          )}
          {!isExtraSmallWidth && (
            <>
              <Grid item xs={3}>
                <LanguageMenu />
              </Grid>
              <Grid container item xs={9}>
                <Grid item>
                  <ResultsHeader />
                </Grid>
                <Grid item sx={{ marginLeft: 'auto' }}>
                  <SortSelect renderValue={(value) => `Sort: ${value}`} />
                </Grid>
                <Grid item xs={12}>
                  <Results />
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default App;
