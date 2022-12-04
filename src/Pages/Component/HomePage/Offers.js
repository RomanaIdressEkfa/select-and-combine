import React, { useEffect, useState } from 'react';
import Offer from './Offer';

const Offers = () => {
    const [offers, setOffers] = useState([]);
    const [details, setDetails] = useState([]);
    // console.log(offers);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [offers]);
    const handleAddToData = (offer) => {
        // console.log(watch.name);
        console.log(offer);
        const newData = [...details, offer]
        setDetails(newData);
    }

    const handleDelete = _id => {
        const proceed = window.confirm("If you want to delete,Just Click Item")
        console.log(_id);
        if (proceed) {
            const url = `http://localhost:5000/users/${_id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = offers.filter(offer => offer._id !== _id);
                        setOffers(remaining);
                    }
                })
        }

    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>

            {
                offers.map(offer => <Offer offer={offer} handleDelete={handleDelete} handleAddToData={handleAddToData}></Offer>)
            }
        </div>
    );
};

export default Offers;