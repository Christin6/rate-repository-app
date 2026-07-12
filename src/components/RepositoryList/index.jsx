import { Pressable, FlatList, View, StyleSheet, Text } from "react-native";
import { useNavigate } from "react-router-native";

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, loading, onPressItem }) => {
    if (loading) return <Text>Loading...</Text>;

    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (
                <Pressable onPress={() => onPressItem(item.id)}>
                    <RepositoryItem item={item} />
                </Pressable>
            )}
        />
    );
};

const RepositoryList = () => {
    const { repositories, loading } = useRepositories();
    const navigate = useNavigate();

    const onPressItem = (id) => navigate(`/repository/${id}`);

    return (
        <RepositoryListContainer
            repositories={repositories}
            loading={loading}
            onPressItem={onPressItem}
        />
    );
};

export default RepositoryList;
