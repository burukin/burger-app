/**
 * Created by Galina on 3/25/2019.
 */
import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const logo = (props) => {
    return (
        <div className="Logo" style={{ height: props.height}}>
            <img src={burgerLogo} alt="burger logo"/>
        </div>
    );
};

export default logo;