import React, {useState, useEffect} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import axios from 'axios';
import './styles/App.css'

const App = () => {

  const [dateNow, setDateNow] = useState('');
  const [previousDate, setPreviousDate] = useState('');
  const [dataSpots, setDataSpots] = useState([]);

  useEffect(() => {
        axios
        .get('http://localhost:5000/spots')
        .then((res) => setDataSpots(res.data))
        .then(console.log('chargement data'))
        .then(setDateNow(Date.now()))
        .then(setPreviousDate(Date.now()-172800))
    }, [])
  
  console.log(dateNow);
  console.log(previousDate);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home 
            dataSpots={dataSpots}
            dateNow={dateNow}
            previousDate={previousDate}
          />
        </Route>
        <Route path='/recherche' exact>
          <Search dataSpots={dataSpots}/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;