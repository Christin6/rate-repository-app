import { View, StyleSheet } from "react-native";

import theme from "../theme";
import Text from "./Text";

const RATING_SIZE = 50;

const styles = StyleSheet.create({
    reviewItem: {
        padding: 15,
        backgroundColor: theme.colors.textSecondary,
    },
    ratingCircle: {
        width: RATING_SIZE,
        height: RATING_SIZE,
        borderRadius: RATING_SIZE/2,
        borderWidth: 2,
        borderColor: theme.colors.primary,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15,
    },
    ratingText: {
        color: theme.colors.primary,
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading,
    },
    reviewContent: {
        flex: 1,
    },
    username: {
        fontWeight: theme.fontWeights.bold,
        marginBottom: 4,
    },
    date: {
        color: "#586069",
        marginBottom: 10,
    },
    reviewText: {
        lineHeight: 20,
    },
});


export const ReviewItemContainer = ({ review, repoName }) => {
    const formattedDate = new Date(review.createdAt).toLocaleDateString(
        "en-GB",
        { day: "numeric", month: "short", year: "numeric" },
    );

    const displayName = repoName
            ? repoName
            : review.user.username;

    return (
        <View style={{"flexDirection": "row"}} >
            <View style={styles.ratingCircle}>
                <Text style={styles.ratingText}>{review.rating}</Text>
            </View>
            <View style={styles.reviewContent}>
                <Text style={styles.username}>{displayName}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
                <Text style={styles.reviewText}>{review.text}</Text>
            </View>
        </View>
    );
};

const ReviewItem = ({ review }) => {
    return (
        <View style={styles.reviewItem}>
            <ReviewItemContainer review={review} />
        </View>
    )
}

export default ReviewItem;
