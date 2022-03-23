import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/pages/Home';
import Famous from './components/pages/Famous';
import List from './components/pages/List';
import Signup from './components/Login/Signup';
import MapRender from './components/Discover/Maps';
import Login from './components/Login/Login';
import PostForm from './components/Post/Post';
import DetailsFunction from './services/DeatailsFunction';
import CNS from './components/pages/CNS';

function App() {
  return (
    <>
      { <Router>
        <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/famous' exact component={Famous} />
            <Route path='/list' exact component={List} />
            <Route path='/details/:id' exact component={DetailsFunction} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/adventure' exact component={MapRender} />
            <Route path='/login' exact component={Login} />
            <Route path='/details/login' exact component={Login} />
            <Route path='/post' exact component={PostForm} />
            <Route path='/CNS/:id' exact component={CNS} />
          </Switch>
      </Router> }
    </>
  );
}

export default App;
