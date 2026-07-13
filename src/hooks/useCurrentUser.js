import { useQuery } from "@apollo/client/react";
import { ME } from "../graphql/queries";

const useCurrentUser = (includeReviews) => {
    const { data, loading, error } = useQuery(ME, {
        variables: { includeReviews },
        fetchPolicy: "cache-and-network",
    });

    return { user: data?.me, loading, error };
};

export default useCurrentUser;
