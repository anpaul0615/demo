define(function(require, exports, module) {
  // Import
  var React = require('react');
  var ClickCounter = require('components/ClickCounter');
  // Component
  return Root = function() {
    return [
      React.createElement( ClickCounter, { key: 'ClickCounter' }, null ),
    ];
  };
});
