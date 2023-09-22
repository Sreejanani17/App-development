import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signup';
import Home from './components/home';
import DashBoard from './components/dashboard';
import Orders from './components/Orders';
import Users from './components/Users';
import Buy from './components/buy';
import { UserProvider } from './components/context/UserContext';
import Sell from './components/sell';

function App() {
  return (
    <div>
      <UserProvider>    
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/sell" element={<Sell />}></Route>
        <Route path="/buy" element={<Buy />}></Route>
      </Routes>
    </Router>
    </UserProvider>
    </div>
  );
}

export default App;