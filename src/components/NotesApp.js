import React from 'react';
import NewNote from './NewNote';

const NotesApp = React.createClass({
    getInitialState: function() {
        return {
            notes: [

            ]
        }
    },

    render: function() {
        console.log(this.state.notes);
        return (
            <div className="content">
                <h1>Notes</h1>
                <NewNote onAddNew={this.addNew} />
                {this.props.children && React.cloneElement(
                    this.props.children,
                    {
                        notes: this.state.notes
                    }
                )}
            </div>
        );
    },
    addNew: function() {
        const id = Math.random();
        this.setState({
            notes: [{
                title: 'Note title',
                id,
                content: 'Content'
            }].concat(this.state.notes)
        });

        console.log('clicked');
    }

});

export default NotesApp;
