import React from 'react';
import { Link, Navigate } from "react-router-dom";
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { connect } from "react-redux";
import { login } from "../redux/authReducer";


const LoginPage = (props) => {

    const onFinish = (data) => {
        props.login(data.login, data.password);
    };

    if (props.isAuth) {
        return <Navigate to='/' />
    }

    return (
        <div>
            <div>Login</div>
            <Form
                name="normal_login"
                className="login-form form"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item label="Login" name="login" rules={[{ required: true, message: 'Please input valid email!', },]}>
                    <Input prefix={<MailOutlined className="site-form-item-icon" />} />
                </Form.Item>

                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!', },]}>
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} type="password" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 7 }}>
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
