import React from 'react';

const Food = (props) => {
    const { strMeal, strInstructions, strMealThumb } = props.food
    return (
        <div className="col-md-6">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={strMealThumb} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{strMeal}</h5>
                            <p class="card-text">{strInstructions.slice(0, 150)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;