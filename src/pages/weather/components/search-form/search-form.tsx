import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCurrentCity } from '@/redux/actionCreators';
import { firstCharAt } from '@/helpers';
import {
  Paper,
  IconButton,
  InputBase,
  Divider,
  TextField,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchForm() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const changeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const city = firstCharAt(value);
    dispatch(addCurrentCity(city));
    setValue('');
  };

  return (
    <div className="weather__search">
      <form action="" onSubmit={submitHandler}>
        {/* <Paper
          sx={{
            p: '2px 15px',
            display: 'flex',
            alignItems: 'center',
          }}
        > */}
        {/* <InputLabel htmlFor="search-city">Search city</InputLabel>
        <OutlinedInput
          id="search-city"
          label="Search city"
          variant="outlined"
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        /> */}

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

        {/* <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search city"
            inputProps={{ 'aria-label': 'Search city' }}
            onChange={changeHandler}
            value={value}
          /> */}
        {/* <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton> */}
        {/* </Paper> */}
      </form>
    </div>
  );
}

export default SearchForm;
