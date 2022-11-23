import React from 'react';

const Dashboard = () => {
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

        <form onSubmit={handleSubmit} className='-mt-14'>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control flex">
                                <label class="label">
                                    <span class="label-text">Image Link</span>
                                </label>
                                <input type="link" name='link' placeholder="Paste image link" class="input input-bordered" />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Price</span>
                                </label>
                                <input type="number" name='number' placeholder="Product price" class="input input-bordered" />
                                <label class="label">
                                    <span class="label-text">Image Name</span>
                                </label>
                                <input type="text" name='text' placeholder="Write Image Name" class="input input-bordered" />
                                <label class="label">
                                    <span class="label-text">Select Category</span>
                                </label>
                                <select class="select select-accent w-full max-w-xs">
                                    <option disabled selected>Fruits and Vegetables</option>
                                    <option>Fish and Meat</option>
                                    <option>Snacks</option>
                                    <option>Pet Care</option>
                                    <option>Home & Cleaning</option>
                                    <option>Dairy</option>
                                    <option>Cooking</option>
                                    <option>Breakfast</option>
                                    <option>Beverage</option>
                                    <option>Health & Beauty</option>
                                </select>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </form >

    );
};

export default Dashboard;