import React from 'react';

const Grocery = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const link = event.target.link.value;
        const number = event.target.number.value;
        const text = event.target.text.value;
        const users = { link, number, text };

        fetch('http://localhost:5000/users', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(users),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        event.target.reset();

    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="" className='flex justify-center mt-14'>
                <input type="link" name='link' placeholder="Image Link" className="input input-bordered input-accent w-full max-w-xs" />

                <input type="number" name='number' placeholder="price" className="input input-bordered" />

                <textarea type="text" name='text' className="textarea textarea-accent" placeholder="Image Name"></textarea>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Submit</button>

            </form>


        </div>
    );
};

export default Grocery;