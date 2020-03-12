/**
 * Created by Galina on 3/22/2019.
 */
import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {
    return (
        <div className="BuildControls">
            <p>Cuurent price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map( ctrl => {
                return <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={()=> props.ingredientAdded(ctrl.type)}
                    removed={()=> props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                    />
            })}
            <button
                className="OrderButton"
                disabled={!props.purchasable}
                onClick={props.ordered}
            >
                {props.isAuth ? 'ORDER NOW' : 'Log in to order'}
            </button>
        </div>
    );
};

export default buildControls;