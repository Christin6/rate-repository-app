import { Pressable, FlatList, View, StyleSheet, Text } from "react-native";
import { useNavigate } from "react-router-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Searchbar } from 'react-native-paper';

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import useDebounce from "../../hooks/useDebounce";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
    repositories,
    loading,
    onPressItem,
    orderBy,
    searchKeyword,
    orderDirection,
    onSortChange,
    onSearchChange
}) => {
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
            ListHeaderComponent={
                <>
                    <Searchbar
                          placeholder="Search"
                          onChangeText={onSearchChange}
                          value={searchKeyword}
                        />
                    <Picker
                        selectedValue={`${orderBy}-${orderDirection}`}
                        onValueChange={onSortChange}
                    >
                        <Picker.Item
                            label="Latest repositories"
                            value="CREATED_AT-DESC"
                        />
                        <Picker.Item
                            label="Highest rated repositories"
                            value="RATING_AVERAGE-DESC"
                        />
                        <Picker.Item
                            label="Lowest rated repositories"
                            value="RATING_AVERAGE-ASC"
                        />
                    </Picker>
                </>
            }
        />
    );
};

const RepositoryList = () => {
    const [orderBy, setOrderBy] = useState("CREATED_AT");
    const [orderDirection, setOrderDirection] = useState("DESC");
    const [searchKeyword, setSearchKeyword] = useState("");

    const debouncedSearchKeyword = useDebounce(searchKeyword, 500);

    const { repositories, loading } = useRepositories({
        orderBy,
        orderDirection,
        searchKeyword: debouncedSearchKeyword,
    });
    const navigate = useNavigate();

    const onPressItem = (id) => navigate(`/repository/${id}`);

    const onSortChange = (value) => {
        const [newOrderBy, newOrderDirection] = value.split("-");
        setOrderBy(newOrderBy);
        setOrderDirection(newOrderDirection);
    };

    return (
        <RepositoryListContainer
            repositories={repositories}
            loading={loading}
            onPressItem={onPressItem}
            searchKeyword={searchKeyword}
            orderBy={orderBy}
            orderDirection={orderDirection}
            onSortChange={onSortChange}
            onSearchChange={setSearchKeyword}
        />
    );
};

export default RepositoryList;
