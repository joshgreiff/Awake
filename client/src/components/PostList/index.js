import React from 'react';
import { Link } from 'react-router-dom'


export default function PostList({ posts }) {
    if(!posts.length) {
        return <h3 className="text-white">No Posts Yet</h3>
    }
    
    return (
        <div className='w-screen'>
            {posts && posts.map(post => (
                <div key={post._id} className='my-4 bg-gray-400 mx-8 rounded-md border-gray-600 border-solid'>
                    <div className='post-title bg-gray-600 rounded-t-md hover:bg-gray-700'>
                        <Link to={`/post/${post._id}`}><h3 className='text-indigo-50 ml-4 text-2xl font'>{post.postTitle}</h3></Link>
                    </div>
                    <div className='post-content'>
                        <p className='ml-4 text-xl font text-gray-700'>{post.postContent}</p>
                    </div>
                    <div className='post-footer bg-gray-500 rounded-b-md'>
                        <p className='ml-4 text-xs font text-gray-800'>Posted by <Link to={`/profile/${post.username}`}>{post.username}</Link> on {post.createdAt}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}