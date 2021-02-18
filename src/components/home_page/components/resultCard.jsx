import React from 'react';
import { NavLink } from 'react-router-dom';

function ResultCard(props) {
    return <>
        <div className='resultCard'>
            <img className='img' src={props.userInfo.avatar_url}></img>
            <div className='idName' >{props.userInfo.login}</div>
            <NavLink exact to={`/SearchGitHubUser/${props.userInfo.login}`} className='moreBtn'>MORE</NavLink>
        </div>
    </>;
}

export default ResultCard;