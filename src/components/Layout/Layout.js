/**
 * Created by Galina on 3/22/2019.
 */
import React from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layuot.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';

class Layuot extends React.Component {
    state = {showSideDrawer: false};

    sideDrawerClosedHandler = () => {
        this.setState( prevState => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    };

    render () {
        return (
            <Aux>
                <Toolbar isAuth={this.props.isAuth} clicked={this.sideDrawerClosedHandler}/>
                <SideDrawer isAuth={this.props.isAuth} closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layuot);