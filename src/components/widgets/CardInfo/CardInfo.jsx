import React from 'react';
import FontAwesome from 'react-fontawesome';
import './cardinfo.css';

const CardInfo = props => {
    const teamName = (teams, team) => {
        let data = teams.find(item => item.id === team);
        if (data) {
            return data.name
        }
    };

    return (
        <div className="cardInfo">
            <span className="teamName">{teamName(props.teams, props.teamId)}</span>
            <span className="date">
                <FontAwesome name="clock-o" />
                {props.date}
            </span>
        </div>
    );
};

export default CardInfo;
