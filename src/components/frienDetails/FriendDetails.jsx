import React from 'react';
import { useLoaderData, useNavigate,  } from 'react-router-dom';

const FriendDetails = () => {
   const friends = useLoaderData()
   console.log(friends) 
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
  }
    return (
        <div>
            <h4>new ID: {friends.id}</h4>
            <h3>title: {friends.title}</h3>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default FriendDetails;