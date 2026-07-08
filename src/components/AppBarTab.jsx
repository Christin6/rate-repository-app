import { Link } from "react-router-native";
import Text from "./Text";

const AppBarTab = ({ linkUrl, children }) => {
    return (
        <Link to={linkUrl}>
            <Text fontWeight="bold" fontSize="subheading" color="textSecondary">
                {children}
            </Text>
        </Link>
    );
};

export default AppBarTab;
