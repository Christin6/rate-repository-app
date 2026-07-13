import { useQuery } from "@apollo/client/react";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({ orderBy, orderDirection, searchKeyword }) => {
    const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
        variables: { orderBy, orderDirection, searchKeyword },
        fetchPolicy: "cache-and-network",
    });

    const repositories = data
        ? data.repositories.edges.map(edge => edge.node)
        : [];

    return { repositories, loading, error, refetch };
}

export default useRepositories;
