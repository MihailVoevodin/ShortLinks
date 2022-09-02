import React from 'react';
import {Navigate} from "react-router-dom";
import { connect } from "react-redux";

const MainPage = (props) => {

    if (!props.isAuth) {
        return <Navigate to='/login' />
    }
    return (
        <div>
            <div>Welcome</div>
            
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {})(MainPage);