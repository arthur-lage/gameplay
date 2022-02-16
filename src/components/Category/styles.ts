import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    borderRadius: 8,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: 100,
    height: 116,
    backgroundColor: COLORS.secondary40,
    justifyContent: "space-between",
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: 7,
  },
  checked: {
    width: 10,
    height: 10,
    backgroundColor: COLORS.primary,
    alignSelf: "flex-end",
    marginRight: 7,
    borderRadius: 3,
  },
  unchecked: {
    width: 10,
    height: 10,
    backgroundColor: COLORS.secondary100,
    alignSelf: "flex-end",
    marginRight: 7,
    borderBottomColor: COLORS.secondary50,
    borderWidth: 2,
    borderRadius: 3,
  },
  title: {
    fontFamily: FONTS.title700,
    color: COLORS.heading,
    fontSize: 15,
  },
  iconWithCheck: {},
  iconWithoutCheck: {
    marginTop: 20,
  },
});
