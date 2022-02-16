import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
  },
  content: {
    marginTop: -40,
  },
  title: {
    color: COLORS.heading,
    textAlign: "center",
    fontSize: 40,
    marginBottom: 15,
    lineHeight: 40,
    fontFamily: FONTS.title700
  },
  subtitle: {
    color: COLORS.heading,
    lineHeight: 40,
    marginBottom: 64,
    textAlign: "center",
    fontSize: 15,
    fontFamily: FONTS.text400
  },
});
