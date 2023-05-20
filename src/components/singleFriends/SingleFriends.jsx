import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleFriends = ({friend}) => {
    // console.log(friend)
    const {userId, id, title,} = friend;

    const navigation = useNavigate()
    const handleShowButton = () => {
        navigation(`/friend/${id}`)
    }

    return (
        <div className=' border border-indigo-600 p-4 mb-6'>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>{userId}</p>
            <Link to={`/friend/${id}`}>show friend detail</Link>
            <button onClick={handleShowButton}>show button</button>
       </div>
    );
};

export default SingleFriends;