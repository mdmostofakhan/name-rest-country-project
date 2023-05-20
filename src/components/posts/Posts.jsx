import React from 'react';

const Posts = ({post}) => {
    console.log(post)
    const {flags, status, id, region, name} = post;
    return (
        <div className='border border-blue-900 mt-10 p-4 rounded-lg bg-slate-200'>
            <h3>name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>{region}</p>
            <p>{status}</p>
        </div>
    );
};

export default Posts;