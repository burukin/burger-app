/**
 * Created by Galina on 3/23/2019.
 */
import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients).map( ingredient => {
            return <li key={ingredient}>
                <span style={{textTransform: 'capitalize'}}>{ingredient}</span>
                : {this.props.ingredients[ingredient]}
            </li>;
        });

        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delecious burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: <strong>{this.props.price.toFixed(2)} USD</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
};

export default OrderSummary;