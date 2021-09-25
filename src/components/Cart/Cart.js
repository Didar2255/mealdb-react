import React from 'react';

const Cart = (props) => {
    const { cart } = props
    let foodName = []
    for (const food of cart) {
        foodName.push(food)
    }
    return (
        <div className='border p-3 shadow'>
            <h2>Name : {foodName}</h2>

        </div>
    );
};

export default Cart;