import React, { Component } from 'react';
import './videoslist.css';
import axios from 'axios';

import { URL } from '../../../config';
import Button from '../Button/Button';
import VideosListTemplate from './VideosListTemplate';

class VideosList extends Component {
    state = {
        teams: [],
        videos: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    };

    componentWillMount() {
        this.request(this.state.start, this.state.end);
    }

    request = (start, end) => {
        if (this.state.teams.length < 1) {
            axios
                .get(`${URL}/teams`)
                .then(res => {
                    this.setState({ teams: res.data });
                })
                .catch(console.error);
        }

        axios
            .get(`${URL}/videos?_start=${start}&_end=${end}`)
            .then(res => {
                this.setState({ 
                    videos: [...this.state.videos, ...res.data],
                    start,
                    end
                });
            })
            .catch(console.error);
    };

    renderTitle = () => {
        return this.props.title ? (
            <h3>
                <strong>NBA</strong> Videos
            </h3>
        ) : null;
    };

    renderVideos = () => {
        let template = null;
        switch (this.props.type) {
            case 'card':
                template = <VideosListTemplate data={this.state.videos} teams={this.state.teams} />
                break;

            default:
                template = null;
                break;
        }
        return template;
    };

    loadMore = () => {
        let end = this.state.end + this.props.amount;
        this.request(this.state.end, end);
    };

    renderButton = () => {
        return this.props.loadmore ? (
            <Button type="loadmore" loadMore={() => this.loadMore()} cta="Load More Videos" />
        ) : (
            <Button type="linkTo" cta="More Videos" linkTo="/videos" />
        );
    };

    render() {
        return (
            <div className="videoList_wrapper">
                {this.renderTitle()}
                {this.renderVideos()}
                {this.renderButton()}
            </div>
        );
    }
}

export default VideosList;