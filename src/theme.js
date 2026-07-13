import { Platform } from "react-native";

const theme = Platform.select({
  ios: require("./theme.ios").default,
  android: require("./theme.android").default,
  default: require("./theme.ios").default, // fallback for web
});

export default theme;
