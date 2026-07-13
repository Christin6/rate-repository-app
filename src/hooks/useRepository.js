import { useQuery } from "@apollo/client/react";

import { GET_SINGLE_REPOSITORY } from "../graphql/queries";

const useRepository = (repoId) => {
    const { data, error, loading, refetch } = useQuery(GET_SINGLE_REPOSITORY, {
        variables: { repoId },
        fetchPolicy: "cache-and-network",
    });

    const repository = data
        ? data.repository
        : null;

    const reviews = data
        ? data.repository.reviews.edges.map(edge => edge.node)
        : [];

    return { repository, reviews, loading, error, refetch };
}

export default useRepository;
