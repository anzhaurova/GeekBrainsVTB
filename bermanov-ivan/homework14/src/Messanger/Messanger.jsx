import React, { Component } from 'react';

import { MessageForm } from 'components/MessageForm';
import { MessageList } from 'components/MessageList';
import './Messanger.css';

export class Messanger extends Component {
    constructor(props) {
        super(props);
    }

    state = { messages: [] };

    componentDidUpdate() {
        const { author } = this.state.messages[this.state.messages.length - 1];
        if (author !== 'NDR-114') {
            setTimeout(() => {
                this.setState({
                    messages: [
                        ...this.state.messages,
                        {
                            content: `Hello, ${author ? author : 'Author'}, my name is Andrew`,
                            author: 'NDR-114'
                        }
                    ]
                });
            }, 1000);
        }
    }

    handleMessageSend = (message) => {
        this.setState((prevState) => ({ messages: [ ...prevState.messages, message ] }));
    };

    render() {
        const { messages } = this.state;
        return(
            <div className="messanger">
                <MessageList messages = { messages } />
                <MessageForm onSend = { this.handleMessageSend }/>
            </div>
        );
    }
}