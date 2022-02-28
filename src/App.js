import './App.css';
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListing from './Components/ProductList';
import ProductDetails from "./Components/ProductDetails"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
     <Routes>
      <Route exact path="/"  element={<ProductListing/>}/>
      <Route  exact path="/products/:productId" element={<ProductDetails/>}/>
      <Route>404 Not Found!</Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
