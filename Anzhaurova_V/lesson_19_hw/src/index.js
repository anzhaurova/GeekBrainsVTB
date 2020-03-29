import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {
    BrowserRouter,
    HashRouter,
    MemoryRouter,
    StaticRouter, //Только для серверного рендеринга
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {PersistGate} from 'redux-persist/integration/react';

import {Messenger} from 'components/Messenger';
import {AboutPage} from 'pages/AboutPage';
import {routes} from './routes';
import {initStore, history} from './store';

const {store, persistor} = initStore();


ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
            {/* <BrowserRouter> */}
                <Switch>
                    <Redirect from="/test" to="/" />
                    {/* <Route exact path="/" component={Messenger} />
                    <Route exact path="/about" component={AboutPage} /> */}

                    {routes.map((route, index) => <Route key={index} {...route} />)}
                </Switch>
            {/* </BrowserRouter> */}
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);