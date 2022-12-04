import React, { useEffect } from 'react';

const Offer = ({ offer, handleDelete, handleAddToData }) => {


    const { _id, link, number, text } = offer;

    return (

        <div onClick={() => handleDelete(offer._id)} className='gap-10'>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img className='w-60 h-44 rounded-xl' src={link} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{number}</h2>
                    <p>{text}</p>
                    <div className="card-actions">
                        <button onClick={handleAddToData} className="btn btn-outline btn-accent w-52">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;