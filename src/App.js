import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Notfound from './components/pages/Notfound';
import Adduser from './components/users/Adduser';
import Edituser from './components/users/Edituser';
import User from './components/users/User';






function App() 
{
  return (
   <Router>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/users/add' component={Adduser}/>
        <Route exact path='/users/edit/:id' component={Edituser}/>
        <Route exact path='/users/:id' component={User}/>
        <Route component={Notfound}/>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
