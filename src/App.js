import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Basket from './Pages/Basket';
import Home from './Pages/Home';

function App() {

  const [prodLength, setProdLength] = useState(0);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
      const res = await fetch('Products.json');
      const data = await res.json();
      setProducts(data)
  }

  useEffect(() => {
      getProducts();
  }, [])

    useEffect(() => {
        let cartProdsLen = JSON.parse(localStorage.getItem('products')).length;

        if(cartProdsLen > 0){
            setProdLength(cartProdsLen);
        }
    }, [])

  return (
    <>
        <Router>
          <Header prodLength={prodLength} />
          <div className="container mt-5">
            <Route exact path="/" component={() => <Home setProdLength={l => setProdLength(l)} products={products} />} />
            <Route exact path="/cart" component={() => <Basket setProdLength={l => setProdLength(l)} />} />
          </div>
        </Router>
    </>
  );
}

export default App;
