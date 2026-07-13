import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import RepositoryList from "./RepositoryList";
import SingleRepository from "./RepositoryList/SingleRepository";
import SignIn from "./Signin";
import SignUp from "./SignUp";
import AppBar from "./AppBar";
import ReviewForm from "./ReviewForm";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.appBackground,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/review-form" element={<ReviewForm />} />
                <Route path="/repository/:id" element={<SingleRepository />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </View>
    );
};

export default Main;
