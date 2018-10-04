import React, { Component } from 'react';
import { fbArticles, firebaseLooper } from '../../../firebase';
import SliderTemplate from './Slider_template';

class Slider extends Component {
    state = {
        news: []
    };

    componentWillMount() {
        fbArticles
            .limitToFirst(3)
            .once('value')
            .then(snapshot => {
                const news = firebaseLooper(snapshot);
                this.setState({
                    news
                });
            });
    }

    render() {
        return (
            <div className="slider_cust">
                <SliderTemplate
                    data={this.state.news}
                    type={this.props.type}
                    settings={this.props.settings}
                />
            </div>
        );
    }
}

export default Slider;
