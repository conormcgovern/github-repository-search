import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function Results() {
  return (
    <List>
      <ListItem>
        <ListItemText primary="react-query"></ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText primary="react-awesome-query-builder"></ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText primary="react-media"></ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText primary="react-responsive"></ListItemText>
      </ListItem>
    </List>
  );
}

export default Results;
