import React from 'react';
import ReactDOM from 'react-dom';

// Component
import App from './App';

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
export { mount };
