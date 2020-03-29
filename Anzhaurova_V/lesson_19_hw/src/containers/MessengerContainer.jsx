import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {Messenger} from 'components/Messenger';
import {chatsLoad, chatsSend, chatsAdd, chatsLoad2} from 'actions/chats';

class MessengerContainer extends Component {
    componentDidMount()
    {
        const {loadChats} = this.props;
        if(!this.props.chats.length){
            loadChats();
        }
    }

    handleMessageSend = (message) => {
        const {sendMessage, chatId} = this.props;
    
        sendMessage({
            ...message,
            chatId,
        });
    };

    handleChatAdd = () => {
        const {addChat, newChatId, redirect} = this.props;
        const chatName = prompt('Введите название чата');
        addChat(newChatId, chatName);
        redirect(newChatId);
    };

    render()
    {
        const {chats, messages, isLoading, isError} = this.props;
        return (<Messenger isLoading={isLoading} isError={isError} addChat={this.handleChatAdd} chats={chats} messages={messages} sendMessage={this.handleMessageSend}  />);
    }
}

function mapStateToProps(state, ownProps){
    const chats = state.chats.entries;
    const {match} = ownProps;

    let messages = null;

    if(match && chats[match.params.id]){
        messages = chats[match.params.id].messages;
    }

    let chatsArrayForShow = [];
    for(let key in chats){
        if(chats.hasOwnProperty(key)){
            chatsArrayForShow.push({name: chats[key].name, link: `/chats/${chats[key].id}`, unread: chats[key].unread});
        }
    }

    const lastId = Object.keys(chats).length ? Object.keys(chats).length : 0;
    const newChatId = lastId + 1;

    return {
        chats: chatsArrayForShow,
        messages,
        chatId: match ? match.params.id : null,
        newChatId,
        isLoading: state.chats.loading,
        isError: state.chats.error,
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        loadChats: () => dispatch(chatsLoad2()), //chatsLoad2
        sendMessage: (message) => dispatch(chatsSend(message)),

        addChat: (newChatId, chatName) => dispatch(chatsAdd(newChatId, chatName)),
        redirect: (id) => dispatch(push(`/chats/${id}`)),
    }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);