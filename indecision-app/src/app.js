console.log('running');

//JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Give up your life',
    options: ['One', 'Two']
};
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    console.log('addOne');
};
const minusOne = () => {
    console.log('minusOne');
};
const reset = () => {
    console.log('reset');
};

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);


const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);