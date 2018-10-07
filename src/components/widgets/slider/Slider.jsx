import React, { Component } from 'react';
import { firebase, fbArticles, firebaseLooper } from '../../../firebase';
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
                
                const asyncFunction = (item, i, cb) => {
                    firebase
                        .storage()
                        .ref('images')
                        .child(item.image)
                        .getDownloadURL()
                        .then(url => {
                            news[i].image = url;
                            cb();
                        });
                };

                let requests = news.map((item, i) => {
                    return new Promise(resolve => {
                        asyncFunction(item, i, resolve);
                    });
                });

                Promise.all(requests).then(() => {
                    this.setState({news})
                })
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
