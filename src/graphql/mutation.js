import { gql } from "@apollo/client";

export const SIGN_IN = gql`
    mutation SignIn($username: String!, $password: String!) {
        authenticate(
            credentials: { username: $username, password: $password }
        ) {
            accessToken
        }
    }
`;

export const CREATE_USER = gql`
    mutation CreateUser($username: String!, $password: String!) {
        createUser(user: { username: $username, password: $password }) {
            id
        }
    }
`;

export const CREATE_REVIEW = gql`
    mutation CreateReview($review: CreateReviewInput!) {
        createReview(review: $review) {
            id
            repositoryId
        }
    }
`;
