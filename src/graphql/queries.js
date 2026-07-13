import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
    query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
        repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
            edges {
                node {
                    id
                    ownerAvatarUrl
                    fullName
                    description
                    language
                    stargazersCount
                    forksCount
                    reviewCount
                    ratingAverage
                }
            }
        }
    }
`;

export const ME = gql`
    query Me {
        me {
            id
            username
        }
    }
`;

export const GET_SINGLE_REPOSITORY = gql`
    query GetSingleRepository($repoId: ID!) {
        repository(id: $repoId) {
            id
            ownerAvatarUrl
            fullName
            description
            language
            stargazersCount
            forksCount
            reviewCount
            ratingAverage
            url
            reviews {
              edges {
                node {
                  id
                  text
                  rating
                  createdAt
                  user {
                    id
                    username
                  }
                }
              }
            }
        }
    }
`;
