import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import ParameterPath from './parameter/UI.Path';
import ParameterState from './parameter/UI.State';

export default withRouter (class UIROute extends PureComponent {

  render () {
    return (
      <Switch>
        <Route exact={true} path="/parameter/state" component={ParameterState} />
        <Route exact={true} path="/parameter/id/:id" component={ParameterPath} />
      </Switch>
    )
  }

})