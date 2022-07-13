import { gql } from "@apollo/client"

export const QUERY_USER = gql`
    query user($username:String!){
        user(username:$username){
            _id
            username
            email
            coins
            level
            exp
            posts {
                _id
                postTitle
                postContent
                createdAt
                username
            }
            quests {
                _id
                questTitle
                questDescription
                createdAt
                username
                milestones {
                    id
                    milestoneTitle
                    milestoneDescription
                    createdAt
                    username
                }
                dailies {
                    _id
                    dailyTitle
                    dailyDescription
                    createdAt
                    username
                    difficulty
                }
            }
        }
    }
`

export const QUERY_USERS= gql `
query Users {
    users {
      _id
      username
      email
      coins
      level
      exp
      posts {
        _id
        postTitle
        postContent
        createdAt
        username
      }
      quests {
        _id
        questTitle
        questDescription
        createdAt
        username
        milestones {
          _id
          milestoneTitle
          milestoneDescription
          createdAt
          username
        }
        dailies {
          _id
          dailyTitle
          dailyDescription
          createdAt
          username
          difficulty
          timeCompleted
        }
      }
    }
  }
`

export const QUERY_ME = gql `
    {
        me {
            _id
            username
            email
            coins
            level
            exp
            posts {
                _id
                postTitle
                postContent
                createdAt
                username
            }
            quests {
                _id
                questTitle
                questDescription
                createdAt
                username
                milestones {
                    id
                    milestoneTitle
                    milestoneDescription
                    createdAt
                    username
                }
                dailies {
                    _id
                    dailyTitle
                    dailyDescription
                    createdAt
                    username
                    difficulty
                }
            }
        }
    }
`

export const QUERY_POSTS = gql `
    query Posts {
        posts {
        _id
        postTitle
        postContent
        createdAt
        username
        }
    }
`

export const QUERY_POSTS_USER = gql `
query Posts($username: String) {
    posts(username: $username) {
      _id
      postTitle
      postContent
      createdAt
      username
    }
  }
`

export const QUERY_POST = gql `
query Post($id: ID!) {
    post(_id: $id) {
      _id
      postTitle
      postContent
      createdAt
      username
    }
  }
`
export const QUERY_QUESTS = gql `
query Quest($username: String!) {
    quests(username: $username) {
      _id
      questTitle
      questDescription
      createdAt
      username
      milestones {
        _id
        milestoneTitle
        milestoneDescription
        createdAt
        username
      }
      dailies {
        _id
        dailyTitle
        dailyDescription
        createdAt
        username
        difficulty
        timeCompleted
      }
    }
  }
`

export const QUERY_QUEST = gql `
query Quest($id: ID!) {
    quest(_id: $id) {
      _id
      questTitle
      questDescription
      createdAt
      username
      milestones {
        _id
        milestoneTitle
        milestoneDescription
        createdAt
        username
      }
      dailies {
        _id
        dailyTitle
        dailyDescription
        createdAt
        username
        difficulty
        timeCompleted
      }
    }
  }
`

export const QUERY_MILESTONES = gql `
query Query($id: ID!) {
    quest(_id: $id) {
      milestones {
        _id
        milestoneTitle
        milestoneDescription
        createdAt
        username
      }
    }
  }
`

export const QUERY_DAILIES = gql `
query Query($id: ID!) {
    quest(_id: $id) {
      dailies {
        _id
        dailyTitle
        dailyDescription
        createdAt
        username
        difficulty
        timeCompleted
      }
    }
  }
`