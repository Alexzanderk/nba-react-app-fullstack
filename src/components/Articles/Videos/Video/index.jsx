import React, { Component } from 'react';
import { fbTeams, firebaseDB, firebaseLooper, fbVideos } from '../../../../firebase';
import '../../articles.css';
import Header from './Header';
import VideosRelated from '../../../widgets/VideosList/VideosRelated/VideosRelated';

class VideoArticle extends Component {
    state = {
        article: [],
        team: [],
        teams: [],
        related: []
    };

    componentWillMount() {
        firebaseDB
            .ref(`videos/${this.props.match.params.id}`)
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
                        });
                        this.getRelated();
                    });
            })
            .catch(console.error);
    }

    getRelated = () => {
        fbTeams.once('value').then(snapshot => {
            const teams = firebaseLooper(snapshot);

            fbVideos
                .orderByChild('team')
                .equalTo(this.state.article.team)
                .limitToFirst(3)
                .once('value')
                .then(snapshot => {
                    const related = firebaseLooper(snapshot);
                    this.setState({
                        teams,
                        related
                    });
                });
        });
    };

    render() {
        const article = this.state.article;
        const team = this.state.team;

        return (
            <div className="body">
                <Header teamData={team[0]} />
                <div className="videoWrapper">
                    <h1>{article.title}</h1>
                    <iframe
                        title="videopalyer"
                        width="100%"
                        height="300px"
                        src={`https://www.youtube.com/embed/${article.url}`}
                    />
                </div>
                <VideosRelated data={this.state.related} teams={this.state.teams} />
            </div>
        );
    }
}

export default VideoArticle;
