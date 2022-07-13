import React from 'react';
import { Link } from 'react-router-dom'


export default function PostList({ posts }) {
    if(!posts.length) {
        return <h3 className="text-white">No Posts Yet</h3>
    }
    
    return (
        <div>
            {posts && posts.map(post => (
                <div key={post._id}>
                    <div className='post-title'>
                        <Link to={`/post/${post._id}`}><h3>{post.postTitle}</h3></Link>
                    </div>
                    <div className='post-content'>
                        <p>{post.postContent}</p>
                    </div>
                    <div className='post-footer'>
                        Posted by <Link to={`/profile/${post.username}`}>{post.username}</Link> on {post.createdAt}
                    </div>
                </div>
            ))}
        </div>
    )
}