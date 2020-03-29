import React, {Component, Fragment} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Messenger.css';

import {MessageForm} from '../MessageForm';
import { MessageList } from '../MessageList';


export class Messenger extends Component {
    render()
    {
        const {chats, messages, sendMessage, addChat, isLoading, isError} = this.props;

        if(isLoading){
            return (<div>Loading...</div>);
        }

        if(isError){
            return (<div>Попробуйте обновить страницу, сервис временно недоступен...</div>);
        }

        return (
            <Fragment>
            <div>
            Header
            <hr />
            </div>
            <div className="messenger">
                <List>
                    {chats.map((chat, index) => (
                    <ListItem key={index}>
                        <Link to={chat.link}>
                            <ListItemText primary={chat.name} secondary={chat.unread && "unread"} />
                        </Link>
                    </ListItem>
                    ))}
                    <Button onClick={addChat}>
                        <ListItemText primary="Create chat" />
                    </Button>
                </List>

                {messages ? <MessageList items={messages} /> : 'Пожалуйста, выберите чат'}
                {messages && <MessageForm onSend={sendMessage} />}
            </div>
            </Fragment>
        );
    }
}