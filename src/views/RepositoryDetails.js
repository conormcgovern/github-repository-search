import React from 'react';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import CodeIcon from '@mui/icons-material/Code';
import { useParams } from 'react-router';

const iconStyle = { verticalAlign: 'sub', marginRight: '.2rem' };

function RespositoryDetails() {
  const { ownerLogin, repoName } = useParams();
  console.log(ownerLogin, repoName);

  return (
    <Grid container item justifyContent="center">
      <Grid item xs={10} s={8}>
        <Card variant="outlined">
          <CardContent>
            <Grid container item sm={10} spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6">
                  tannerlinsley<span> </span>
                  <Box
                    component="span"
                    sx={{ display: 'inline-block', fontWeight: 'bold' }}
                  >
                    / react-query
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  ⚛️ Hooks for fetching, caching and updating asynchronous data
                  in React
                </Typography>
              </Grid>
              <Grid
                container
                item
                spacing={2}
                justifyContent="space-between"
                flexWrap="nowrap"
              >
                <Grid item>
                  <CodeIcon fontSize="small" sx={iconStyle} />
                  TypeScript
                </Grid>
                <Grid item>
                  <StarOutlineIcon fontSize="small" sx={iconStyle} />
                  23.2k
                </Grid>
                <Grid item>
                  <AltRouteIcon fontSize="small" sx={iconStyle} />
                  1.2k
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default RespositoryDetails;
