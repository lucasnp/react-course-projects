class IndecisionApp extends React.Component {

    render() {
        return (
            <div>
                <h1>Title</h1>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}


class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in computer's hand</h2>
            </div>
        
        );
    }
}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button>What should I do</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                This is Options component

                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {

        return (
            <div>
                This is AN Option component
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                This is AddOption component
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));