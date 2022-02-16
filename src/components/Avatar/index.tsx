import React from "react";

import { View, Image, ImageSourcePropType } from "react-native";

import { styles } from "./styles";

type Props = {
  imageUrl: string;
};

export function Avatar({ imageUrl }: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
    </View>
  );
}
