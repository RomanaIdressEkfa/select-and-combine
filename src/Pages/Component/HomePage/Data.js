import React from 'react';

const Data = (props) => {
    const { image, price, name } = props.data;
    return (
        <div className='drop-shadow-xl rounded-2xl'>
            <img src={image} alt="" />
            <p>{price}</p>
            <p >{name}</p>
            <button class="btn btn-outline btn-accent w-full">Add</button>
        </div>
    );
};

export default Data;