import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './sideNav.css';
import { firebase } from '../../../firebase';

const SideNavItem = props => {
    const items = [
        {
            icon: 'home',
            text: 'Home',
            link: '/',
            login: ''
        },
        {
            icon: 'file-text-o',
            text: 'News',
            link: '/news',
            login: ''
        },
        {
            icon: 'play',
            text: 'Videos',
            link: '/videos',
            login: ''
        },
        {
            icon: 'sign-in',
            text: 'Dashboard',
            link: '/dashboard',
            login: false
        },
        {
            icon: 'sign-in',
            text: 'Sign in',
            link: '/sign-in',
            login: true
        },
        {
            icon: 'sign-out',
            text: 'Sign out',
            link: '/sign-out',
            login: false
        }
    ];

    const element = (item, i) => (
        <div key={i} className="option">
            <Link to={item.link}>
                <FontAwesome name={item.icon} />
                {item.text}
            </Link>
        </div>
    );

    const restriced = (item, i) => {
        let template = null;
        if (props.user === null && item.login) {
            template = element(item, i);
        }

        if (props.user !== null && !item.login) {
            if (item.link === '/sign-out') {
                template = (
                    <div
                        key={i}
                        className="option"
                        onClick={() => {
                            firebase
                                .auth()
                                .signOut()
                                .then(() => {
                                    props.history.push('/');
                                });
                        }}
                    >
                        <FontAwesome name={item.icon} />
                        {item.text}
                    </div>
                );
            } else {
                template = element(item, i);
            }
        }

        return template;
    };

    return items.map((item, i) => {
        return item.login !== '' ? restriced(item, i) : element(item, i);
    });
};

export default withRouter(SideNavItem);
