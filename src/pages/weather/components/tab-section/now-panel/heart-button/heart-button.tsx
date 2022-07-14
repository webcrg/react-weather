import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { toggleFavoriteCity } from '@/redux/actionCreators';
import * as selectors from '@/redux/selectors';
import { favoritesSlice } from '@/redux/reducers';
import { IconButton } from '@mui/material';
import { pink } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function HeartButton() {
  const [heartStatus, setHeartStatus] = useState(false);
  const currentCity = useSelector(selectors.currentCity);
  const favorites = useSelector(selectors.favorites);
  const { toggleFavorites } = favoritesSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    setHeartStatus(favorites.includes(currentCity));
  }, [currentCity, favorites]);

  const clickHandler = () => {
    console.log(heartStatus);

    dispatch(toggleFavorites(currentCity));
  };

  return (
    <>
      <IconButton
        type="submit"
        sx={{ p: '10px' }}
        aria-label="search"
        onClick={clickHandler}
      >
        {heartStatus ? (
          <FavoriteIcon sx={{ color: pink[500] }} fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
      </IconButton>
    </>
  );
}

export { HeartButton };
