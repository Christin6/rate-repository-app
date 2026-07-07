import { Pressable } from "react-native";
import Text from "./Text";

const AppBarTab = ({ children }) => {
    return (
        <Pressable>
            <Text fontWeight="bold" fontSize="subheading" color="textSecondary">
                {children}
            </Text>
        </Pressable>
    );
};

export default AppBarTab;
