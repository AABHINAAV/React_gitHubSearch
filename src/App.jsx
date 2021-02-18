import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import About from './components/about_page/About';
import HomePage from './components/home_page/HomePage';
import Error from './components/error_page/error';
import UserDetails from './components/user_details_page/userDetail';
import Users from './components/home_page/components/users';
import './index.css';
import axios from 'axios';

function App() {
    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState('');


    // function called from HomePage
    const searchUser = async (userName) => {
        setLoading(true);
        const res = await axios.get(`https://api.github.com/users/${userName}`)
            .catch(error => { console.log('no such user') });
        setUserInfo(res.data);
        setLoading(false);
    };

    return <>
        <NavBar />
        <Switch>
            <Route
                exact path='/'
                render={
                    () => <>
                        <HomePage
                            onBtnClick={searchUser}
                        />
                        {
                            userInfo == '' ?
                                null
                                : <Users
                                    loading={loading} userInfo={userInfo}
                                />
                        }
                    </>
                }
            />
            <Route path='/about' component={About} />
            <Route path='/SearchGitHubUser/' render={() => <UserDetails userInfo={userInfo} />} />
            <Route component={Error} />
        </Switch>
    </>;
}

export default App;