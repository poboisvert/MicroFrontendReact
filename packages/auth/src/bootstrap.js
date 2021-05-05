import React from 'react';
import ReactDOM from 'react-dom';

// Router
import { createMemoryHistory, createBrowserHistory } from 'history'; // Memory app - Browse URL

// Component
import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] }); // History Object - Listen

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      //console.log('Bootstrap navigate');
      // console.log(location); // {pathname: "/pricing", search: "", hash: "", state: undefined, key: "9ry7qs"}

      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// call mount immediately - DEV
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root'); // Selector HTML

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() }); // Fix Route
  }
}

// We are running through container
export { mount };
