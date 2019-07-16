/**
 * Config
 */
require.config({
  baseUrl: '/app/',
  paths: {
    'react': 'lib/react-v16.8.6-production.min',
    'react-dom': 'lib/react-dom-v16.8.6-production.min',
  },
});
/**
* Main
*/
require([
  'react',
  'react-dom',
  'components/Root',
], function(React, ReactDOM, Root) {
  // render
  ReactDOM.render(
      React.createElement( Root, null ),
      document.querySelector('#app')
  );
});
