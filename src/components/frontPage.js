import React from 'react';

const Index = React.createClass({

    render: function() {

        const { count, names, onIncrementCounter } = this.props;

        return (

            <div>

                {names.map((name, i) =>
                    <HelloWorld key={i} name={name}/>
                )}

                <Counterizer
                    {...this.props}
                />

                <Counter count={count}/>

            </div>
        );
    }

});

export default Index;
