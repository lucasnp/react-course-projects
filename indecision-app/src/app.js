console.log('running');

//JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Give up your life'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

var user = {
    name: 'Nemo',
    age: 32,
    location: 'Houston, TX'
};
var templateTwo = (
    <div>
        <h1>{user.name + '!'}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);