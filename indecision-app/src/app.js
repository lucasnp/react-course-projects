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
    handlePick() {
        alert('Hi');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do</button>
            </div>
        );
    }
}


class Options extends React.Component {
    handleRemoveAll() {
        alert('Remove All');
    }

    render() {
        
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
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
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.option.value.trim();

        e.target.option.value = option;
        
        if (option) {
            alert(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));