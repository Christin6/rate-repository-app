import { useMutation, useApolloClient } from "@apollo/client/react";

import { SIGN_IN } from "../graphql/mutation";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const [mutate, result] = useMutation(SIGN_IN);

    const signIn = async ({ username, password }) => {
        const { data } = await mutate({ variables: { username, password } });
        const { accessToken } = data.authenticate;

        await authStorage.setAccessToken(accessToken)
        await apolloClient.resetStore();
    };

    return [signIn, result];
};

export default useSignIn;
