import React from 'react';
import NewNote from './NewNote';

const NotesApp = React.createClass({
    getInitialState: function() {
        return {
            notes: [
                {
                    title: 'Note 1',
                    content: 'Lalalaa'
                },
                {
                    title: 'Note 2',
                    content: 'Lalalaa'
                },
                {
                    title: 'Note 3',
                    content: 'Lalalaa'
                }
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
        this.setState({
            notes: [{
                title: 'Note 1',
                content: 'Lalalaa'
            }].concat(this.state.notes)
        });

        console.log('clicked');
    }

});

export default NotesApp;
