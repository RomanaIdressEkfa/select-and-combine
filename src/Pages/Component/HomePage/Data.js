import React from 'react';

const Data = (props) => {
    const { image, price, name } = props.data;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{price}</h2>
                <p>{name}</p>
                <div className="card-actions">
                    <button className="btn btn-outline btn-accent w-52">Add</button>
                </div>
            </div>
        </div>
    );
};

export default Data;