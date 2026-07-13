import { View, TextInput, Pressable } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import { useState } from "react";

import useSignUp from "../hooks/useSignUp";
import formStyles from "./styles/form";
import Text from "./Text";

const styles = formStyles;

const initialValues = {
    username: "",
    password: "",
    passwordConfirmation: "",
};

const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords don't match")
        .required("Password confirmation is required"),
});

export const SignUpContainer = ({ signUpError, setsignUpError, signUp, navigate, onSubmit }) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    const usernameError = formik.touched.username && formik.errors.username;
    const passwordError = formik.touched.password && formik.errors.password;
    const passwordConfirmationError = formik.touched.passwordConfirmation && formik.errors.passwordConfirmation

    return (
        <View style={styles.container}>
            {signUpError && <Text style={styles.errorText}>{signUpError}</Text>}

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

            <TextInput
                style={[styles.input, passwordConfirmationError && styles.inputError]}
                placeholder="Confirm assword"
                value={formik.values.passwordConfirmation}
                onChangeText={formik.handleChange("passwordConfirmation")}
                onBlur={formik.handleBlur("passwordConfirmation")}
                secureTextEntry
            />
            {passwordConfirmationError && (
                <Text style={styles.errorText}>{formik.errors.passwordConfirmation}</Text>
            )}

            <Pressable style={styles.button} onPress={formik.handleSubmit}>
                <Text style={styles.buttonText}>Sign up</Text>
            </Pressable>
        </View>
    );
};

const SignUp = () => {
    const navigate = useNavigate();

    const [signUp] = useSignUp();
    const [signUpError, setsignUpError] = useState(null);

    const onSubmit = async (values) => {
        setsignUpError(null);
        try {
            await signUp({
                username: values.username,
                password: values.password,
            });
            navigate("/signin");
        } catch (err) {
            setsignUpError(err.message);
        }
    };

    return (
        <SignUpContainer
            signUpError={signUpError}
            setsignUpError={setsignUpError}
            navigate={navigate}
            signUp={signUp}
            onSubmit={onSubmit}
        />
    );
};

export default SignUp;
