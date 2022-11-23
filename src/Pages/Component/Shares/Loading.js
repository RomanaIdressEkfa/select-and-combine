import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='mx-auto'>
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loading;