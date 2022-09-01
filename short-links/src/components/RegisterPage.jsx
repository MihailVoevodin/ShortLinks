import React from 'react';
import {Link} from "react-router-dom";

const RegisterPage = (props) => {
    return (
        <div>
            <div>Register</div>

            <p>
                Already have an account? <Link to='/login'>Sign in</Link>
            </p>
        </div>
    );
}

export {RegisterPage};