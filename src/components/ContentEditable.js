var React = require('react');
import ReactDOM from 'react-dom';

var ContentEditable = React.createClass({
    render: function(){
        return (
            <div id="contenteditable"
            className={this.props.classes}
            onInput={this.emitChange}
            onBlur={this.emitChange}
            contentEditable
            dangerouslySetInnerHTML={{__html: this.props.html}}></div>
        );
    },

    shouldComponentUpdate: function(nextProps){
        return nextProps.html !== ReactDOM.findDOMNode(this.innerHTML);
    },

    componentDidUpdate: function() {
        if ( this.props.html !== ReactDOM.findDOMNode(this.innerHTML) ) {
           this.getDOMNode().innerHTML = this.props.html;
        }
    },

    emitChange: function(evt){
        var html = ReactDOM.findDOMNode(this.innerHTML);
        if (this.props.onChange && html !== this.lastHtml) {
            evt.target = { value: html };
            this.props.onChange(evt);
        }
        this.lastHtml = html;
    }
});

module.exports = ContentEditable;
