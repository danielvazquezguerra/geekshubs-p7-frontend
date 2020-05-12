import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Products from './Containers/Products/Products';
import Filter from './components/Filters/Filter';



function App() {
  return (
    <div className="App">
      <Filter />
      <BrowserRouter>
        <Header />
        <Switch>
           <Route path="/product/" component={ Products } exact/>
        </Switch>
        <Footer />
      </BrowserRouter>
    
    </div>
  );
}

export default App;
