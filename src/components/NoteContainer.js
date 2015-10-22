import React from 'react';
import Note from './Note';

const NoteContainer = React.createClass({
    render: function() {

        return (
            <div className="note-container">
                <Note />
            </div>
        );
    }
});

export default NoteContainer;
