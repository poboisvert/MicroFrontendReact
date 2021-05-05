import { mount } from 'auth/AuthApp'; // refer to package .json
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  // React component
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        // console.log(nextPathname);
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate); // Listenning to URL change
  }, []); // Load once

  return <div ref={ref} />;
};
