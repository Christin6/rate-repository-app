import { useMutation } from "@apollo/client/react";

import { DELETE_REVIEW } from "../graphql/mutation";
import useCurrentUser from "./useCurrentUser";

const useDeleteReview = () => {
    const [mutate, result] = useMutation(DELETE_REVIEW);
    const { refetch } = useCurrentUser(true);

    const deleteReview = async (id) => {
        try {
            const { data } = await mutate({ variables: { id } });
            await refetch();
            return data;
        } catch (err) {
            console.log(err);
            throw err; // re-throw so the caller can still show an error message
        }
    };

    return [deleteReview, result];
};

export default useDeleteReview;
