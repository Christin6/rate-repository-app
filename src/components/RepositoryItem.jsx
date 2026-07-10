import { Image, View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
    card: {
        backgroundColor: theme.colors.textSecondary,
        padding: 14,
        gap: 12,
    },
    cardRow: {
        flexDirection: "row",
        flex: 1,
        gap: 12,
    },
    rowSpaceEvenly: {
        justifyContent: "space-evenly",
    },
    centerColumn: {
        alignItems: "center",
        gap: 6,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 4,
        marginRight: 12,
    },
    tag: {
        backgroundColor: theme.colors.primary,
        color: theme.colors.textSecondary,
        alignSelf: "flex-start",
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 4,
    },
});

const RepositoryItem = ({ item }) => {
    let standarizedStarCount;
    let standarizedForkCount;
    if (item.stargazersCount > 999) {
        standarizedStarCount = `${(item.stargazersCount / 1000).toFixed(1)}k`;
    }
    if (item.forksCount > 999) {
        standarizedForkCount = `${(item.forksCount / 1000).toFixed(1)}k`;
    }
    return (
        <View style={styles.card}>
            <View style={styles.cardRow}>
                <Image
                    source={{ uri: item.ownerAvatarUrl }}
                    style={styles.avatar}
                />
                <View style={{ gap: 6, flex:1 }}>
                    <Text fontWeight="bold" fontSize="subheading">
                        {item.fullName}
                    </Text>
                    <Text>{item.description}</Text>
                    <Text style={styles.tag}>{item.language}</Text>
                </View>
            </View>
            <View style={[styles.cardRow, styles.rowSpaceEvenly]}>
                <View style={styles.centerColumn}>
                    <Text fontWeight="bold">{standarizedStarCount}</Text>
                    <Text>Stars</Text>
                </View>
                <View style={styles.centerColumn}>
                    <Text fontWeight="bold">{standarizedForkCount}</Text>
                    <Text>Forks</Text>
                </View>
                <View style={styles.centerColumn}>
                    <Text fontWeight="bold">{item.reviewCount}</Text>
                    <Text>Reviews</Text>
                </View>
                <View style={styles.centerColumn}>
                    <Text fontWeight="bold">{item.ratingAverage}</Text>
                    <Text>Rating</Text>
                </View>
            </View>
        </View>
    );
};

export default RepositoryItem;
