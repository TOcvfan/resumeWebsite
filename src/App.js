import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Cv from './components/CV/CV';
import Application from './components/Application/Application';
import Car from './components/Car/Car';
import Caravan from './components/Caravan/Caravan';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import 'tachyons';
import 'bootstrap';

const particlesOpt = {
  particles: {
      number: { 
        value: 350, 
        density: { 
          enable: true, 
          value_area: 1000 
        }    
    }
  }
}

const initialState = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: '',
        age: '',
        contact: '',
        gender: ''
      }
    }

  const age = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var ageCurrent = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        ageCurrent--;
    }
    console.log(ageCurrent);
    return ageCurrent;

  }

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
      age: data.age,
      contact: data.contact,
      gender: data.gender
    }})
  }

  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState(initialState)
    } else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render() {
    const {isSignedIn, route} = this.state;
    return (
      <div className="App">
        <Particles
              className='particles'
              params={particlesOpt}
            />
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      { route === 'cv'
       ? <Cv />
       :( 
        route === 'application'
        ? <Application age={() => age("1979 10 27")}/>
        : (
          route === 'car'        
          ?<Car /> 
       :(
        route === 'caravan'        
       ?<Caravan />
       :(
        route === 'signin'        
        ? <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
       )
       )
      )
       )       
      }
            {/*<birthday />*/}
      </div>
    );
  }
}

export default App;
