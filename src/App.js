import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={ShopPage} path="/shop" />
        <Route component={SignInAndSignUpPage} path="/signin" />
      </Switch>
    </div>
  );
}

export default App;
