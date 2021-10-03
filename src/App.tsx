import React from 'react'
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import UserForm from './pages/UserForm'
import Create from './pages/Create'
import Task from './pages/Task'
import Sidebar from './components/Sidebar'
//  import '../node_modules/boststrap/dist/css/bootstrap.min.css'
const App = () => {
  return (
    <div>
    
    <Router>
    <Switch> 
    <Sidebar>
    <Route path='/' exact component={Home} />
    <Route path='/form' exact component={UserForm} />
    <Route path='/create' component={Create} />
    <Route path='/task' component={Task} />
    </Sidebar>
    </Switch>
    </Router> 
  </div>
  )
}

export default App
