import React, { useEffect, useState } from 'react';

const Restrurent = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div className='container my-4'>
            <div className="row">
                <div className="col-md-9">
                    I am from food
                </div>
                <div className="col-md-3">
                    I am from cart
                </div>
            </div>
        </div>
    );
};

export default Restrurent;