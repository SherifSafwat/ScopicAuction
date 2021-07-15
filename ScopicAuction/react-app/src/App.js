import './App.css';
import { Route, BrowserRouter } from 'react-router-dom'

import Login from './components/Login'
import Profile from './components/Profile'
import Itemlist from './components/Itemlist'
import Itemdetails from './components/Itemdetails'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/"  component={Login} exact />
        <Route path="/Profile"  component={Profile} exact />
        <Route path="/Itemlist"  component={Itemlist} exact />
        <Route path="/Itemdetails/id=:id" component={Itemdetails} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
