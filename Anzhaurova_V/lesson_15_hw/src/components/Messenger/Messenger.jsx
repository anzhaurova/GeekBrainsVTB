import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import './Messenger.css';

import {MessageForm} from '../MessageForm';
import { MessageList } from '../MessageList';

// const chats = [
//     {
//         id: 1,
//         messages: [],
//         name: 'Chat1'
//     },
//     {
//         id: 2,
//         messages: [],
//         name: 'Chat2'
//     }
// ];


export class Messenger extends Component {
    state = {
        chats: {
            '1': {
                id: 1,
                name: 'chat1',
                messages: [
                    {text: 'Это чат №1!', author: 'Bot'},
                ],
            },
            '2': {
                id: 2,
                name: 'chat2',
                messages: [
                    {text: 'Привет!!! Это чат №2!', author: 'Bot'},
                ],
            },
            '3': {
                id: 3,
                name: 'chat3',
                messages: [
                    {text: 'Привет!!! Это чат №3!', author: 'Bot'},
                ],
            }
        }
    }

    componentDidUpdate()
    {
        if(this.messages.length){
            const {author} = this.messages[this.messages.length - 1];
            if(author !== 'Bot'){
                setTimeout(() => {
                    // this.setState({
                    //     messages: this.state.messages.concat([{text: `Hi, ${author}! Это автоответ бота`, author: 'Bot'}]),
                    // });
                    this.handleMessageSend({text: `Hi, ${author}! Это автоответ бота`, author: 'Bot'});
                }, 1000);
            }
        }
    }

    get messages(){
        const {chats} = this.state;
        const {match} = this.props;

        let messages = null;

        if(match && chats[match.params.id]){
            messages = chats[match.params.id].messages;
        }

        return messages;
    }

    handleMessageSend = (message) => {
        const {chats} = this.state;
        const {match} = this.props;

        //1 конкретный чат
        const chat = chats[match.params.id];
        const messages = this.messages.concat([message]);
        chat.messages = messages;

        this.setState({
            chats: {
                ...this.state.chats,
                [match.params.id]: chat,
            }
        });
    };

    render()
    {
        return (
            <div className="messenger">
                <List>
                    <ListItem>
                        <Link to="/about">
                            <ListItemText primary="About" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/chats/1">
                            <ListItemText primary="Chat 1" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/chats/2">
                            <ListItemText primary="Chat 2" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/chats/3">
                            <ListItemText primary="Chat 3" />
                        </Link>
                    </ListItem>
                </List>

                {this.messages ? <MessageList items={this.messages} /> : 'Пожалуйста, выберите чат'}
                {this.messages && <MessageForm onSend={this.handleMessageSend} />}
            </div>
        );
    }
}