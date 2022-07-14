import React from 'react';
import { useSelector } from 'react-redux';
// import ForecastList from '../Forecast/ForecastList';
// import { IpageForecastProps } from '../types';
import { currentCity } from '@/redux/selectors';
import { Box, Typography } from '@mui/material';
import { ForecastList } from './forecast-list';

function ForecastPanel() {
  const city = useSelector(currentCity);

  return (
    <Box sx={{}}>
      <Typography variant="h3" gutterBottom component="h3" fontWeight={'500'}>
        {city}
      </Typography>
      <ForecastList />
    </Box>
    // <div>
    //   <div className="tab-forecast__title">{city}</div>
    //   {/* <ForecastList /> */}
    // </div>
  );
}

export { ForecastPanel };
