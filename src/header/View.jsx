import React from 'react'
import './style.css';

const View = ({ id, selected, onClick }) => {
    const handleClick = () => {
        onClick(id);
    };

    return (
        <div
            className={`view ${selected ? 'selected' : ''}`}
            onClick={handleClick}
        >
            {id}
        </div>
    );
};

export default View