import React from 'react';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import CodeIcon from '@mui/icons-material/Code';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { getRepo } from '../api/api';
import LinearProgressBar from '../components/LinearProgressBar';

const iconStyle = {
  verticalAlign: 'sub',
  marginRight: '.2rem',
};

function RespositoryDetails() {
  const { ownerLogin, repoName } = useParams();

  const { data, isFetching } = useQuery(
    ['repoDetails', ownerLogin, repoName],
    () => getRepo(ownerLogin, repoName)
  );

  const formatCount = (count) => {
    if (count >= 1000) {
      return Number.parseFloat(count / 1000).toPrecision(3) + 'k';
    }
    return count;
  };

  return (
    <Grid container item justifyContent="center">
      <LinearProgressBar show={isFetching} />
      {data && (
        <Grid item xs={11} s={8}>
          <Card variant="outlined">
            <CardContent>
              <Grid container item sm={10} spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6">
                    {ownerLogin}
                    <span> </span>
                    <Box
                      component="span"
                      sx={{ display: 'inline-block', fontWeight: 'bold' }}
                    >
                      / {repoName}
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" gutterBottom>
                    {data.description}
                  </Typography>
                </Grid>
                <Grid container item justifyContent="space-between">
                  <Grid item>
                    <Typography>
                      <CodeIcon fontSize="small" sx={iconStyle} />
                      {data.language}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>
                      <StarOutlineIcon fontSize="small" sx={iconStyle} />
                      {formatCount(data.stargazers_count)}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>
                      <AltRouteIcon fontSize="small" sx={iconStyle} />
                      {formatCount(data.forks_count)}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      )}
    </Grid>
  );
}

export default RespositoryDetails;
