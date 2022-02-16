import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";

import { FontAwesome } from "@expo/vector-icons";

export type AppointmentProps = {
  id: string;
  name: string;
  icon: any;
  status: string;
  statusColor: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export function Player({ data, ...rest }: Props) {
  return (
    <RectButton {...rest} style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: data.icon }} style={styles.image} />
      </View>

      <View style={styles.playerInfoWrapper}>
        <View style={styles.nameWrapper}>
          <Text style={styles.name}>{data.name}</Text>
        </View>
        <View style={styles.statusWrapper}>
          <FontAwesome
            name="circle"
            color={data.statusColor}
            size={8}
            style={styles.statusIcon}
          />
          <Text style={styles.statusText}>{data.status}</Text>
        </View>
      </View>
    </RectButton>
  );
}
