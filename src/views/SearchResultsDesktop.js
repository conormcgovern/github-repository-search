import React from 'react';
import { Grid } from '@mui/material';
import LanguageMenu from '../components/LanguageMenu';
import SortSelect from '../components/SortSelect';
import ResultsSummary from '../components/ResultsSummary';
import Results from '../components/Results';

function SearchResultsDesktop({ data, language, languages, sort }) {
  return (
    <>
      <Grid item xs={3}>
        <LanguageMenu languages={languages} selectedLanguage={language} />
      </Grid>
      <Grid container item xs={9}>
        <Grid item>
          <ResultsSummary data={data} />
        </Grid>
        <Grid item sx={{ marginLeft: 'auto' }}>
          <SortSelect label="Sort: " value={sort} />
        </Grid>
        <Grid item xs={12}>
          {data && <Results items={data.items} />}
        </Grid>
      </Grid>
    </>
  );
}

export default SearchResultsDesktop;
