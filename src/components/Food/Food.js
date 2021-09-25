import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Food = (props) => {
    const { strMeal, strInstructions, strMealThumb } = props.food
    return (
        <div className="col-md-6">
            <div className="card mb-3 shadow " style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={strMealThumb} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{strMeal}</h5>
                            <p className="card-text">{strInstructions.slice(0, 150)}</p>
                            <button className='btn btn-primary' onClick={()=>props.hendelAddtoCart(strMeal)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;