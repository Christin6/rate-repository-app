import Text from "./Text";

import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useFormik } from "formik";

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
        marginBottom: 15,
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

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
    });

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={formik.values.username}
                onChangeText={formik.handleChange("username")}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={formik.values.password}
                onChangeText={formik.handleChange("password")}
                secureTextEntry
            />
            <Pressable style={styles.button} onPress={formik.handleSubmit}>
                <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>
        </View>
    );
};

export default SignIn;
