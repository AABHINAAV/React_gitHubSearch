import React from 'react';
import { useParams } from 'react-router-dom';
import './specific.css';

function UserDetails(props) {
    return <>
        <div className='container'>
                <img
                    src={props.userInfo.avatar_url}
                />
            <div className='gridContainer'>
                <div className='titleName'>login name</div>
                <div className='titleResult'>{props.userInfo.login}</div>
                <div className='titleName'>name</div>
                <div className='titleResult'>{props.userInfo.name}</div>
                <div className='titleName'>company</div>
                <div className='titleResult'>{props.userInfo.company}</div>
                <div className='titleName'>user bio</div>
                <div className='titleResult'>{props.userInfo.bio}</div>
                <div className='titleName'>followers</div>
                <div className='titleResult'>{props.userInfo.followers}</div>
                <div className='titleName'>following</div>
                <div className='titleResult'>{props.userInfo.following}</div>
                <div className='titleName'>git hub repo</div>
                <a href={props.userInfo.html_url} className='githublink' target="_blank">{props.userInfo.login}</a>
            </div>
        </div>
    </>;
}

export default UserDetails;