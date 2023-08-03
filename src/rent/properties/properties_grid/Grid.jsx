import React from 'react';
import PropertyCard from '../property_card/PropertyCard';
import './style.css';

const Grid = ({ properties }) => {

  return (
    <div>
      {properties?.length > 0 ? (
        <div className='properties-container'>
          {properties.map((property) => (
            <PropertyCard property={property} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h2>No Properties found</h2>
        </div>
      )}
    </div>
  );
}

export default Grid;