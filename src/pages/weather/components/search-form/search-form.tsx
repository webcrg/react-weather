import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { firstCharAt } from '@/pages/weather/helpers';
import { currentWeatherSlice } from '@/redux/reducers';

function SearchForm() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const { setCurrentCity } = currentWeatherSlice.actions;

  const changeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const city = firstCharAt(value);
    dispatch(setCurrentCity(city));
    setValue('');
  };

  return (
    <div className="weather__search">
      <form action="" onSubmit={submitHandler}>
        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="search-city">Search city</InputLabel>
          <OutlinedInput
            id="search-city"
            onChange={changeHandler}
            value={value}
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  sx={{ p: '10px' }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Search city"
          />
        </FormControl>
      </form>
    </div>
  );
}

export default SearchForm;
