import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { currentWeather } from '@/redux/selectors';

function DetailsPanel() {
  const { city, temperature, feelsLike, weather, sunrise, sunset } =
    useSelector(currentWeather);

  return (
    <Box>
      <Typography variant="h3" gutterBottom component="h3" fontWeight="500">
        {city}
      </Typography>
      <Typography variant="h5" gutterBottom component="div" mt="30px">
        Temperature: {temperature}°
      </Typography>
      <Typography variant="h5" gutterBottom component="div" mt="15px">
        Feels like: {feelsLike}°
      </Typography>
      <Typography variant="h5" gutterBottom component="div" mt="15px">
        Weather: {weather}
      </Typography>
      <Typography variant="h5" gutterBottom component="div" mt="15px">
        Sunrise: {sunrise}
      </Typography>
      <Typography variant="h5" gutterBottom component="div" mt="15px">
        Sunset: {sunset}
      </Typography>
    </Box>
  );
}

export { DetailsPanel };
