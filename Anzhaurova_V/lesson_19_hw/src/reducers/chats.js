import update from 'react-addons-update';
import {
    CHATS_LOAD,
    CHATS_SEND,
    CHATS_ADD,
    CHATS_FIRE,
    CHATS_UNFIRE,
    CHATS_REQUEST,
    CHATS_SUCCESS,
    CHATS_FAILURE,
} from 'actions/chats';

const dataBackend = {
    '1': {
        id: 1,
        name: 'chat1',
        unread: false,
        messages: [
            {text: 'Это чат №1!', author: 'Bot'},
        ],
    },
    '2': {
        id: 2,
        name: 'chat2',
        unread: false,
        messages: [
            {text: 'Привет!!! Это чат №2!', author: 'Bot'},
        ],
    },
    '3': {
        id: 3,
        name: 'chat3',
        unread: false,
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
        case CHATS_ADD: 
            const {name, chatId} = action.payload;
            return update(state, {
                entries: {$merge: {
                    [chatId]: {
                        id: chatId,
                        messages: [],
                        name,
                    }
                }}
            });

        case CHATS_FIRE: {
            const chatId = action.payload;
            return update(state, {
                entries: {
                    [chatId]: {
                        $merge: {
                            unread: true,
                        }
                    }
                }
            });
        }
        case CHATS_UNFIRE: {
            const chatId = action.payload;
            if(!state.entries[chatId]) return state;
            return update(state, {
                entries: {
                    [chatId]: {
                        $merge: {
                            unread: false,
                        }
                    }
                }
            });
        }

        //redux-api-middleware
        case CHATS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case CHATS_SUCCESS:
            return {
                ...state,
                loading: false,
                entries: action.payload,
            };
        case CHATS_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: true,
                };
        default: 
            return state;
    }
}