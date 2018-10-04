import React from 'react';
import './videoslist.css';

import { Link } from 'react-router-dom';
import CardInfo from '../CardInfo/CardInfo';

const VideosListTemplate = props => {
    return props.data.map((item, i) => (
        <Link to={`/videos/${item.id}`} key={i}>
            <div className="videoListItem_wrapper">
                <div
                    className="left"
                    style={{
                        background: `url('/images/videos/${item.image}')`
                    }}
                >
                    <div></div>
                </div>
                <div className="right">
                    <CardInfo teams={props.teams} teamId={item.team} date={item.date} />
                    <h2>{item.title}</h2>
                </div>
            </div>
        </Link>
    ));
};

export default VideosListTemplate;
