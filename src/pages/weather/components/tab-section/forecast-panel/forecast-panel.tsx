import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { currentCity } from '@/redux/selectors';
import { ForecastList } from './forecast-list';

function ForecastPanel() {
  const city = useSelector(currentCity);

  return (
    <Box sx={{}}>
      <Typography variant="h3" gutterBottom component="h3" fontWeight="500">
        {city}
      </Typography>
      <ForecastList />
    </Box>
  );
}

export { ForecastPanel };
