import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather, getForecast } from '@/api/requestList';
import { updateCurrentWeather, updateForecast } from '@/redux/actionCreators';
import * as selectors from '@/redux/selectors';
import { Outlet } from 'react-router-dom';
import { fetchWeather } from '@/redux/actionCreators';
import {
  fetchCurrentWeather,
  fetchForecast,
} from '@/redux/reducers/ActionCreators';
import { useAppDispatch } from '@/hooks/redux';
import FavoriteSection from '@/components/FavoriteSection/FavoriteSection';
import InfoSection from '@/components/InfoSection/InfoSection';
import Nav from '@/components/Nav';
import { Container } from '@mui/system';
import { Box, Card, Divider, Grid, Paper, styled } from '@mui/material';
import SearchForm from './search-form/search-form';
import { TabSection } from './tab-section';
import { FavoritesSection } from './favorites-section';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Weather() {
  const dispatch = useAppDispatch();
  const currentCity = useSelector(selectors.currentCity);

  useEffect(() => {
    dispatch(fetchCurrentWeather(currentCity));
    dispatch(fetchForecast(currentCity));
  }, [currentCity]);

  return (
    <>
      <Container maxWidth="md">
        <Paper elevation={5} color={'#fafafa'}>
          <Box sx={{ flexGrow: 1, p: 2, paddingBottom: 0 }} mt="40px">
            {/* <Card sx={{ minWidth: 275 }}> */}
            <Grid container spacing={2}>
              <Grid item xs={12} paddingRight="15px">
                <SearchForm />
              </Grid>
              <Grid item xs={6} sx={{ paddingRight: 2 }}>
                <TabSection />
              </Grid>
              <Divider
                orientation="vertical"
                flexItem
                style={{ marginRight: '-1px' }}
              />

              <Grid item xs={6}>
                <FavoritesSection />
              </Grid>
            </Grid>
            {/* </Card> */}
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export { Weather };
