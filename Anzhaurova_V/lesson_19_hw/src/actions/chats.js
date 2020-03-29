import {createAction} from 'redux-api-middleware';

export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_SEND = 'CHATS_SEND';
export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_FIRE = 'CHATS_FIRE';
export const CHATS_UNFIRE = 'CHATS_UNFIRE';


export const chatsLoad = () => ({
    type: CHATS_LOAD
});

export const chatsSend = (message) => ({
    type: CHATS_SEND,
    payload: message,
});

export const chatsAdd = (chatId, name) => ({
    type: CHATS_ADD,
    payload: {chatId, name},
});

export const chatsFire = (chatId) => ({
    type: CHATS_FIRE,
    payload: chatId,
});

export const chatsUnFire = (chatId) => ({
    type: CHATS_UNFIRE,
    payload: chatId,
});

//redux-api-middleware
export const CHATS_REQUEST = 'CHATS_LOAD/CHATS_REQUEST';
export const CHATS_SUCCESS = 'CHATS_LOAD/CHATS_SUCCESS';
export const CHATS_FAILURE = 'CHATS_LOAD/CHATS_FAILURE';

// export const chatsLoad2 = () => createAction({
//     endpoint: '/api/chats.json',
//     method: 'GET',
//     headers: {'Content-Type': 'application/json'},
//     types: [
//         CHATS_REQUEST,
//         CHATS_SUCCESS,
//         CHATS_FAILURE,
//     ],
// });

//redux-thunk
export const chatsLoadRequest = () => ({
    type: CHATS_REQUEST
});

export const chatsLoadSuccess = (data) => ({
    type: CHATS_SUCCESS,
    payload: data,
});

export const chatsLoadFailure = (error) => ({
    type: CHATS_FAILURE,
    payload: error,
});

export const chatsLoad2 = () => {
    return async (dispatch) => {
        try {
            dispatch(chatsLoadRequest());
            const result = (await fetch('/api/chats.json'));
            dispatch(chatsLoadSuccess(await result.json()));
        } catch(error)
        {
            dispatch(chatsLoadFailure(error));
        }
    };
};