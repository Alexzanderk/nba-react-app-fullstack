import React, { Component } from 'react';
import { fbArticles, firebaseLooper } from '../../../firebase';
import SliderTemplate from './Slider_template';
import axios from 'axios';
import { URL } from '../../../config'

class Slider extends Component {
    state = {
        news: []
    };

    componentWillMount() {
        axios
            .get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.start + this.props.amount }`)
            .then(res => {
                this.setState({ news: res.data });
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
