import React from 'react';
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  IconButton,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

function LanguageMenu({ languages, selectedLanguage }) {
  const location = useLocation();

  const getLinkDestination = (language) => {
    const searchParams = new URLSearchParams(location.search);
    if (language === selectedLanguage) {
      // clicking on the currently selected language should remove the filter
      searchParams.delete('language');
    } else {
      searchParams.set('language', language);
    }
    return `${location.pathname}?${searchParams}`;
  };

  return (
    <Paper elevation={0} sx={{ border: '1px solid #DDDDDD' }}>
      <List>
        <ListItem>
          <ListItemText primary="Languages"></ListItemText>
        </ListItem>
        <Divider />
        {languages.map((language) => (
          <LanguageMenuItem
            key={language}
            selected={language.toLowerCase() === selectedLanguage.toLowerCase()}
            text={language}
            linkTo={getLinkDestination(language)}
          />
        ))}
      </List>
    </Paper>
  );
}

function LanguageMenuItem({ selected, text, linkTo }) {
  return (
    <Link to={linkTo} style={{ textDecoration: 'none' }}>
      <ListItem key={text} selected={selected}>
        <Grid container alignItems="center">
          <Grid item>
            <ListItemText secondary={text}></ListItemText>
          </Grid>
          {selected && (
            <Grid item sx={{ marginLeft: 'auto' }}>
              <IconButton size="small">
                <CloseIcon fontSize="small" />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </ListItem>
    </Link>
  );
}

export default LanguageMenu;
