import React from 'react';

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

export default Counter;
