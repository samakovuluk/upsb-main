import React, { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
function MicroFrontend({ name, host, history }) {
  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;

    const renderMicroFrontend = () => {
      window[`render${name}`](`${name}-container`, history);
    };

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}${manifest.files['main.js']}`;
        script.onload = () => {
          renderMicroFrontend();
        };
        document.head.appendChild(script);
      });

    // eslint-disable-next-line consistent-return
    return () => {
      // eslint-disable-next-line no-unused-expressions
      window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
    };
  });

  // eslint-disable-next-line react/jsx-filename-extension
  return <main id={`${name}-container`} />;
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;
