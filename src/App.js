import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import Knowledges from './pages/Knowledges';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/competences" component={Knowledges} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
