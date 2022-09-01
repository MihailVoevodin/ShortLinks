import React from 'react';
import {Navigate} from "react-router-dom";

const MainPage = (props) => {
    return (
        <div>
            <div>Welcome</div>
            <Navigate to='/login' />
        </div>

    );
}

export {MainPage};