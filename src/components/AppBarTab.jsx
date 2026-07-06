import { Text, Pressable, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textSecondary,
        fontSize: theme.fontSizes.subheading,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.bold,
    },
});

const AppBarTab = ({ children }) => {
    return (
        <Pressable>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
};

export default AppBarTab;
