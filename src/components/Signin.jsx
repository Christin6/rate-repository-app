import Text from "./Text";

import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";

import theme from "../theme";

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
        fontSize: theme.fontSizes.body,
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
    const onSubmit = (values) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={formik.values.username}
                onChangeText={formik.handleChange("username")}
                onBlur={formik.handleBlur("username")}
            />
            {formik.touched.username && formik.errors.username && (
                <Text style={{ color: "red", marginBottom: 15 }}>
                    {formik.errors.username}
                </Text>
            )}
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={formik.values.password}
                onChangeText={formik.handleChange("password")}
                onBlur={formik.handleBlur("username")}
                secureTextEntry
            />
            {formik.touched.password && formik.errors.password && (
                <Text style={{ color: "red", marginBottom: 15 }}>
                    {formik.errors.password}
                </Text>
            )}
            <Pressable style={styles.button} onPress={formik.handleSubmit}>
                <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>
        </View>
    );
};

export default SignIn;
