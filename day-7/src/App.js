import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signup';
import Home from './components/home';
import DashBoard from './components/dashboard';
import Orders from './components/Orders';
import ArtDetails from './components/ArtDetails';
import { UserProvider } from './components/context/UserContext';
import Sell from './components/sell';
import Terms from './components/terms';
import Privacy from './components/privacy';
import FAQ from './components/faq';
import AdminLogin from './components/admin';
import ArtWork from './components/ArtWork';
import Seller from './components/Seller';
import Admin from './components/Admins';
import Buy from './components/buy';
import Users from './components/User';


function App() {
  return (
    <div>
      <UserProvider>    
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/sell" element={<Sell />}></Route>
        <Route path="/detail/:detailId" element={<ArtDetails/>}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/admin-login" element={<AdminLogin />}></Route>
        <Route path="/artwork" element={<ArtWork />}></Route>
        <Route path="/seller" element={<Seller />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/buy" element={<Buy />}></Route>
        
      </Routes>
    </Router>
    </UserProvider>
    </div>
  );
}

export default App;