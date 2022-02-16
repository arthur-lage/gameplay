import React from "react";
import { View, Text } from "react-native";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

type Props = RectButtonProps & {
  icon: any;
  text: string;
};

export function ButtonIcon({ icon, text, ...rest }: Props) {
  return (
    <RectButton {...rest} style={styles.container}>
      <View style={styles.iconWrapper}>{icon}</View>

      <Text style={styles.title}>{text}</Text>
    </RectButton>
  );
}
