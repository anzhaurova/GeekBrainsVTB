import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Profile extends Component{
    render() {
        return (
            <div>
                <Link to="/">Вернуться к чатам</Link>
            </div>
        )
    }
}