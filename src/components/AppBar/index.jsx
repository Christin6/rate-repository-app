import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import { useNavigate } from "react-router-native";

import AppBarTab from "./AppBarTab";
import theme from "../../theme";
import useCurrentUser from "../../hooks/useCurrentUser";
import useSignOut from "../../hooks/useSignOut";

const styles = StyleSheet.create({
    container: {
        padding: 12,
        paddingTop: Constants.statusBarHeight + 12,
        backgroundColor: theme.colors.darkBackground,
    },
});

const AppBar = () => {
    const { user } = useCurrentUser();
    const signOut = useSignOut();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOut();
        navigate("/");
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab linkUrl="/">Repositories</AppBarTab>
                {user ? (
                    <>
                        <AppBarTab linkUrl="/review-form">
                            Create a review
                        </AppBarTab>
                        <AppBarTab onPress={handleSignOut}>Sign Out</AppBarTab>
                    </>
                ) : (
                    <AppBarTab linkUrl="/signin">Sign in</AppBarTab>
                )}
            </ScrollView>
        </View>
    );
};

export default AppBar;
