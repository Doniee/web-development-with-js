import React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';
import NoteTitle from './NoteTitle';
import NoteContent from './NoteContent';

const Notes = React.createClass({

    changeTitle: function(newTitle) {
        console.log(newTitle);
    },

    changeContent: function(newContent) {
        console.log(newContent);
    },

    render: function() {
        const { notes } = this.props;
        console.log(notes);
        return (
            <div className="note-container">
                {notes.map((note, i) =>
                    <div key={note.id} className="note">
                        <form>
                            <NoteTitle title={note.title} onChangeTitle={this.changeTitle} />
                            <NoteContent content={note.content} onChangeContent={this.changeContent} />
                        </form>

                    </div>
                )}

            </div>
        );
    }
});

export default Notes;
