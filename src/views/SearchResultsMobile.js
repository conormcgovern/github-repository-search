import React from 'react';
import { Grid, InputLabel } from '@mui/material';
import LanguageSelect from '../components/LanguageSelect';
import SortSelect from '../components/SortSelect';
import ResultsSummary from '../components/ResultsSummary';
import Results from '../components/Results';

function SearchResultsMobile({ data, language, languages, sort }) {
  return (
    <>
      <Grid item xs={12}>
        <ResultsSummary data={data} />
      </Grid>
      <Grid item container spacing={2} alignItems="center">
        <Grid item>
          <InputLabel sx={{ minWidth: '80px' }}>Language</InputLabel>
        </Grid>
        <Grid item flexGrow={1}>
          <LanguageSelect value={language} languages={languages} />
        </Grid>
      </Grid>
      <Grid item container spacing={2} alignItems="center">
        <Grid item>
          <InputLabel sx={{ minWidth: '80px' }}>Sort</InputLabel>
        </Grid>
        <Grid item flexGrow={1}>
          <SortSelect value={sort} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {data && <Results items={data.items} />}
      </Grid>
    </>
  );
}

export default SearchResultsMobile;
