import React from 'react';

const Greeter = React.createClass({
    render: function() {
        const { name } = this.props.params;

        return (
            <h1 className="greeting">
                Hellooo {name}
            </h1>
        );
    }
});

export default Greeter;
