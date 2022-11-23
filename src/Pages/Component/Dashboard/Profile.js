import React from 'react';
import img from './../../assets/icons/20200920_225031.jpg'

const Profile = () => {
    return (
        <div className='items-center justify-center'>
            <div class="avatar -mt-52 ">
                <div class="w-36 rounded-full">
                    <img src={img} />

                </div>

            </div>
            <h1 className='text-5xl text-red-500'>Romana Idress Ekfa</h1>
        </div>
    );
};

export default Profile;