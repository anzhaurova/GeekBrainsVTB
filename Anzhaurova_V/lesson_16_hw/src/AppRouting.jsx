import React, {Component} from 'react';
import ReactDom from 'react-dom';

import {AboutPage} from 'pages/AboutPage';
import {ContactsPage} from 'pages/ContactsPage';
import {NotFoundPage} from 'pages/NotFoundPage';

class AppRouting extends Component {
    state = {
        route: window.location.hash.substr(1)
    };

    componentDidMount(){
        window.addEventListener('hashchange', () => {
            this.setState({route: window.location.hash.substr(1)});
        });
    }

    render(){
        let Child; //Тот компонент, который мы выводим
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
                    <li><a href="#/about">About - page not found</a></li>
                    <li><a href="#/contacts">Contacts</a></li>
                    <li><a href="#/sadsadsdsadf">Page not found</a></li> 
                </ul>
                <div>
                    <Child />
                </div>
            </div>
        );
    }
}

ReactDom.render(
    <AppRouting />,
    document.getElementById('root'),
);