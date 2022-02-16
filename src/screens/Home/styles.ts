import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 42,
    width: "100%",
    marginTop: getStatusBarHeight() + 26,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  info: {
    flexDirection: "column",
    marginLeft: 20,
  },
  username: {
    color: COLORS.heading,
    fontFamily: FONTS.title500,
    fontSize: 24,
  },
  usernameBold: {
    fontFamily: FONTS.title700,
  },
  description: {
    color: COLORS.highlight,
    fontSize: 13,
  },
  addButtonWrapper: {
    marginLeft: "auto",
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  plusIcon: {},
  content: {
    flexDirection: "column",
    paddingHorizontal: 24,
    marginTop: 40,
  },
  scheduledGamesHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  scheduledGamesTitle: {
    color: COLORS.heading,
    fontFamily: FONTS.title700,
    fontSize: 18,
  },
  scheduledGamesTotal: {
    color: COLORS.highlight,
    fontFamily: FONTS.text500,
    fontSize: 13,
  },
  divisor: {
    width: 267,
    alignSelf: "flex-end",
    height: 1,
    backgroundColor: COLORS.secondary40,
    marginVertical: 16,
  },
  matches: {},
});
