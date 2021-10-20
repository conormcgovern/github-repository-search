import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function ResultsSummary({ data }) {
  const formatCount = (count) => {
    return count.toLocaleString('en-US');
  };
  return (
    <Box>
      <Typography variant="h6">{`Results for "${data.query}"`}</Typography>
      <Typography gutterBottom={true} variant="subtitle1">{`(Showing ${
        data.items.length
      } of ${formatCount(data.total_count)} results)`}</Typography>
    </Box>
  );
}

export default ResultsSummary;
