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

  const { data } = useQuery(
    ['repos', query, sort, language],
    () => getRepos(query, sort, language),
    {
      enabled: !!query, // only fetch the data if there is a query
    }
  );

  const handleSearchSubmit = (searchTerm) => {
    urlSearchParams.set('q', searchTerm);
    history.push(`search?${urlSearchParams}`);
  };

  const handleSortSelect = (sortValue) => {
    urlSearchParams.set('sort', sortValue);
    history.push(`search?${urlSearchParams}`);
  };

  const handleLanguageSelect = (languageValue) => {
    urlSearchParams.set('language', languageValue);
    history.push(`search?${urlSearchParams}`);
  };

  return (
    <>
      <Grid item xs={12}>
        <SearchWidget value={query} handleSubmit={handleSearchSubmit} />
      </Grid>
      {isExtraSmallWidth && (
        <>
          <Grid item xs={12}>
            <ResultsHeader query={query} />
          </Grid>
          <Grid item container spacing={2} alignItems="center">
            <Grid item>
              <InputLabel sx={{ minWidth: '80px' }}>Language</InputLabel>
            </Grid>
            <Grid item flexGrow={1}>
              <LanguageSelect
                value={language}
                onChange={handleLanguageSelect}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={2} alignItems="center">
            <Grid item>
              <InputLabel sx={{ minWidth: '80px' }}>Sort</InputLabel>
            </Grid>
            <Grid item flexGrow={1}>
              <SortSelect value={sort} onChange={handleSortSelect} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {data && <Results items={data.items} />}
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
              <ResultsHeader query={query} />
            </Grid>
            <Grid item sx={{ marginLeft: 'auto' }}>
              <SortSelect
                label="Sort: "
                value={sort}
                onChange={handleSortSelect}
              />
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
