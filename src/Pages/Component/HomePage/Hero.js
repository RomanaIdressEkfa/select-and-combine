import React from 'react';
import background from './../../assets/images/grocery2.png'

const Hero = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const text = event.target.text.value;
        const user = { text };

        //fetch post
        fetch('http://localhost:5000/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
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
        <div className=''>
            <div className="hero min-h-screen" style={{ background: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="hero-overlay bg-opacity-5"></div>
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Groceries Delivered in 90 Minute</h1>
                        <p className="mb-5">Get your healthy foods & snacks delivered at your doorsteps all day everyday</p>

                        {/* form */}
                        <div className="form-control">
                            <div className="input-group">
                                <form onSubmit={handleSubmit} action="" className='input-group'>
                                    <input type="text" name='text' placeholder="Search your product from here" className="input input-accent" />
                                    <button className="btn btn-accent">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                        <h1 className='normal-case'>Search</h1>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;