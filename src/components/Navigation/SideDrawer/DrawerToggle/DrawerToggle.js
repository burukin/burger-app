/**
 * Created by Galina on 3/25/2019.
 */
import React from 'react';
import './DrawerToggle.css';

const drawerToggle = (props) => {
    return (
        <div onClick={props.clicked} className="DrawerToggle">
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default drawerToggle;