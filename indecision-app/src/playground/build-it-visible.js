
let isShown = true;

const toggleVisibility = () => {
    isShown = !(isShown);
    console.log(isShown);
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility</h1>
            <button onClick={toggleVisibility}>{isShown ? 'Hide' : 'Show'} details</button>
            {isShown ? <p>My content</p> : ''}
        </div>
    );

    ReactDOM.render(template, appRoot)
};

render();