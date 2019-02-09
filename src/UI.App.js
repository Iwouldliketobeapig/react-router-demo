import React, { Component } from 'react';
import css from './App.module.scss';
import 'highlight.js/styles/github.css';
import Left from 'src/common/component/layout/UI.Left';
import { Router } from 'react-router-dom'
import history from 'src/common/unit/modules/history';
import UIRoute from './modules/UI.Route';
import 'src/common/css/rewrite.scss';

class App extends Component {
  render() {
    return (
      <Router history={history}>
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
