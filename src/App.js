import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import Appbar from './components/layout/Appbar'
import Home from './pages/Home';
import Product from './pages/Product';
import ShoppingCarts from './pages/ShoppingCarts';
import ScrollToTop from './components/ScrollToTop'


const theme = createTheme({
    palette:{
      primary:{
        main: '#a1887f'
      }
  }, 
  
  direction: 'rtl',

  typography:{
    fontFamily:'samim'
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Appbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/product/:id">
              <Product />
            </Route>
            <Route path="/cart">
              <ShoppingCarts />
            </Route>
          </Switch>
        </Appbar>
      </Router>
    </ThemeProvider>
  );
}

export default App;
