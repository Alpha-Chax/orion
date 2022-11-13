import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import ErrorPage from './Components/ErrorPage';
import SingleProduct from './Components/SingleProduct';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home/>}/> 
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/products" element={<Products/>}/>
    <Route exact path="/products/:id" element={<SingleProduct/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/cart" element={<Cart/>}/>
    <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    <Footer/>
    </Router>
   </>
  );
}

export default App;
