import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { FavoritesSectionItem } from './favorites-section-item';
import { addCurrentCity } from '@/redux/actionCreators';
import { favoritesSlice } from '@/redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '@/redux/selectors';
import { ListItemButton, Divider } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

function FavoritesSection() {
  const dispatch = useDispatch();
  const currentCity = useSelector(selectors.currentCity);
  const favorites: string[] = useSelector(selectors.favorites);
  const { toggleFavorites } = favoritesSlice.actions;

  if (!favorites) {
    return null;
  }

  const handleListItemClick = (city: string) => {
    dispatch(addCurrentCity(city));
  };

  const deleteFromFavorites = (city: string) => {
    dispatch(toggleFavorites(city));
  };

  return (
    <Box sx={{ maxWidth: 752, maxHeight: '100%' }}>
      <Typography sx={{ mt: 4, mb: 2, ml: 2 }} variant="h6" component="div">
        Added locations:
      </Typography>

      <List component="nav" aria-label="main mailbox folders">
        {favorites.map((city, index) => (
          <>
            <ListItem
              disablePadding
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteFromFavorites(city)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemButton
                selected={currentCity === city}
                onClick={(e) => handleListItemClick(city)}
              >
                <ListItemText primary={city} />
              </ListItemButton>
            </ListItem>
          </>
        ))}
      </List>

      {/* <List sx={{ maxHeight: '350px', overflow: 'auto' }}>
        {favorites.map((city) => (
          <FavoritesSectionItem key={city} city={city} />
        ))}
      </List> */}
    </Box>
  );
}

export { FavoritesSection };
