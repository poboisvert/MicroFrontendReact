import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// AuthApp is public exposed name on  ModuleFederationPlugin
import { mount } from 'session/SessionApp'; // sess is   name: 'sess', // global variable in auth/config/webpack

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    console.log(onParentNavigate);
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
