import React from 'react';
import api from '../api.js';

const HelloWorldApp = React.createClass({

    getInitialState: function() {
        return {
            count: 0,
            name: 'Lotta',
            names: []
        }
    },

    componentDidMount: function() {
        api.getTussit().then((data) => {
            this.setState({
                names: data
            });
        });
    },



    render: function() {

        const names = this.state.names;
        return (
            <div className="content">
                <h1>Title</h1>

                {this.props.children && React.cloneElement(
                    this.props.children,
                    {
                        names: this.state.names,
                        count: this.state.count,
                        onIncrementCounter: this.incrementCounter
                    }
                )}

            </div>
        );
    },

    incrementCounter: function() {
        this.setState({
            count: this.state.count + 1
        });
    }
});

export default HelloWorldApp;
