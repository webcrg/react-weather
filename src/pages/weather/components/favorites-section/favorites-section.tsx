import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ListItemButton,
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { currentWeatherSlice, favoritesSlice } from '@/redux/reducers';

import * as selectors from '@/redux/selectors';

function FavoritesSection() {
  const dispatch = useDispatch();
  const currentCity = useSelector(selectors.currentCity);
  const favorites: string[] = useSelector(selectors.favorites);
  const { toggleFavorites } = favoritesSlice.actions;
  const { setCurrentCity } = currentWeatherSlice.actions;

  const handleListItemClick = (city: string) => {
    dispatch(setCurrentCity(city));
  };

  const deleteFromFavorites = (city: string) => {
    dispatch(toggleFavorites(city));
  };

  if (!favorites) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 752, maxHeight: '100%' }}>
      <Typography sx={{ mt: 4, mb: 2, ml: 2 }} variant="h6" component="div">
        Added locations:
      </Typography>

      <List component="nav" aria-label="favorites list">
        {favorites.map((city) => (
          <ListItem
            key={city}
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
              onClick={() => handleListItemClick(city)}
            >
              <ListItemText primary={city} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export { FavoritesSection };
