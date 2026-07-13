import { StyleSheet } from "react-native";

import theme from "../../theme";

const formStyles = StyleSheet.create({
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

export default formStyles;
