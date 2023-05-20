import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFriends from '../singleFriends/SingleFriends';

const Friend = () => {
    const friends = useLoaderData()
    // console.log(friends)
    return (
        <div>
            <h4>hello my friend: {friends.length}</h4>
            <div>
                {
                    friends.map(friend => <SingleFriends
                    key={friend.id}
                    friend={friend}
                    ></SingleFriends> )
                }
            </div>
        </div>
    );
};

export default Friend;