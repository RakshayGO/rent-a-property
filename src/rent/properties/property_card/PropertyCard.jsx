import React from 'react';
import House from "../../../images/house.jpeg"
import Apartment from "../../../images/apartment.jpg"
import Loft from "../../../images/loft.jpg"
import Condominium from "../../../images/condo.jpg"
import './style.css';

var property_image = House;
const PropertyCard = ({ property: { Name, City, State, property_type, Bathrooms, Bedrooms, monthly_price } }) => {
    switch (property_type) {
        case 'Apartment':
            property_image = Apartment;
            break;
        case 'Loft':
            property_image = Loft;
            break;
        case 'Condominium':
            property_image = Condominium;
            break;
        default:
            property_image = House;
    }
    return (
        <div className="card">
            <div className='imgWrapper'>
                <img src={property_image} alt='' />
            </div>
            <div className='about'>
                <span class="material-symbols-outlined" id="like">
                    favorite
                </span>
                <div className="price">
                    <div className='price-value'>{monthly_price.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 })}</div>
                    <div className='per-month'>/month</div>
                </div>
                <div className='name'>{Name}</div>
                <div className='address'>
                    {`${City}, ${State}`}
                </div>
            </div>
            <div className='separator' />
            <div className='specs'>
                <div>
                    <span class="material-symbols-outlined">
                        bed
                    </span>
                    <div>{Bedrooms} Bedrooms</div>
                </div>
                <div>
                    <span class="material-symbols-outlined">
                        bathroom
                    </span>
                    <div>{Bathrooms} Bathrooms</div>
                </div>
            </div>
        </div>
    );
}

export default PropertyCard;