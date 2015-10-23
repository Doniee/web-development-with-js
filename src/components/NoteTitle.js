import React from 'react';

const NoteTitle = React.createClass({

    getInitialState: function() {
        return {
            title: this.props.title
        };
    },

    changeTitle: function(newTitle) {
        console.log(newTitle);
    },

    onChange: function(e) {
        const value = e.target.value;
        this.props.onChangeTitle(value);

        this.setState({
            title: value
        });

    },

    render: function() {
        const { title } = this.state;

        return (
            <input type="text" className="note-title" value={title} onChange={this.onChange} />
        );
    }
});

export default NoteTitle;
