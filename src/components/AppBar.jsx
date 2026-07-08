import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        padding: 12,
        paddingTop: Constants.statusBarHeight + 12,
        backgroundColor: theme.colors.darkBackground,
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab linkUrl="/">Repositories</AppBarTab>
                <AppBarTab linkUrl="/signin">Sign in</AppBarTab>
            </ScrollView>
        </View>
    );
};

export default AppBar;
