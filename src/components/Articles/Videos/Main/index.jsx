import React from 'react';
import VideosList from '../../../widgets/VideosList/VideosList'

const VideosMain = props => {
    return (
        <div className='body'>
            <VideosList 
                type='card'
                title={false}
                loadmore={true}
                start={0}
                amount={6}
            />
        </div>
    );
};

export default VideosMain;
