import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  appointmentFooter: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  info: {
    marginLeft: 20,
  },
  guildAndCategoryWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  guildName: {
    color: COLORS.heading,
    fontFamily: FONTS.title700,
    fontSize: 18,
  },
  category: {
    color: COLORS.highlight,
    fontFamily: FONTS.text400,
    fontSize: 13,
    marginLeft: 100,
  },
  gameWrapper: {
    marginVertical: 8,
  },
  game: {
    color: COLORS.highlight,
    fontFamily: FONTS.text400,
    fontSize: 13,
  },
  calendarWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  calendar: {
    color: COLORS.heading,

    fontFamily: FONTS.text500,
    fontSize: 13,
    marginLeft: 12,
  },
  usersWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  users: {
    color: COLORS.heading,
    fontFamily: FONTS.text500,
    fontSize: 13,
    marginLeft: 6,
  },
  imageWrapper: {
    borderWidth: 1,
    borderColor: COLORS.secondary50,
    borderRadius: 8,
    width: 64,
    height: 64
  },
  image: {
    width: "100%",
    height: "100%"
  },
});
