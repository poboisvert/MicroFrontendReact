import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  // onSignIn from container
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  // Pass onSignIn to App and Routing
  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

  return {
    // parent with navigation
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// If development
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if (devRoot) {
    mount(devRoot, {
      // browser history
      defaultHistory: createBrowserHistory(),
      onNavigate: ({ pathname }) => {
        console.log('called onNavigation with:', pathname);
      },
    });
  }
}

// running container export the mount function
export { mount };
