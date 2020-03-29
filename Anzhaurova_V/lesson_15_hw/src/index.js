import React from 'react';
import ReactDom from 'react-dom';
import PropTypes, {exact} from 'prop-types';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import {Messenger} from 'components/Messenger';
import {AboutPage} from 'pages/AboutPage';
import {routes} from "./routes";

// const MessageList = (props) => {
//     return props.messages.map((item, index) => <Message text={item} key={index} />);
// };
// MessageList.propTypes = {
//     item: PropTypes.string.isRequired
// };

// export {MessageList};

ReactDom.render(
    <BrowserRouter>
        <Switch>
            // <Route exact path="/" component={Messenger} />
            // <Route exact path="/about" component={AboutPage} />
        {routes.map((route, index) => <Route key={index} {...route} />)}
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'),
);