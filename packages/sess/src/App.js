import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

// M-UI
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signup from './components/Signup';
import SignIn from './components/Signin';

const generateClassName = createGenerateClassName({
  // Keep CSS unique for each component
  productionPrefix: 'sess',
});

export default ({ history, onSignIn }) => {
  // bootstrap js
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path='/session/signin'>
              <SignIn onSignIn={onSignIn} />
            </Route>
            <Route path='/session/signup'>
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
