'use strict';

console.log('running');

//JSX - JavaScript XML
var template = React.createElement(
  'p',
  { id: 'my_id' },
  'It changed!'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
