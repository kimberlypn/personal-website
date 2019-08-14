import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Experiences from './experiences/Experiences';
import {Footer} from './footer/Footer';
import {Home} from './home/Home';
import {Navigation} from './navigation/Navigation';
import Project from './projects/Project';
import {Projects} from './projects/Projects';
import {Skills} from './skills/Skills';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Navigation/>
      <div id='index'>
        <BrowserRouter>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/projects' exact={true} component={Projects}/>
          <Route path='/skills' exact={true} component={Skills}/>
          <Route path='/experiences' exact={true} component={Experiences}/>
          <Route path='/projects/:id(\d+)'
                 exact={true}
                 render={({match}) => <Project projectId={parseInt(match.params.id, 10)}/>}
          />
        </BrowserRouter>
        <Footer/>
      </div>
    </div>
  );
}

export default App;