import React, { Component, Fragment } from 'react';
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';
import classes from './App.css';
import CheckMobile from './components/CheckMobile';

class App extends Component {
  render() {
    return (
      <div>
        <CheckMobile
          yes={
            <Fragment>
              <div className={classes.AppMobile}>
                <ProjectShowcase query="Macbook" />
                <ProjectShowcase query="cartoon" />
              </div>
            </Fragment>
          }
          no={
            <div className={classes.AppDesktop}>
              <ProjectShowcase query="Macbook" />
              <ProjectShowcase query="cartoon" />
            </div>
          }
        />
      </div>
    );
  }
}

export default App;
