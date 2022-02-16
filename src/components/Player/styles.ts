import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 6
  },
  imageWrapper: {
    marginRight: 16,
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.secondary50,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  playerInfoWrapper: {},
  nameWrapper: {},
  name: {
    color: COLORS.heading,
    fontSize: 18,
    marginBottom: 8,
    fontFamily: FONTS.title700,
  },
  statusWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  statusIcon: {
    marginRight: 8,
  },
  statusText: {
    color: COLORS.highlight,
    fontSize: 13,
    fontFamily: FONTS.text400,
  },
  divisor: {},
  players: {},
});
