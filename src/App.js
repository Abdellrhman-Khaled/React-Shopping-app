import logo from './logo.svg';
import './App.css';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Products from './components/Products';
import {Route , Routes} from 'react-router-dom';
import Productdetails from './components/Productdetails';
import Cart from './components/Cart';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
   
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='products' element={<Products/>}></Route>
          <Route path='products/:productID' element={<Productdetails/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
