import { Typography, Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';

function RespositoryDetails() {
  const { ownerLogin, repoName } = useParams();
  return (
    <Grid item>
      <Typography>{`${ownerLogin}/${repoName}`}</Typography>
    </Grid>
  );
}

export default RespositoryDetails;
