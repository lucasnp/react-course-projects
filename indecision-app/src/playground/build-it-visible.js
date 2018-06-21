
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            isShow: false
        }
    }

    toggleVisibility() {
        this.setState((prevState) => {
            return {
                isShow: !prevState.isShow
            };
        });
    }

    render() {
        return (
            <div>
             <h1>Visibility</h1>
             <button onClick={this.toggleVisibility}>{this.state.isShow ? 'Hide' : 'Show'} details</button>
             {this.state.isShow ? <p>My content</p> : ''}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let isShown = true;

// const toggleVisibility = () => {
//     isShown = !(isShown);
//     console.log(isShown);
//     render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility</h1>
//             <button onClick={toggleVisibility}>{isShown ? 'Hide' : 'Show'} details</button>
//             {isShown ? <p>My content</p> : ''}
//         </div>
//     );

//     ReactDOM.render(template, appRoot)
// };

// render();