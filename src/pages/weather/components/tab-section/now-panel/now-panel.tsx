import React from 'react';
import { useSelector } from 'react-redux';
import { Box, CardMedia, Grid, Typography } from '@mui/material';
import * as selectors from '@/redux/selectors';
import { HeartButton } from './heart-button';

function NowPanel() {
  const { temperature, icon, city } = useSelector(selectors.currentWeather);

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            gutterBottom
            component="div"
            fontWeight="500"
          >
            {`${temperature}°`}
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
            <Typography variant="h4" component="div" fontWeight="500" mt={0.8}>
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
