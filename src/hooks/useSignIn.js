import { useMutation } from "@apollo/client/react";

import { SIGN_IN } from "../graphql/mutation";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
      const response = await mutate({ variables: { username, password } });

      return response.data.authenticate;
  };

  return [signIn, result];
};


export default useSignIn;
