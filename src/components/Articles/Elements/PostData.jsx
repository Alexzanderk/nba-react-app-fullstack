import React from 'react';
import moment from 'moment';

const PostData = props => {
    return (
        <div className="articlePostData">
            <div>
                Date:
                <span>{moment(props.data.date).format('DD.MM.YYYY')}</span>
            </div>
            <div>
                Author:
                <span>{props.data.author}</span>
            </div>
        </div>
    );
};

export default PostData;
