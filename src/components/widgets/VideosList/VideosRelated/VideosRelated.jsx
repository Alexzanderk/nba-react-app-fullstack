import React from 'react';

import '../videoslist.css';
import VideosListTemplate from '../VideosListTemplate';

const VideosRelated = props => {
    return (
        <div className="relatedWrapper">
            <VideosListTemplate data={props.data} teams={props.teams} />
        </div>
    );
};

export default VideosRelated;
