class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in computer hand';
        const options = ['Thing 1', 'Thing 2', 'Thing 4'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}


class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
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
                {
                    this.props.options.map((option) => {
                        return <Option key={option} name={option}/>
                    })
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {

        return (
            <div>
                This is {this.props.name}
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