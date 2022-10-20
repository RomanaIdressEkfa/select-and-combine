import React, { useEffect } from 'react';

const Offer = ({ offer, handleDelete }) => {
    // useEffect(() => {
    //     console.log(handleDelete);
    // }, [])

    const { _id, link, number, text } = offer;
    // const { offer } = props
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
                        <button className="btn btn-outline btn-accent w-52">{_id}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;