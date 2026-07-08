import { Link } from "react-router-native";
import Text from "./Text";

const AppBarTab = ({ linkUrl, children }) => {
    return (
        <Link to={linkUrl} style={{ marginRight: 16 }}>
            <Text fontWeight="bold" fontSize="subheading" color="textSecondary">
                {children}
            </Text>
        </Link>
    );
};

export default AppBarTab;
