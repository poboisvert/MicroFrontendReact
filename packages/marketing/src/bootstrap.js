import React from 'react';
import ReactDOM from 'react-dom';

// Router
import { createMemoryHistory } from 'history';

// Component
import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory(); // History Object - Listen

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
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot, {}); // Fix Route
  }
}

// We are running through container
export { mount };
