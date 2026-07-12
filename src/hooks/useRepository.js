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

    return { repository, loading, error, refetch };
}

export default useRepository;
