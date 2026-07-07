import { Image, View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
    card: {
        backgroundColor: theme.colors.textSecondary,
        padding: 14,
    },
    cardRow: {
        flexDirection: "row",
    },
    rowSpaceEvenly: {
        justifyContent: "space-evenly",
    },
    centerColumn: {
        alignItems: "center",
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 4,
        marginRight: 12,
    },
});

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardRow}>
                <Image
                    source={{ uri: item.ownerAvatarUrl }}
                    style={styles.avatar}
                />
                <View>
                    <Text fontWeight="bold" fontSize="subheading">
                        {item.fullName}
                    </Text>
                    <Text>{item.description}</Text>
                    <Text>{item.language}</Text>
                </View>
            </View>
            <View style={[styles.cardRow, styles.rowSpaceEvenly]}>
                <View style={styles.centerColumn}>
                    <Text fontWeight="bold">{item.stargazersCount}</Text>
                    <Text>Stars</Text>
                </View>
                <View style={styles.centerColumn}>
                    <Text fontWeight="bold">{item.forksCount}</Text>
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
