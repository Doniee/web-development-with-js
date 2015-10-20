import '../node_modules/normalize.css/normalize.css';
import'./client.css';

import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = React.createClass({
    render: function() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
});


const HelloWorldApp = React.createClass({
    render: function() {
        const names = this.props.names;
        return (
            <div className="content">
                <h1>Title</h1>
                {names.map(name =>
                    <HelloWorld name={name} />
                )}
                <Counterizer onIncrementCounter={this.incrementCounter} count={this.state.count} />
                <Counter count={this.state.count} />
            </div>
        );
    },
    getInitialState: function() {
        return {
            count: 0
        }
    },
    incrementCounter: function() {
        this.setState({
            count: this.state.count + 1
        });
    }
});

const Counterizer = React.createClass({
    render: function() {
        return (
            <div className="counter">
                <div className="counter-number">
                    {this.props.count}
                </div>
                <button onClick={this.props.onIncrementCounter}>More</button>
            </div>
        );
    }
});

const Counter = React.createClass({
    render: function() {
        return (
            <div className="mega-counter">
                <p>Clicked: </p>
                <div className="mega-counter-number">
                    {this.props.count}
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <HelloWorldApp names={['moi', 'Blaa', 'jaa']} />,
    document.getElementById('app')
);

