import React from 'react';

const NewNote = React.createClass({
    render: function() {
        const { onAddNew } = this.props;
        return (
            <div className="new-note">

                <button onClick={onAddNew}>+ Add new</button>
            </div>
        );
    }
});

export default NewNote;
