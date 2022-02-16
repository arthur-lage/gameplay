import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    height: 56,
  },
  iconWrapper: {
    borderRightColor: COLORS.line,
    borderRightWidth: 1,
    height: "100%",
    width: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
    fontSize: 15,
    color: COLORS.heading,
    marginLeft: 40,
    fontFamily: FONTS.text500,
    textAlign: 'center'
  },
});
