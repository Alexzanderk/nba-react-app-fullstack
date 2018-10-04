import React from 'react';
import Slider from '../widgets/slider/Slider';
import NewsList from '../widgets/NewsList/NewsList';
import VideosList from '../widgets/VideosList/VideosList';

const Home = () => {
    return (
        <div className='home'>
            <Slider
                type="feature"
                start={0}
                amount={3}
                settings={{
                    dots: true,
                    dotsClass: 'slick-dots dots'
                }}
            />
            <NewsList 
                type='card'
                loadmore={true}
                start={3}
                amount={3}
            />
            <VideosList 
                type='card'
                title={true}
                loadmore={true}
                start={0}
                amount={3}
            />
        </div>
    );
};

export default Home;
