console.log('running');

//JSX - JavaScript XML
// var template = <p id='my_id'>This is JSX from app.js!</p>;
var appRoot = document.getElementById('app');

var template = React.createElement(
    'p',
    { id: 'my_id' },
    'This is test'
  );
ReactDOM.render(template, appRoot);