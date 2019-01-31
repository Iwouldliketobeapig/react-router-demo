import React, { Component } from 'react';
import css from './App.module.scss';
import 'highlight.js/styles/github.css';
import Left from 'src/common/component/layout/UI.Left';
import { BrowserRouter as Router } from 'react-router-dom'
// import history from 'src/common/unit/react/history';
import UIRoute from './modules/UI.Route';
import 'src/common/css/common.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={css.app}>
          <Left className={css['app-left']} />
          <div className={css['app-body']}>
            <UIRoute />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
