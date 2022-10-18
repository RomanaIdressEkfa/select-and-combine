import React, { useEffect, useState } from 'react';
import Data from './Data';

const Datas = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('data2.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [datas]);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 '>
            {
                datas.map(data => <Data data={data}></Data>)
            }
        </div>
    );
};

export default Datas;