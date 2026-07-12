import { FlatList, View, StyleSheet, Text } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, loading }) => {
    if (loading) return <Text>Loading...</Text>;

    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item, index, separators }) => (
                <RepositoryItem item={item} />
            )}
        />
    );
};

const RepositoryList = () => {
    const { repositories, loading } = useRepositories();
    return (
        <RepositoryListContainer
            repositories={repositories}
            loading={loading}
        />
    );
};

export default RepositoryList;
