'use strict';

var isShown = true;

var toggleVisibility = function toggleVisibility() {
    isShown = !isShown;
    console.log(isShown);
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            isShown ? 'Hide' : 'Show',
            ' details'
        ),
        isShown ? React.createElement(
            'p',
            null,
            'My content'
        ) : ''
    );

    ReactDOM.render(template, appRoot);
};

render();
