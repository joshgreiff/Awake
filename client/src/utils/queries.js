import { gql } from "@apollo/client"

export const QUERY_USERS=gql`
    query user($username:String!){
        user(username:$username){
            _id
            username
            email
        }
    }
`

// export const QUERY_QUESTS=gql`
//     query Quests($username: String!) {
//         quests(username: $username) {
//         _id
//         questTitle
//         questDescription
//         createdAt
//         }
//     }
// `