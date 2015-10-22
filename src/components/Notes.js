import React from 'react';
import ContentEditable from './ContentEditable';

const Notes = React.createClass({
    render: function() {
        const { notes } = this.props;
        console.log(notes);
        return (
            <div className="note-container">
                {notes.map((note, i) =>
                    <div key={i} className="note">
                        <ContentEditable classes="note-title" html={note.title} onChange={this.handleChange}/>
                        <ContentEditable classes="note-content" html={note.content} onChange={this.handleChange}/>
                    </div>
                )}

            </div>
        );
    },
    handleChange: function(evt){
      // this.setState({html: evt.target.value});
      // alert(evt.target.value);
    }
});

export default Notes;
