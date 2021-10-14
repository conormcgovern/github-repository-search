import React from 'react';
import { Paper, List, ListItem, ListItemText, Divider } from '@mui/material';

function LanguageMenu() {
  return (
    <Paper elevation={0} sx={{ height: '100%', border: '1px solid #DDDDDD' }}>
      <List>
        <ListItem>
          <ListItemText primary="Languages"></ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText secondary="JavaScript"></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText secondary="TypeScript"></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText secondary="HTML"></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText secondary="CSS"></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText secondary="Java"></ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
}

export default LanguageMenu;
