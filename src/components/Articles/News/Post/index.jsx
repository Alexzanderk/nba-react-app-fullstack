import React, { Component } from 'react';
import { firebase, fbTeams, firebaseLooper, firebaseDB } from '../../../../firebase';

import '../../articles.css';
import Header from './Header';

class NewsArticle extends Component {
    state = {
        article: [],
        team: [],
        imageURL: ''
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

                        this.getImageURL(article.image);

                        this.setState({
                            article,
                            team
                        });
                    });
            })
            .catch(console.error);
    }

    getImageURL = filename => {
        firebase
            .storage()
            .ref('images')
            .child(filename)
            .getDownloadURL()
            .then(url => {
                console.log(url);
                this.setState({ imageURL: url });
            });
    };

    render() {
        const article = this.state.article;
        const team = this.state.team[0];
        console.log(this.state);

        return (
            <div className="articleWrapper">
                <Header teamData={team} date={article.date} author={article.author} />

                <div className="articleBody">
                    <h1>{article.title}</h1>
                    <div
                        className="articleImage"
                        style={{
                            background: `url('${this.state.imageURL}')`
                        }}
                    />
                    <div
                        className="articleText"
                        dangerouslySetInnerHTML={{
                            __html: article.body
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default NewsArticle;
