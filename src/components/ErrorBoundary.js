import { Typography, Grid } from '@mui/material';
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Grid container justifyContent="center">
          <Typography variant="h6">Something went wrong.</Typography>
        </Grid>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
