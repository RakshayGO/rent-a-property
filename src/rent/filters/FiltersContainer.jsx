import React, { useState } from 'react'
import { Box, Slider, TextField } from '@mui/material';
import { Cities, DataArray, Types } from '../../data/Data'
import './style.css';
import Grid from '../properties/properties_grid/Grid';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { StyledAutocomplete } from '../../utils/UtilComponents';
import { MAX_PRICE, MIN_PRICE } from '../../utils/Constants';

const FiltersContainer = () => {
  const [properties, setProperties] = useState(DataArray.slice(0, 100));
  const [priceRange, setPriceRange] = React.useState([MIN_PRICE, MAX_PRICE]);
  const [city, setCity] = useState("Los Angeles");
  const [type, setType] = useState("All");

  const handlePriceChange = (event, newRange) => {
    setPriceRange(newRange);
  };

  const handleCityChange = (event, newCity) => {
    setCity(newCity);
  };

  const handleTypeChange = (event, newType) => {
    setType(newType);
  };

  const [date, setDate] = useState(new Date());

  const findProperties = () => {
    // filtering logic here
    var propertiesNew = DataArray;

    if (type !== 'All') {
      propertiesNew = DataArray.filter(
        (obj) => (
          obj.monthly_price >= priceRange[0] && obj.monthly_price <= priceRange[1] &&
          obj.City === city &&
          obj.property_type === type
        )
      );
    }

    else {
      propertiesNew = DataArray.filter(
        (obj) => (
          obj.monthly_price >= priceRange[0] && obj.monthly_price <= priceRange[1] &&
          obj.City === city
        )
      );
    }

    if (propertiesNew.length >= 100) {
      var slicedArray = propertiesNew.slice(0, 100);
      setProperties(slicedArray);
    } else {
      setProperties(propertiesNew);
    }

  }

  return (
    <div>
      <div className='filters-container'>
        <div className='filter'>
          <StyledAutocomplete
            options={Cities}
            renderInput={(params) => <TextField {...params} label='City' />}
            value={city}
            onChange={handleCityChange}
            sx={{ width: '14vw' }}
          />
        </div>
        <div className='filter' id='date_filter'>
          <div className='heading' id='date-header'>Select Date</div>
          <div className='dateWrapper'>
            <Datepicker
              selected={date}
              onChange={newDate => setDate(newDate)}
              dateFormat="MM-dd-yyyy" />
          </div>
        </div>
        <div className='filter' id='price_filter'>
          <div className='heading'>Price Range</div>
          <div className='value'>${priceRange[0]}-${priceRange[1]}</div>
          <Box sx={{ width: '12vw', height: 20 }}>
            <Slider
              getAriaLabel={() => 'Price range'}
              value={priceRange}
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={1000}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              sx={{ color: '#7f5eeb' }}
            />
          </Box>
        </div>
        <div className='filter' id='property_filter'>
          <StyledAutocomplete
            options={Types}
            renderInput={(params) => <TextField {...params} label='Property Type' />}
            value={type}
            onChange={handleTypeChange}
            sx={{ width: '12vw', heght: 50 }}
          />
        </div>
      </div>
      <button className='search-btn' onClick={findProperties}>Search</button>


      <Grid properties={properties} />
    </div>
  )
}

export default FiltersContainer