import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className='APP'>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer /> 
      </div>
    </Router>
  );
}

export default App;
