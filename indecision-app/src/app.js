console.log('running');

//JSX - JavaScript XML
var template = <p id='my_id'>It changed!</p>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);