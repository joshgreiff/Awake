import React from 'react';
import PostList from '../components/PostList'


import Auth from '../utils/auth';
import { useQuesry } from '@apollo/client';
import { QUERY_POSTS} from '../utils/queries';