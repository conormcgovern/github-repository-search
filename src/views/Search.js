import React from 'react';
import { Grid, InputLabel, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useQuery } from 'react-query';
import { getRepos } from '../api/api';
import SearchWidget from '../components/SearchWidget';
import SortSelect from '../components/SortSelect';
import LanguageSelect from '../components/LanguageSelect';
import LanguageMenu from '../components/LanguageMenu';
import Results from '../components/Results';
import LinearProgressBar from '../components/LinearProgressBar';
import { useHistory, useLocation } from 'react-router';

function ResultsHeader({ query }) {
  return (
    query && <Typography variant="h6">{`Results for "${query}"`}</Typography>
  );
}

function Search() {
  const theme = useTheme();
  const isExtraSmallWidth = useMediaQuery(theme.breakpoints.only('xs'));

  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const query = urlSearchParams.get('q') || '';
  const sort = urlSearchParams.get('sort') || '';
  const language = urlSearchParams.get('language') || '';

  const history = useHistory();

  const { data, isFetching } = useQuery(
    ['repos', query, sort, language],
    () => getRepos(query, sort, language),
    {
      enabled: !!query, // only fetch the data if there is a query
      keepPreviousData: true,
      // ,
    }
  );

  // this query is used to build the set of languages for the filter
  const { data: unfilteredData } = useQuery(
    ['repos', query, sort],
    () => getRepos(query, sort),
    {
      enabled: !!query,
      keepPreviousData: true,
    }
  );

  const languages = [
    ...new Set(
      unfilteredData?.items
        .map((item) => item.language)
        .filter((item) => !!item)
    ),
  ];

  const handleSearchSubmit = (searchTerm) => {
    if (!searchTerm.trim()) {
      history.push('search');
    } else {
      urlSearchParams.delete('language');
      urlSearchParams.set('q', searchTerm);
      history.push(`search?${urlSearchParams}`);
    }
  };

  return (
    <>
      <LinearProgressBar show={isFetching} />

      <Grid item xs={12}>
        <SearchWidget value={query} handleSubmit={handleSearchSubmit} />
      </Grid>
      {query && data && isExtraSmallWidth && (
        <>
          <Grid item xs={12}>
            <ResultsHeader query={query} />
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
      )}
      {query && data && !isExtraSmallWidth && (
        <>
          <Grid item xs={3}>
            <LanguageMenu languages={languages} selectedLanguage={language} />
          </Grid>
          <Grid container item xs={9}>
            <Grid item>
              <ResultsHeader query={query} data={data} />
            </Grid>
            <Grid item sx={{ marginLeft: 'auto' }}>
              <SortSelect label="Sort: " value={sort} />
            </Grid>
            <Grid item xs={12}>
              {data && <Results items={data.items} />}
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}

export default Search;
