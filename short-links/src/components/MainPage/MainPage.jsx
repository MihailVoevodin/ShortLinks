import React from 'react';
import { useState } from 'react';

const MainPage = (props) => {
    const [text, setText] = useState('')

    const changeText = (event) => {
        setText(event.target.value);
    }

    const onFinish = (e) => {
        e.preventDefault()
        console.log(text)
        props.doNewItem(text);
        setText('')
    };

    return (
        <div>
            <div>Welcome {props.login}</div>
            <form onSubmit={onFinish}>
                <input type="text" value={text} onChange={changeText} />
                <button type="submit" className="login-form-button">
                    To do short link
                </button>
            </form>

        </div>

    );
}

export default MainPage;