import Text from "./Text";
import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";
import { useNavigate } from "react-router-native";
import * as yup from "yup";
import theme from "../theme";
import { useState } from "react";

import useSignIn from "../hooks/useSignIn";

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: theme.colors.textSecondary,
    },
    input: {
        borderWidth: 1,
        borderColor: theme.colors.textPrimary,
        borderRadius: 6,
        padding: 12,
        marginBottom: 15,
        fontSize: theme.fontSizes.body,
    },
    inputError: {
        borderColor: "red",
    },
    errorText: {
        color: "red",
        marginBottom: 15,
    },
    button: {
        backgroundColor: theme.colors.primary,
        borderRadius: 6,
        padding: 14,
        alignItems: "center",
    },
    buttonText: {
        color: theme.colors.textSecondary,
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading,
    },
});

const initialValues = {
    username: "",
    password: "",
};

const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
});

const SignIn = () => {
    const navigate = useNavigate();

    const [signIn] = useSignIn();
    const [signInError, setSignInError] = useState(null);

    const onSubmit = async (values) => {
        setSignInError(null);
        try {
            await signIn({ username: values.username, password: values.password });
            navigate("/");
        } catch (err) {
            setSignInError(err.message);
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    const usernameError = formik.touched.username && formik.errors.username;
    const passwordError = formik.touched.password && formik.errors.password;

    return (
        <View style={styles.container}>
            {signInError && (
                <Text style={styles.errorText}>{signInError}</Text>
            )}

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

export default SignIn;
