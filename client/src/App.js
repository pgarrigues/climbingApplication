import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Map from './pages/Map'
import Search from './pages/Search';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Map}/>
        <Route path='/recherche' exact component={Search}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
