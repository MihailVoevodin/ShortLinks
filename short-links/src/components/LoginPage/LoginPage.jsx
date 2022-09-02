import React from 'react';
import { Link, Navigate } from "react-router-dom";
import { Button, Form, Input } from 'antd';
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import "./LoginPage.css"


const LoginPage = (props) => {

    const onFinish = (data) => {
        props.login(data.login, data.password);
    };

    if (props.isAuth) {
        debugger
        return <Navigate to='/mainpage' />
    }

    return (
        <div className='mainAuth'>
            <div className='titleAuth'>Login</div>
            <Form
                name="normal_login"
                id='formAuth'
                className='login-form'
                labelCol={{
                    span: 10,
                }}
                wrapperCol={{
                    span: 4,
                }}
                onFinish={onFinish}
            >
                <Form.Item label="Login" name="login" rules={[{ required: true, message: 'Please input login!', },]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!', },]}>
                    <Input.Password type="password" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 0 }}>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Login
                    </Button>
                </Form.Item>
            </Form>
            {props.isIncorrectLogin && <div>Incorrect Login or Password</div>}
            <p>
                Or <Link to='/register'>Register</Link>
            </p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isIncorrectLogin: state.auth.isIncorrectLogin,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {login})(LoginPage);
