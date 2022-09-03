import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { doNewItem, getLinks, doSortLinks } from '../../redux/mainReducer';
import { Navigate } from "react-router-dom";
import MainPage from "./MainPage";
import './MainPage.css'
import { Button } from "antd";

const MainPageContainer = ({ getLinks, isAuth, login, doNewItem, links, doSortLinks, token }) => {
    const [offset, setOffset] = useState(0)
    const [sort, setSort] = useState('desc_counter')

    useEffect(() => {
        if (offset === 0 && token) {
            getLinks(sort, offset)
        }
    }, [])

    const onLoadItems = () => {
        setOffset(offset + 5)
        getLinks(sort, offset + 5)
    }

    const onClickSort = (id) => {
        setOffset(0)
        setSort(id);
        doSortLinks(id, 0)
    }

    if (!isAuth) {
        localStorage.setItem('token', '')
        return <Navigate to='/' />
    }

    return (
        <>
            {localStorage.getItem('token') === token && <MainPage login={login}
                doNewItem={doNewItem}
                links={links}
                onClickSortChange={(id) => onClickSort(id)}
                sort={sort} />
            }
            <Button type='primary' id='moreBtn' onClick={onLoadItems}>Загрузить</Button>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        links: state.main.links,
        token: state.auth.token,
    }
};

export default connect(mapStateToProps, { doNewItem, getLinks, doSortLinks })(MainPageContainer);