import { View, TextInput, Pressable } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import { useState } from "react";

import useSignIn from "../hooks/useSignIn";
import formStyles from "./styles/form";
import Text from "./Text";

const styles = formStyles;

const initialValues = {
    username: "",
    password: "",
};

const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
});

export const SignInContainer = ({ signInError, setSignInError, signIn, navigate, onSubmit }) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    const usernameError = formik.touched.username && formik.errors.username;
    const passwordError = formik.touched.password && formik.errors.password;

    return (
        <View style={styles.container}>
            {signInError && <Text style={styles.errorText}>{signInError}</Text>}

            <TextInput
                style={[styles.input, usernameError && styles.inputError]}
                placeholder="Username"
                value={formik.values.username}
                onChangeText={formik.handleChange("username")}
                onBlur={formik.handleBlur("username")}
            />
            {usernameError && (
                <Text style={styles.errorText}>{formik.errors.username}</Text>
            )}

            <TextInput
                style={[styles.input, passwordError && styles.inputError]}
                placeholder="Password"
                value={formik.values.password}
                onChangeText={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
                secureTextEntry
            />
            {passwordError && (
                <Text style={styles.errorText}>{formik.errors.password}</Text>
            )}

            <Pressable style={styles.button} onPress={formik.handleSubmit}>
                <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>
        </View>
    );
};

const SignIn = () => {
    const navigate = useNavigate();

    const [signIn] = useSignIn();
    const [signInError, setSignInError] = useState(null);

    const onSubmit = async (values) => {
        setSignInError(null);
        try {
            await signIn({
                username: values.username,
                password: values.password,
            });
            navigate("/");
        } catch (err) {
            setSignInError(err.message);
        }
    };

    return (
        <SignInContainer
            signInError={signInError}
            setSignInError={setSignInError}
            navigate={navigate}
            signIn={signIn}
            onSubmit={onSubmit}
        />
    );
};

export default SignIn;
