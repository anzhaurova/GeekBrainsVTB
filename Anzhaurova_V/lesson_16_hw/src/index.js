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
} from 'react-router-dom';
import {Provider} from 'react-redux';

import {Messenger} from 'components/Messenger';
import {AboutPage} from 'pages/AboutPage';
import {routes} from './routes';
import {store} from './store';

// const MessageList = (props) => {
//     return props.messages.map((item, index) => <Message text={item} key={index} />);
// };
// MessageList.propTypes = {
//     item: PropTypes.string.isRequired
// };

// export {MessageList};

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                {/* <Route exact path="/" component={Messenger} />
                <Route exact path="/about" component={AboutPage} /> */}

                {routes.map((route, index) => <Route key={index} {...route} />)}
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);