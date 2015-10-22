import React from 'react';

import Notes from './Notes';

const Index = React.createClass({

    render: function() {
        const { onAddNew } = this.props;
        console.log(this.props);
        return (
            <div>

                <Notes
                    {...this.props}
                />
            </div>
        );
    }

});

export default Index;
