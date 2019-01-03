import React, { Component } from 'react';
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';
import classes from './App.css';
import CheckMobile from './components/CheckMobile';
import Header from './components/Header/Header';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CheckMobile
          yes={
            <div className={classes.AppMobile}>
              <ProjectShowcase query="Animal" />
              <ProjectShowcase query="cartoon" />
            </div>
          }
          no={
            <div className={classes.AppDesktop}>
              <ProjectShowcase query="animal" />
              <ProjectShowcase query="cartoon" />
            </div>
          }
        />
      </div>
    );
  }
}

export default App;
