import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const items = [
  { id: 207645083, full_name: 'tannerlinsley/react-query' },
  { id: 98418501, full_name: 'ukrbublik/react-awesome-query-builder' },
  { id: 64814946, full_name: 'ReactTraining/react-media' },
  { id: 22968365, full_name: 'contra/react-responsive' },
];

function Results() {
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
