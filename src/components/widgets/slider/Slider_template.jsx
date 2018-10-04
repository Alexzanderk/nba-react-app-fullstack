import React from 'react';
import Slick from 'react-slick';
import { Link } from 'react-router-dom';
import './slider.css';

const SliderTemplate = props => {
    let template = null;
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...props.settings
    };

    switch (props.type) {
        case 'feature':
            template = props.data.map((item, i) => {
                return (
                    <div key={i}>
                        <div className="feature_item">
                            <div
                                className="feature_image"
                                style={{
                                    background: `url(/images/articles/${item.image})`
                                }}
                            >
                                <Link to={`/articles/${item.id}`}>
                                    <div className="feature_caption">{item.title}</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            });
            break;
      
            default:
            template = null;
            break;
    }

    return <Slick {...settings}>{template}</Slick>;
};

export default SliderTemplate;
