import React from 'react';
import { Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const options = [
  { value: 'javascript', display: 'JavaScript' },
  { value: 'typescript', display: 'TypeScript' },
  { value: 'html', display: 'HTML' },
  { value: 'css', display: 'CSS' },
  { value: 'java', display: 'Java' },
];

function LanguageMenu() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  searchParams.delete('language');

  return (
    <Paper elevation={0} sx={{ height: '100%', border: '1px solid #DDDDDD' }}>
      <List>
        <ListItem>
          <ListItemText primary="Languages"></ListItemText>
        </ListItem>
        <Divider />
        {options.map((option) => (
          <ListItem key={option.value}>
            <Link to={`search?${searchParams}&language=${option.value}`}>
              <ListItemText secondary={option.display}></ListItemText>
            </Link>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default LanguageMenu;
