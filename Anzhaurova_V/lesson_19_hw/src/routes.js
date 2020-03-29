// import {Messenger} from 'components/Messenger';
import {MessengerRedux} from 'containers/MessengerContainer';
import {AboutPage} from 'pages/AboutPage';
import {NotFoundPage} from 'pages/NotFoundPage';

export const routes = [
    {
        path: '/',
        exact: true,
        component: MessengerRedux,
    },
    {
        path: '/about',
        exact: true,
        component: AboutPage,
    },
    {
        path: '/chats/:id([\\d]+)',
        exact: true,
        component: MessengerRedux
    },
    {
        path: '*',
        exact: false,
        component: NotFoundPage,
    }
];