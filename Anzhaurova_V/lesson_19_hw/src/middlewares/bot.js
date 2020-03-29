import {CHATS_SEND, chatsSend} from 'actions/chats';

const timers = {};

export function botMiddleware(store)
{
    return function(next){
        return function(action){
            if(action.type === CHATS_SEND){
                const {chatId, author} = action.payload;

                if(author !== 'Bot'){
                            clearTimeout(timers[chatId]);
                            timers[chatId] = setTimeout(() => {
                                store.dispatch(chatsSend({chatId, text: `Hi, ${author}! Это автоответ бота`, author: 'Bot'}));
                            }, 3000);
                        }
            }
            return next(action);
        }
    }
}