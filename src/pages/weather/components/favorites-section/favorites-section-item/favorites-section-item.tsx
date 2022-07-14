import React from 'react';
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
import { addCurrentCity } from '@/redux/actionCreators';
import { useDispatch } from 'react-redux';
import { favoritesSlice } from '@/redux/reducers';

function FavoritesSectionItem({ city }) {
  // const [secondary, setSecondary] = React.useState(false);
  const { toggleFavorites } = favoritesSlice.actions;
  const dispatch = useDispatch();

  const cityNameClickHandler = () => {
    dispatch(addCurrentCity(city));
  };

  const deleteFromFavorites = () => {
    dispatch(toggleFavorites(city));
  };

  return (
    <>
      {/* <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={deleteFromFavorites}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText
          primary={city}
          onClick={cityNameClickHandler}
          // secondary={secondary ? 'Secondary text' : null}
        />
      </ListItem> */}
    </>
  );
}

export { FavoritesSectionItem };
