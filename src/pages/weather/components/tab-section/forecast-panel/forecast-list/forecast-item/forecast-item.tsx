import React from 'react';
import { Paper, Grid, Typography, Box } from '@mui/material';
import { IMAGE_URL } from '@/weatherConfig';
import { IforecastItemProps } from '@/types';

function ForecastItem({ info }: IforecastItemProps) {
  const { date, time, temperature, feelsLike, status, icon } = info;

  return (
    <Paper elevation={1} sx={{ marginBottom: 3 }}>
      <Grid p={2}>
        <Grid item xs={12} display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h5" component="span">
            {date}
          </Typography>
          <Typography variant="h5" component="span">
            {time}
          </Typography>
        </Grid>
        <Grid item display="flex" justifyContent="space-between">
          <Box marginTop={1.8}>
            <Typography variant="h6" component="div">
              {`Temperature: ${temperature}°`}
            </Typography>
            <Typography variant="h6" component="div">
              {`Feels like: ${feelsLike}°`}
            </Typography>
          </Box>
          <Box>
            <img
              className="status__icon"
              src={`${IMAGE_URL + icon}.png`}
              alt="status icon"
              style={{ marginLeft: 'auto', display: 'block' }}
            />
            <Typography variant="h6" component="div" textAlign="right">
              {status}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export { ForecastItem };
