import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Box, Divider, Grid, Paper } from '@mui/material';
import * as selectors from '@/redux/selectors';
import {
  fetchCurrentWeather,
  fetchForecast,
} from '@/redux/reducers/ActionCreators';
import { useAppDispatch } from '@/hooks/redux';
import SearchForm from './search-form/search-form';
import { TabSection } from './tab-section';
import { FavoritesSection } from './favorites-section';

function Weather() {
  const dispatch = useAppDispatch();
  const currentCity = useSelector(selectors.currentCity);

  useEffect(() => {
    dispatch(fetchCurrentWeather(currentCity));
    dispatch(fetchForecast(currentCity));
  }, [currentCity, dispatch]);

  return (
    <Container maxWidth="md">
      <Paper elevation={5} color="#fafafa">
        <Box sx={{ flexGrow: 1, p: 2, paddingBottom: 0 }} mt="40px">
          <Grid container spacing={2}>
            <Grid item xs={12} paddingRight="15px">
              <SearchForm />
            </Grid>
            <Grid item xs={12} md={6} sx={{ paddingRight: 2 }}>
              <TabSection />
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              style={{ marginRight: '-1px' }}
            />
            <Grid item xs={12} md={6}>
              <FavoritesSection />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export { Weather };
