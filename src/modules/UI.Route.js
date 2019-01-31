import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router';
import ParameterPath from './parameter/UI.Path';

export default class UIROute extends PureComponent {

  render () {
    return (
      <Switch>
        <Route path="/user/:id" component={ParameterPath}/>
      </Switch>
    )
  }

}