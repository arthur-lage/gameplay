import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 16,
    marginTop: getStatusBarHeight(),
  },
  bannerWrapper: {
    height: 234,
    position: "relative",
  },
  bannerImage: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  title: {
    color: COLORS.heading,
    fontSize: 20,
    fontFamily: FONTS.title700,
  },
  game: {
    fontFamily: FONTS.title700,
    fontSize: 28,
    color: COLORS.heading,
  },
  description: {
    fontFamily: FONTS.text400,
    fontSize: 13,
    color: COLORS.heading,
    lineHeight: 21,
    marginTop: 14,
    width: 311,
  },
  appointmentInfo: {
    bottom: 24,
    left: 24,
    position: "absolute",
  },
  scheduledGamesHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
    marginTop: 24,
    paddingHorizontal: 24,
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
  players: {
    paddingHorizontal: 24
  },
  divisor: {
    width: 267,
    alignSelf: "flex-end",
    height: 1,
    backgroundColor: COLORS.secondary40,
    marginVertical: 12,
  },
  buttonWrapper: {
    paddingHorizontal: 24,
    marginTop: 'auto',
    marginBottom: 10
  }
});
