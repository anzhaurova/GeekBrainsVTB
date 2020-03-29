//создание роутинга

import React, {Component} from "react";
import ReactDom from  "react-dom";

import {AboutPage} from 'pages/AboutPage';
import {ContactsPage} from 'pages/ContactsPage';
import {NotFoundPage} from 'pages/NotFoundPage';


class AppRouting extends Component {
    state={
        route: window.location.hash.substr(1)
    };

    componentDidMount() {
        window.addEventListener('hashchange',()=>{
            this.setState({route:
            window.location.hash.substr(1)});
        })
    }
    render(){
        let Child;//этот компонент мы выводим
        switch(this.state.route){
            case '':
            case '/':
                Child = AboutPage;
                break;
            case '/contacts':
                Child = ContactsPage;
                break;
            default:
                Child = NotFoundPage;
        }
        return (
            <div>
                <ul>
                    <li><a href="#/">Main</a></li>
                    <li><a href="#/about">About.Sorry, page not found</a></li>
                    <li><a href="#/contacts">Contacts</a></li>
                    <li><a href="#/something">Sorry, page not found</a></li>
                </ul>
                <div>
                    <Child />
                </div>
            </div>
        )
    }
}

ReactDom.render(
    <AppRouting />,
    document.getElementById("root"),
);

