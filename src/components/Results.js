import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

function Results({ items }) {
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id}>
          <Link to={`/${item.full_name}`}>
            <ListItemText primary={item.full_name}></ListItemText>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

export default Results;
