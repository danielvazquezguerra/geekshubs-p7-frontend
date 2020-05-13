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
            <Switch>
          <main className="Switch">

                <Route path="/" component={ Home } exact/>
                <Route path="/product/" component={ Products } exact/>

          </main>
            </Switch>
          <section className="Footer">

        <Footer />

          </section>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
