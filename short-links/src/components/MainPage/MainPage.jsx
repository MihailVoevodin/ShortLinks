import { Alert, Button, Input, Select } from 'antd';
import React from 'react';
import { useState } from 'react';
import { sortTypes } from '../../Consts';
import './MainPage.css'

const { Option } = Select;

const MainPage = ({ links, login, doNewItem, onClickSortChange, sort }) => {
    const [text, setText] = useState('')
    const [alert, setAlert] = useState(false)

    const changeText = (event) => {
        setText(event.target.value);
    }

    const onFinish = (e) => {
        e.preventDefault()
        doNewItem(text);
        setText('')
    };

    const copyToClipboard = (item) => {
        navigator.clipboard.writeText('http://79.143.31.216/s/' + item)
        setAlert(true)
    }

    return (
        <div className='main'>
            {alert && <Alert className='alert' style={{position: 'fixed'}} message="Copied!" type="success" showIcon closable onClose={() => setAlert(false)} banner={true} />}
            <div className='mainTitle'>Welcome {login}</div>
            <div className='mainOptions'>
                <div>
                    <b>Сортировать по: </b>
                    <Select style={{ width: 250 }} defaultValue={sort} onChange={(value) => onClickSortChange(value)}>
                        {sortTypes.map(type =>
                            <Option key={type.id}>
                                {type.label}
                            </Option>)}
                    </Select>
                </div>
                <form onSubmit={onFinish}>
                    <Input id='inputLink' type="text" value={text} onChange={changeText} />
                    <Button type="primary" htmlType='submit' className="login-form-button mainBtn">
                        Создать короткую ссылку
                    </Button>
                </form>
            </div>
            
            <table className='table'>
                <thead>
                    <tr>
                        <th>Короткая ссылка</th>
                        <th>Длинная ссылка</th>
                        <th>Счетчик переходов</th>
                    </tr>
                </thead>
                <tbody>
                    {links.map(item =>
                        <tr key={item.id}>
                            <th className='short' onClick={() => { copyToClipboard(item.short)}}>
                                {item.short}
                            </th>
                            <th>{item.target}</th>
                            <th>{item.counter}</th>
                        </tr>)}
                </tbody>
            </table>
        </div>

    );
}

export default MainPage;