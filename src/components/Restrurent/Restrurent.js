import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';

const Restrurent = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])
    // hendel click
    const [cart, setCart] = useState([])
    const hendelAddtoCart = (strMeal) => {
        setCart(strMeal)
    }
    return (
        <div className='container my-4'>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {foods.map(food => <Food
                            key={food.idMeal}
                            hendelAddtoCart={hendelAddtoCart}
                            food={food}
                        ></Food>)}
                    </div>
                </div>
                <div className="col-md-3">
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Restrurent;