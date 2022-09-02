import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPageContainer from "./components/MainPage/MainPageContainer";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<LoginPage />} />
                <Route exact path='/mainpage' element={<MainPageContainer />} />
                <Route exact path='/register' element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
