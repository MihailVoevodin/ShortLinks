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
        return <Navigate to='/mainpage' />
    }

    return (
        <div className='mainAuth'>
            <div className='titleAuth'>Авторизация</div>
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
                <Form.Item label="Логин" name="login" rules={[{ required: true, message: 'Введите логин!', },]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Пароль" name="password" rules={[{ required: true, message: 'Введите пароль!', },]}>
                    <Input.Password type="password" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 0 }}>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
            {props.isIncorrectLogin && <div>Неправильный логин или пароль</div>}
            <p>
                Нет аккаунта? <Link to='/register'>Зарегистрироваться</Link>
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
