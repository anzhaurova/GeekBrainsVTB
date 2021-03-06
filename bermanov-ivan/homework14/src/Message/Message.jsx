import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import './Message.scss';

export const messageType = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export class Message extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = messageType;

    render() {
        const { author, content } = this.props;
        const classes = className('message', {
            'message-owner': author !== 'NDR-114',
            'message-robot': author === 'NDR-114'
        });

        return (
            <div className = { classes }>
                <div>{ content ? content : 'Message' }</div>
                <div className="message-sender">{ author ? author : 'Author' }</div>
            </div>
        );
    }
}