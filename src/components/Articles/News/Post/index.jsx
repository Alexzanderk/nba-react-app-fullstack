import React, { Component } from 'react';
import { fbTeams, firebaseLooper, firebaseDB } from '../../../../firebase';

import '../../articles.css';
import Header from './Header';

class NewsArticle extends Component {
    state = {
        article: [],
        team: []
    };

    componentWillMount() {
        firebaseDB
            .ref(`articles/${this.props.match.params.id}`)
            .once('value')
            .then(snapshot => {
                let article = snapshot.val();
                fbTeams
                    .orderByChild('id')
                    .equalTo(article.team)
                    .once('value')
                    .then(snapshot => {
                        const team = firebaseLooper(snapshot);
                        this.setState({
                            article,
                            team
                        })
                    })
            })
            .catch(console.error);
    }

    render() {
        const article = this.state.article;
        const team = this.state.team[0];

        return (
            <div className="article articleWrapper">
                <Header teamData={team} date={article.date} author={article.author} />

                <div className="articleBody">
                    <h1>{article.title}</h1>
                    <div
                        className="articleImage"
                        style={{
                            background: `url('/images/articles/${article.image}')`
                        }}
                    />
                    <div className="articleText">{article.body}</div>
                </div>
            </div>
        );
    }
}

export default NewsArticle;
