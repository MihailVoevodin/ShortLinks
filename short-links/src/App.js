import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<MainPage />}/>
              <Route exact path='/login' element={<LoginPage />}/>
              <Route exact path='/register' element={<RegisterPage />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
