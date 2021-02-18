import React, { useState, useEffect } from 'react';


function HomePage(props) {
    const [searchVal, setSearchVal] = useState('');
    const changeSearchVal = (event) => {
        setSearchVal(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        props.onBtnClick(searchVal);
    }

    return <>
        <div className='searchContainer'>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    className='searchField'
                    value={searchVal}
                    onChange={changeSearchVal}
                />
                <input
                    type='submit'
                    value='search'
                    id='searchBtn'
                />
            </form>
        </div>
        
    </>;
}

export default HomePage;