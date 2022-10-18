import React from 'react';

const Product = (props) => {
    // const divStyles = {
    //     boxShadow: '1px 2px 9px #F4AAB9',
    //     margin: '20px',
    //     padding: '10px',
    // };
    const { picture } = props.product
    return (
        <div className=''>
            <img className='w-6/12 mx-auto' src={picture} alt="" />
        </div>

    );
};

export default Product;