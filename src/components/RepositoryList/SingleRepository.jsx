import { View, StyleSheet, FlatList, Linking, Pressable } from "react-native";
import { useParams } from "react-router-native";
import Text from "../Text";
import RepositoryItem from "./RepositoryItem"; // adjust to your actual path
import useRepository from "../../hooks/useRepository";
import theme from "../../theme";
import ReviewItem from "../ReviewItem";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.appBackground,
    },
    card: {
        backgroundColor: theme.colors.textSecondary,
    },
    openRepoBtn: {
        backgroundColor: theme.colors.primary,
        margin: 15,
        padding: 14,
        borderRadius: 6,
        alignItems: "center",
    },
    separator: {
        height: 10,
        backgroundColor: theme.colors.appBackground,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const SingleRepositoryContainer = ({ repository, loading, reviews }) => {
    if (loading) return <Text>Loading...</Text>;
    if (!repository) return <Text>Repository not found</Text>;

    const openInGithub = () => {
        Linking.openURL(repository.url);
    };

    return (
        <View style={styles.container} testID="singleRepositoryView">
            <FlatList
                data={reviews}
                renderItem={({ item }) => <ReviewItem review={item} />}
                keyExtractor={({ id }) => id}
                ListHeaderComponent={() => (
                    <>
                        <View style={styles.card}>
                            <RepositoryItem item={repository} />
                            <Pressable
                                onPress={openInGithub}
                                style={styles.openRepoBtn}
                            >
                                <Text
                                    color="textSecondary"
                                    fontSize="subheading"
                                    fontWeight="bold"
                                >
                                    Open in GitHub
                                </Text>
                            </Pressable>
                        </View>
                        <ItemSeparator />
                    </>
                )}
                ItemSeparatorComponent={<ItemSeparator />}
            />
        </View>
    );
};

const SingleRepository = () => {
    const { id } = useParams();
    const { repository, reviews, loading } = useRepository(id);
    return (
        <SingleRepositoryContainer
            repository={repository}
            loading={loading}
            reviews={reviews}
        />
    );
};

export default SingleRepository;
