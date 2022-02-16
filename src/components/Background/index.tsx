import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import { COLORS } from "../../theme";

import { styles } from "./styles";

type Props = {
  children: React.ReactNode;
};

export function Background({ children }: Props) {
  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.secondary80, COLORS.secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
