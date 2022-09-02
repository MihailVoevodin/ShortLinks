import React from 'react';
import { Link, Navigate } from "react-router-dom";
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { connect } from "react-redux";
import { register } from "../redux/authReducer";

const RegisterPage = (props) => {

    const onFinish = (data) => {
        props.register(data.login, data.password);
    };
    if (props.isRegister) {
        return <Navigate to='/login' />
    }
    return (
        <div>
            <div>Register</div>
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
                        Register
                    </Button>
                </Form.Item>
            </Form>
            {props.isAlreadyExists && <div>User with this username is already exists</div>}
            <p>
                Already have an account? <Link to='/login'>Sign in</Link>
            </p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAlreadyExists: state.auth.isAlreadyExists,
        isRegister: state.auth.isRegister,
    }
}

export default connect(mapStateToProps, {register})(RegisterPage);