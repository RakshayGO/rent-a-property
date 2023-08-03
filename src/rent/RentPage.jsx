import React from 'react'
import SearchContainer from './search/SearchContainer'
import FiltersContainer from './filters/FiltersContainer'
import './style.css';

const RentPage = () => {
    return (
        <div className='viewPage' >
            <SearchContainer />
            <FiltersContainer />
        </div>
    )
}

export default RentPage