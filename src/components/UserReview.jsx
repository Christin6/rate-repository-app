import { View, Pressable, FlatList, StyleSheet } from "react-native";

import useCurrentUser from "../hooks/useCurrentUser";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReview = () => {
    const { user } = useCurrentUser(true);

    const reviewNodes = user ? user.reviews.edges.map(edge => edge.node)
        : [];

    return (
        <View>
            <FlatList
                data={reviewNodes}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item }) => (
                    <ReviewItem review={item} />
                )}
            />
        </View>
    );
};

export default UserReview;
