import { View, Pressable, FlatList, StyleSheet, Alert } from "react-native";
import { useNavigate } from "react-router-native";

import useCurrentUser from "../hooks/useCurrentUser";
import useDeleteReview from "../hooks/useDeleteReview";
import { ReviewItemContainer } from "./ReviewItem";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        padding: 15,
        backgroundColor: theme.colors.textSecondary,
    },
    separator: {
        height: 10,
    },
    button: {
        flex: 1,
        padding: 14,
        borderRadius: 6,
        alignItems: "center",
        marginTop: 12,
    },
    viewButton: {
        backgroundColor: theme.colors.primary,
    },
    deleteButton: {
        backgroundColor: "#c0392b",
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReview = () => {
    const navigate = useNavigate();
    const [deleteReview] = useDeleteReview();
    const { user } = useCurrentUser(true);

    const reviewNodes = user ? user.reviews.edges.map((edge) => edge.node) : [];

    const handleViewRepo = (repo) => {
        navigate(`/repository/${repo.id}`);
    };

    const handleDeleteReview = (id) => {
        Alert.alert(
            "Delete review",
            "Are you sure you want to delete this review?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                { text: "Delete", onPress: () => deleteReview(id) },
            ],
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={reviewNodes}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <ReviewItemContainer
                            review={item}
                            repoName={item.repository.fullName}
                        />
                        <View style={{ flexDirection: "row", gap: 12 }}>
                            <Pressable
                                style={[styles.button, styles.viewButton]}
                                onPress={() => handleViewRepo(item.repository)}
                            >
                                <Text
                                    color="textSecondary"
                                    fontSize="subheading"
                                    fontWeight="bold"
                                >
                                    View repository
                                </Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.deleteButton]}
                                onPress={() => handleDeleteReview(item.id)}
                            >
                                <Text
                                    color="textSecondary"
                                    fontSize="subheading"
                                    fontWeight="bold"
                                >
                                    Delete review
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default UserReview;
