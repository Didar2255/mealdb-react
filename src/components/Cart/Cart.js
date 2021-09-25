import React from 'react';

const Cart = (props) => {
    const { cart } = props
    let foodName = []
    for (const food of cart) {
        foodName.push(food)
    }
    return (
        <div className='border p-3 shadow bg-light'>
            <h3 className="text-danger">Your Product :</h3>
            <p>Name : {foodName}</p>

        </div>
    );
};

export default Cart;