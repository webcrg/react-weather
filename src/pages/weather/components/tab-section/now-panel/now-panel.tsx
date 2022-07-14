import React from 'react';
import { connect, useSelector } from 'react-redux';
// import HeartButton from '../HeartButton';
// import { IpageNowProps } from '../types';
import * as selectors from '@/redux/selectors';
import { Box, CardMedia, Grid, IconButton, Typography } from '@mui/material';

import { pink } from '@mui/material/colors';
import { HeartButton } from './heart-button';

function NowPanel({ isActive }) {
  const { temperature, icon, city } = useSelector(selectors.currentWeather);
  const activeClass = isActive ? 'pages__item-active' : '';
  console.log(city);

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            gutterBottom
            component="div"
            fontWeight={'500'}
          >
            {temperature + '°'}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CardMedia
            component="img"
            sx={{
              margin: 'auto',
              width: '200px',
              marginTop: '-50px',
            }}
            image={`https://openweathermap.org/img/wn/${icon ?? '03n'}@4x.png`}
            alt="green iguana"
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant="h4"
              component="div"
              fontWeight={'500'}
              mt={0.8}
            >
              {city}
            </Typography>
            <HeartButton />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NowPanel;
