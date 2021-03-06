import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import './MessageForm.css';

export class MessageForm extends Component {
    state = {
        author: '',
        text: '',
    };

    static propTypes = {
        onSend: PropTypes.func,
        // test: PropTypes.number.isRequired,
    };

    static defaultProps = {
        onSend: () => {},
        // test: 10,
    };

    handleInputChange = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value,
        });
    }

    handleInputSend = (event) => {
        const {onSend} = this.props;

        if(typeof onSend === 'function'){
            onSend(this.state);
            this.setState({text: ''});
        }
    }

    handleKeyDownEnter = (event) =>{
        //console.log(event, event.ctrlKey);
        if(event.ctrlKey && event.keyCode === 13){
            this.handleInputSend();
        }
    }

    render()
    {
        console.log(this.props);
        const {author, text} = this.state;
        return (
            <div>
                <TextField label="Author" name="author" value={author} onChange={this.handleInputChange} />
                <TextField label="Text" name="text" multiline autoFocus value={text} onKeyDown={this.handleKeyDownEnter} onChange={this.handleInputChange} />
                <Fab variant="round" color="primary" onClick={this.handleInputSend}><SendIcon /></Fab>
            </div>
        );
    }

}