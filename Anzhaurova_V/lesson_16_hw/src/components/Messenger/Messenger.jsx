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
    // state = {
    //     chats: {
    //         '1': {
    //             id: 1,
    //             name: 'chat1',
    //             messages: [
    //                 {text: 'Это чат №1!', author: 'Bot'},
    //             ],
    //         },
    //         '2': {
    //             id: 2,
    //             name: 'chat2',
    //             messages: [
    //                 {text: 'Привет!!! Это чат №2!', author: 'Bot'},
    //             ],
    //         },
    //         '3': {
    //             id: 3,
    //             name: 'chat3',
    //             messages: [
    //                 {text: 'Привет!!! Это чат №3!', author: 'Bot'},
    //             ],
    //         }
    //     }
    // }

    // componentDidUpdate()
    // {
    //     if(this.messages.length){
    //     const {author} = this.messages[this.messages.length - 1];
    //     if(author !== 'Bot'){
    //         setTimeout(() => {
    //             // this.setState({
    //             //     messages: this.state.messages.concat([{text: `Hi, ${author}! Это автоответ бота`, author: 'Bot'}]),
    //             // });
    //             this.handleMessageSend({text: `Hi, ${author}! Это автоответ бота`, author: 'Bot'});
    //         }, 1000);
    //     }
    // }
    // }

    // get messages(){
    //     const {chats} = this.state;
    //     const {match} = this.props;

    //     let messages = null;

    //     if(match && chats[match.params.id]){
    //         messages = chats[match.params.id].messages;
    //     }

    //     return messages;
    // }

    
    render()
    {
        const {chats, messages, sendMessage} = this.props;
        return (
            <div className="messenger">
                <List>
                    {chats.map((chat, index) => (
                    <ListItem key={index}>
                        <Link to={chat.link}>
                            <ListItemText primary={chat.name} />
                        </Link>
                    </ListItem>
                    ))}
                </List>

                {messages ? <MessageList items={messages} /> : 'Пожалуйста, выберите чат'}
                {messages && <MessageForm onSend={sendMessage} />}
            </div>
        );
    }
}