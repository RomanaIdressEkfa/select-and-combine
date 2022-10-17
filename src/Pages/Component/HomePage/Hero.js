import React from 'react';
import background from './../../assets/images/grocery.png'

const Hero = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{ background: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div class="hero-overlay bg-opacity-5"></div>
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Groceries Delivered in 90 Minute</h1>
                        <p class="mb-5">Get your healthy foods & snacks delivered at your doorsteps all day everyday</p>
                        <div class="form-control">
                            <div class="input-group">
                                <input type="text" placeholder="Search your product from here" class="input input-bordered" />
                                <button class="btn btn-accent">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    <h1>Search</h1>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;