/**
 * Created by Galina on 3/25/2019.
 */
import React from 'react';
import './NavigationItem.css';
import {NavLink} from 'react-router-dom';

const navigationitem = (props) => {
    return (
        <li className="NavigationItem">
            <NavLink to={props.link} exact={props.exact} activeClassName="active">{props.children}</NavLink>
        </li>
    );
};

export default navigationitem;