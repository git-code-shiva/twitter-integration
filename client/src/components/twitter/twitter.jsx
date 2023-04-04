// import {TwitterApi} from 'twitter-api-v2';

// const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAJglcgEAAAAAB3LNXzDxtq00FvSXXWuHgXoiQGs%3D9iCFOIQe2gMWQ9lukXtMjIQe6wQ3bZQpTBz7f6fkjC2qlJNd5x');

// const readOnlyClient = twitterClient.readOnly;

// const user = await readOnlyClient.v2.userByUsername('plhery');
// await twitterClient.v1.tweet('Hello, this is a test.');

import {Timeline} from 'react-twitter-widgets';
import Header from '../header/header';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenStorage } from '../../App';
import { useNavigate } from 'react-router-dom';

function MyTwitterTimeline(){
    // const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [followersCount, setFollowersCount] = useState(0);
    const [token, setToken] = useContext(tokenStorage);

    useEffect(()=>{
        const getFollowersCount = async ()=>{
            try{
                // const token = localStorage.getItem('twitterToken')
                // const tokenSecret = localStorage.getItem('twitterTokenSecret');
                const response = await axios.get(`https://api.twitter.com/1.1/users/show.json?screen_name=__shiva__sharma`,{
                    // headers:{
                    //     'Authorization':`Bearer ${token}`,
                    //     'Authorization-Secret':tokenSecret,
                    // }
                });
                console.log(response.data)
                setFollowersCount(response.data.followers_count);
            }catch(error){
                console.log(error)
            }
        }

       
            getFollowersCount();
        
    },[])

    if(token){
        return (
            <>
            <Header/>
            <h1>My Twitter TimeLine</h1>
            <div style={{display:'flex', justifyContent:'center'}}>
            <Timeline dataSource={{
                sourceType:'profile',
                screenName:'__shiva__sharma'
            }}
            options={{
                height:'500',
                width:'600'
            }}  />
            </div>
            <div>Followers{followersCount}</div>
            </>
        )
    }
    else{
        return(
            <>
            {navigate('/')}
            </>
        )
    }
   
}
export default MyTwitterTimeline;