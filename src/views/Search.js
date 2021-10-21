import React from 'react';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useQuery, useQueryClient } from 'react-query';
import { getRepos } from '../api/api';
import SearchWidget from '../components/SearchWidget';
import LinearProgressBar from '../components/LinearProgressBar';
import { useHistory, useLocation } from 'react-router';
import SearchResultsMobile from './SearchResultsMobile';
import SearchResultsDesktop from './SearchResultsDesktop';

function Search() {
  const theme = useTheme();
  const isExtraSmallWidth = useMediaQuery(theme.breakpoints.only('xs'));
  const queryClient = useQueryClient();
  const history = useHistory();
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const query = urlSearchParams.get('q') ?? '';
  const sort = urlSearchParams.get('sort') ?? '';
  const language = urlSearchParams.get('language') ?? '';

  const { data, isFetching, isPreviousData } = useQuery(
    ['repos', query, sort, language],
    () => getRepos(query, sort, language),
    {
      enabled: !!query, // only fetch the data if there is a query
      keepPreviousData: true,
      select: (data) => {
        return { query: query, ...data };
      },
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
      history.push('/');
    } else {
      urlSearchParams.delete('language');
      urlSearchParams.set('q', searchTerm);
      // forces a refetch on search submit
      queryClient.removeQueries(['repos', searchTerm]);
      history.push(`search?${urlSearchParams}`);
    }
  };

  return (
    <>
      <LinearProgressBar show={isFetching && isPreviousData} />
      <Grid item xs={12}>
        <SearchWidget value={query} handleSubmit={handleSearchSubmit} />
      </Grid>
      {data?.total_count === 0 && (
        <Grid item xs={12}>
          <Typography variant="h6">
            No results for &quot;{data.query}&quot;.
          </Typography>
        </Grid>
      )}
      {data?.total_count > 0 && isExtraSmallWidth && (
        <SearchResultsMobile
          data={data}
          language={language}
          languages={languages}
          sort={sort}
        />
      )}
      {data?.total_count > 0 && !isExtraSmallWidth && (
        <SearchResultsDesktop
          data={data}
          language={language}
          languages={languages}
          sort={sort}
        />
      )}
    </>
  );
}

export default Search;
