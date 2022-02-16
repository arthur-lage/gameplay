import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { styles } from "./styles";
import { COLORS } from "../../theme";
import { View, Text } from "react-native";

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  enableCheck?: boolean;
};

export function Category({
  title,
  icon: Icon,
  checked = false,
  enableCheck = false,
  ...rest
}: Props) {
  return (
    <RectButton {...rest}>
      <LinearGradient
        colors={[COLORS.secondary50, COLORS.secondary70]}
        style={styles.container}
      >
        <LinearGradient colors={[ checked ? COLORS.secondary85 : COLORS.secondary50, COLORS.secondary40  ]} style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          {enableCheck && (
            <View style={checked ? styles.checked : styles.unchecked}></View>
          )}

          <Icon style={ enableCheck ? styles.iconWithCheck : styles.iconWithoutCheck } width={48} height={48} />

          <Text style={styles.title}> {title} </Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}
