import {createStore, applyMiddleware, compose} from 'redux'; //delete compose after applyMiddl
import {rootReducer} from 'reducers';
import logger from 'redux-logger';
import {apiMiddleware} from 'redux-api-middleware';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";

import {loggerMiddleware} from 'middlewares/logger';
import {botMiddleware} from 'middlewares/bot';
import {chatActiveMiddleware} from 'middlewares/chatActive';

import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import {initReducer} from 'reducers';

export const history = createBrowserHistory();

//Before redux-persist
//export const store = createStore(initReducer(history), applyMiddleware(loggerMiddleware, botMiddleware, routerMiddleware(history)));

// export const store = createStore(rootReducer, applyMiddleware(logger));
//export const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, botMiddleware));
//export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//After redux-persist
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //localstorage

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['chats', 'router'],
};

export function initStore(){
    const initialStore = {};

    const store = createStore(
        persistReducer(persistConfig, initReducer(history)),
        initialStore,
        composeWithDevTools(
            applyMiddleware(loggerMiddleware, botMiddleware, chatActiveMiddleware, apiMiddleware, thunk, routerMiddleware(history)),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        )
    );
    // const store = createStore(
    //     rootReducer,
    //     initialStore,
    //     compose(
    //         applyMiddleware(thunk, routerMiddleware(history)),
    //         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    //     )
    // );

    const persistor = persistStore(store);
    return {store, persistor};
}
