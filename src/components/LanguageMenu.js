import React from 'react';
import { Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function LanguageMenu({ languages }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  searchParams.delete('language');

  return (
    <Paper elevation={0} sx={{ border: '1px solid #DDDDDD' }}>
      <List>
        <ListItem>
          <ListItemText primary="Languages"></ListItemText>
        </ListItem>
        <Divider />
        {languages.map((language) => (
          <ListItem key={language}>
            <Link
              to={`search?${searchParams}&language=${language}`}
              style={{ textDecoration: 'none' }}
            >
              <ListItemText secondary={language}></ListItemText>
            </Link>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default LanguageMenu;
