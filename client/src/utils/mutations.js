import { gql } from '@apollo/client'

export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`

export const LOGIN_USER = gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
`
export const ADD_POST = gql `
mutation AddPost($postTitle: String!, $postContent: String!) {
  addPost(postTitle: $postTitle, postContent: $postContent) {
    _id
    postTitle
    postContent
    createdAt
    username
  }
}
`

export const ADD_QUEST = gql`
mutation Mutation($questTitle: String!, $questDescription: String) {
  addQuest(questTitle: $questTitle, questDescription: $questDescription) {
    _id
  }
}
`

export const ADD_MILESTONE = gql `
mutation Mutation($questId: ID!, $milestoneTitle: String!, $milestoneDescription: String) {
  addMilestone(questId: $questId, milestoneTitle: $milestoneTitle, milestoneDescription: $milestoneDescription) {
    _id
  }
}
`

export const ADD_DAILY = gql`
mutation Mutation($questId: ID!, $dailyTitle: String!, $difficulty: String!, $dailyDescription: String) {
  addDaily(questId: $questId, dailyTitle: $dailyTitle, difficulty: $difficulty, dailyDescription: $dailyDescription) {
    _id
  }
}
`


