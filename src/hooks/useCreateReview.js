import { useMutation } from "@apollo/client/react";

import { CREATE_REVIEW } from "../graphql/mutation";

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);

    const createReview = async ({ ownerName, repositoryName, rating, text }) => {
        const { data } = await mutate({
            variables: {
                review: {
                    ownerName,
                    repositoryName,
                    rating: Number(rating),
                    text,
                },
            }
        })

        return data;
    };

    return [createReview, result];
};

export default useCreateReview;
