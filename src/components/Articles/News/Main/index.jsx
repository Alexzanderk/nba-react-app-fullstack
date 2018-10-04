import React from 'react';

import Slider from '../../../widgets/slider/Slider'
import NewsList from '../../../widgets/NewsList/NewsList'

const NewsMain = props => {
    return (
        <div className='body'>
            <Slider 
                type='feature'
                settings={{
                    dots: false
                }}
                start={0}
                amount={3}
            />

            <NewsList 
                type='cardMain'
                loadMore={true}
                start={0}
                amount={6}
            />
        </div>
    );
};

export default NewsMain;
