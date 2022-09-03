import React from 'react';
import { Link, Navigate } from "react-router-dom";
import { Button, Form, Input } from 'antd';
import { connect } from "react-redux";
import { register } from "../../redux/authReducer";
import '../LoginPage/LoginPage.css'

const RegisterPage = (props) => {

    const onFinish = (data) => {
        props.register(data.login, data.password);
    };
    if (props.isRegister) {
        return <Navigate to='/' />
    }
    return (
        <div className='mainAuth'>
            <div className='titleAuth'>Регистрация</div>
            <Form
                name="normal_login"
                id='formAuth'
                className="login-form"
                labelCol={{
                    span: 10,
                }}
                wrapperCol={{
                    span: 4,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item label="Логин" name="login" rules={[{ required: true, message: 'Введите логин!', },]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Пароль" name="password" rules={[{ required: true, message: 'Введите пароль!', },]}>
                    <Input.Password type="password" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 0 }}>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Зарегистрироваться
                    </Button>
                </Form.Item>
            </Form>
            {props.isAlreadyExists && <div>Пользователь с таким именем уже существует</div>}
            <p>
                Уже есть аккаунт? <Link to='/'>Войти</Link>
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