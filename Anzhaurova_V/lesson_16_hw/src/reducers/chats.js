import update from 'react-addons-update';
import {
    CHATS_LOAD,
    CHATS_SEND,
} from 'actions/chats';

const dataBackend = {
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
};

const initialState = {
    loading: false,
    entries: {}
};

export const chatsReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case CHATS_LOAD:
            return {
                ...state,
                entries: dataBackend,
            }
        case CHATS_SEND:
            //ES5
            // return Object.assign({}, state, {
            //     entries: {
            //         [action.payload.chatId]: {
            //             messages: 
            //             state.entries[action.payload.chatId].messages.concat([{
            //                 text: action.payload.text,
            //                 author: action.payload.author,
            //             }]),
            //         }
            //     }
            // });

            //ES6
            // return {
            //     ...state,
            //     entries: {
            //         ...state.entries,
            //         [action.payload.chatId]: {
            //             ...state.entries[action.payload.chatId],

            //             messages: [
            //                 ...state.entries[action.payload.chatId].messages,
            //                 {text: action.payload.text, author: action.payload.author},
            //             ],

            //         }
            //     }
            // };

            //lib
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: {$push: [{text: action.payload.text, author: action.payload.author}]},
                    }
                }
            });
        default: 
            return state;
    }
}