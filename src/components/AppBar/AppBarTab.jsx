import { Link } from "react-router-native";
import { Pressable } from "react-native";
import Text from "../Text";

const AppBarTab = ({ linkUrl, onPress, children }) => {
    const content = (
        <Text fontWeight="bold" fontSize="subheading" color="textSecondary">
            {children}
        </Text>
    );

    if (linkUrl) {
        return (
            <Link to={linkUrl} style={{ marginRight: 16 }}>
                {content}
            </Link>
        );
    }

    return (
        <Pressable onPress={onPress} style={{ marginRight: 16 }}>
            {content}
        </Pressable>
    );
};

export default AppBarTab;
