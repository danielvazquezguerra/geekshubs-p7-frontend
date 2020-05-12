import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Containers/Home/Home';
import Products from './Containers/Products/Products';
import Filter from './components/Filters/Filter';



function App() {
  return (
    <div className="App">
      <Filter className="Filter"/>
      <BrowserRouter>
        <Header className="Header"/>
          <main className="Switch">
            <Switch>

                <Route path="/" component={ Home } exact/>
                <Route path="/product/" component={ Products } exact/>

            </Switch>
          </main>
        <Footer className="Footer"/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
