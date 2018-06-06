console.log('running');

//JSX - JavaScript XML
var template = (
    <div>
        <h1>My app</h1>
        <p>This is the new content</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Nemo</h1>
        <p>Age: 30</p>
        <p>Location: Houston, TX</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);