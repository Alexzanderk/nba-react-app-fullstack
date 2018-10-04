import React from 'react';
import FontAwesome from 'react-fontawesome';
import './cardinfo.css';
import moment from 'moment';

const CardInfo = props => {
    const teamName = (teams, team) => {
        let data = teams.find(item => item.teamId === team);
        if (data) {
            return data.name;
        }
    };

    const formatDate = date => {
        return moment(date).format('DD.MM.YYYY')
    };

    return (
        <div className="cardInfo">
            <span className="teamName">{teamName(props.teams, props.teamId)}</span>
            <span className="date">
                <FontAwesome name="clock-o" />
                {formatDate(props.date)}
            </span>
        </div>
    );
};

export default CardInfo;
