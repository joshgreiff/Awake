import React from 'react';
import PostList from '../components/PostList'


import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS, QUERY_ME } from '../utils/queries';


const Posts = () => {
    const { loading, data } = useQuery(QUERY_POSTS);
    const { data: userData } = useQuery(QUERY_ME);
    const posts = data?.posts || [];
    console.log(posts)
    return (
        <div className='posts'>
            <div className='post-list'>
                {loading ? (
                    <div>Loading...</div>
                ): (
                    <PostList
                    posts = {posts}
                    />
                )}
            </div>
        </div>
    )
}

export default Posts;