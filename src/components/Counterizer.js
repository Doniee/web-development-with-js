import React from 'react';

const Counterizer = React.createClass({
    render: function() {
        const { count, name, onIncrementCounter } = this.props;

        return (
            <div className="counter">
                <div className="counter-number">
                    {count}
                    {name}
                </div>
                <button onClick={onIncrementCounter}>More</button>
            </div>
        );
    }
});

export default Counterizer;
