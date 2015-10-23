import React from 'react';

const NoteContent = React.createClass({

    getInitialState: function() {
        return {
            content: this.props.content
        };
    },

    changeContent: function(newContent) {
        console.log(newContent);
    },

    onChange: function(e) {
        const value = e.target.value;
        this.props.onChangeContent(value);

        this.setState({
            content: value
        });
    },

    render: function() {
        const { content } = this.state;

        return (
            <textarea className="note-content" value={content} onChange={this.onChange} />
        );
    }
});

export default NoteContent;
