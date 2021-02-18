import React from 'react';
import Spinner from './Spinner';
import ResultCard from './resultCard'

function Users(props) {
    return <>
        <div className='results'>
            {
                props.loading ?
                    <Spinner />
                    : <ResultCard userInfo={props.userInfo} key={props.userInfo.id} />
            }
        </div>
    </>;
}

export default Users;