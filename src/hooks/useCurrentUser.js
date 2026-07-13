import { useQuery } from "@apollo/client/react";
import { ME } from "../graphql/queries";

const useCurrentUser = (includeReviews) => {
    const { data, loading, error, refetch } = useQuery(ME, {
        variables: { includeReviews },
        fetchPolicy: "cache-and-network",
    });

    return { user: data?.me, loading, error, refetch };
};

export default useCurrentUser;
