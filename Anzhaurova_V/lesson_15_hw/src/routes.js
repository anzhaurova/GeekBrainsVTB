import {Messenger} from "components/Messenger";
import {AboutPage} from "pages/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";

//описываем маршруты

export const routes = [
    {
        path:'/',
        exact: true,
        component: Messenger,
    },
    {
        path:'/about',
        exact: true,
        component: AboutPage,
    },
    {
        path:'/chats/:id([\\d]+)',
        exact: true,
        component: Messenger,
    },
    {
        path:'*',
        exact: false,
        component: NotFoundPage,
    },
]