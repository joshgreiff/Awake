import { gql } from "@apolo/client"

export const QUERY_USERS=gql`
    query getUsers{
        users{
            username
        }
    }
`