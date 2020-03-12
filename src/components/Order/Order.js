/**
 * Created by Galina on 4/9/2019.
 */
import React from 'react';
import './Order.css';

const order =(props) => {
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]})
    };

    const ingredientOutput = ingredients.map(ig => {
        return (
            <span
                style={{textTransform: 'capitalize', display: "inline-block", margin: '0 8px', border: '1px solid grey'}} key={ig.name}>
                {ig.name} ({ig.amount})
            </span>
        )
    });

    return (
        <div className="Order">
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)} USD</strong></p>
        </div>
    );
};

export default order;