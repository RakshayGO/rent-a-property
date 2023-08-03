import React, { useState } from 'react';
import './style.css';
import View from './View';
import logo from '../images/logo.png'

const TopBar = () => {

    const [selectedView, setSelectedView] = useState('Rent');

    const handleViewClick = (id) => {
        setSelectedView(id);
        console.log(id);

    };

    return (
        <div className='container'>
            <div className='leftSection'>
                <div className='logo'>
                    <div className='logo-img'>
                        <img src={logo} alt='' />
                    </div>
                    <div>Rent a Property</div>
                </div>
                <div className='views'>
                    <View
                        id="Rent"
                        selected={selectedView === "Rent"}
                        onClick={handleViewClick}
                    />
                    <View
                        id="Buy"
                        selected={selectedView === "Buy"}
                        onClick={handleViewClick}
                    />
                    <View
                        id="Sell"
                        selected={selectedView === "Sell"}
                        onClick={handleViewClick}
                    />
                    <View
                        id="Contact"
                        selected={selectedView === "Contact"}
                        onClick={handleViewClick}
                    />
                </div>
            </div>
            <div className='buttons'>
                <button className='login-btn'>Login</button>
                <button className='signup-btn'>Sign up</button>
            </div>

        </div>
    )
}

export default TopBar