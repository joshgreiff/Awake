import React from 'react';
import DashPosts from '../components/DashPosts';
import DashUser from '../components/DashUser';
import DashQuests from '../components/DashQuests';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { Navigate } from 'react-router-dom'
import { QUERY_ME } from '../utils/queries';


const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_ME);
    console.log(data);
    const loggedIn = Auth.loggedIn();

    if (!loggedIn) {
        return <Navigate to="/login" />
    }

    return (
        <><div className="flex justify-center db-center dashboard">
            <div className='quest-section bg-gray-400 text-center border-2 border-black bg-grey-400'>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <DashQuests
                        quests={data.me.quests}
                        milestones={data?.me.quests.milestones || []}
                        dailies={data?.me.quests.dailies || []}
                        title='Your quests'
                    />
                )}
            </div>
            <div className="dashboard-rows">
                <div className='profile-section border-2 bg-gray-400 text-center border-black bg-gray-400'>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <DashUser
                            me={data?.me || []}
                        />
                    )}
                </div>
                <div className='post-section border-2 bg-gray-400 text-center border-black bg-gray-400'>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <DashPosts
                            posts={data.me.posts}
                            title='Your posts'
                        />
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard;