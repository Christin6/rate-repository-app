import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 14,
        padding: 12,
        paddingTop: Constants.statusBarHeight + 12,
        backgroundColor: theme.colors.darkBackground,
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab linkUrl="/">Repositories</AppBarTab>
            <AppBarTab linkUrl="/signin">Sign in</AppBarTab>
        </View>
    );
};

export default AppBar;
