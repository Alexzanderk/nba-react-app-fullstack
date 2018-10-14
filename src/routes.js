import React from 'react';
import { Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Layout from './hoc/Layout/Layout';
import NewsArticle from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/index';
import NewsMain from './components/Articles/News/Main/index';
import VideosMain from './components/Articles/Videos/Main/index';
import SingIn from './components/SingIn/SingIn';
import Dashboard from './components/Dashboard/Dashboard';

import PrivatRoutes from './components/authRoutes/PrivatRoutes';
import PublicRoutes  from './components/authRoutes/PublicRoutes'

const Routes = props => {
    return (
        <Layout user={props.user}>
            <Switch>
                <PublicRoutes {...props} restricted={false} path="/" exact component={Home} />
                <PublicRoutes {...props} restricted={false} path="/news" exact component={NewsMain} />
                <PublicRoutes {...props} restricted={false} path="/videos" exact component={VideosMain} />
                <PublicRoutes {...props} restricted={false} path="/articles/:id" exact component={NewsArticle} />
                <PublicRoutes {...props} restricted={false} path="/videos/:id" exact component={VideoArticle} />
                <PublicRoutes {...props} restricted={true} path="/sign-in" exact component={SingIn} />
                <PrivatRoutes {...props} path="/dashboard" exact component={Dashboard} />
            </Switch>
        </Layout>
    );
};

export default Routes;
