import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";

import LoL from "../../assets/lol.png";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../theme";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

export type GuildProps = {
  name: string;
  icon: any;
  owner: boolean;
  id: string;
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  description: string;
  game: string;
  date: string;
  time: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export function Appointment({ data, ...rest }: Props) {
  return (
    <RectButton {...rest} style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={LoL} style={styles.image} />
      </View>

      <View style={styles.info}>
        <View style={styles.guildAndCategoryWrapper}>
          <Text style={styles.guildName}>{data.guild.name}</Text>
          <Text style={styles.category}>{data.category}</Text>
        </View>
        <View style={styles.gameWrapper}>
          <Text style={styles.game}>{data.game}</Text>
        </View>
        <View style={styles.appointmentFooter}>
          <View style={styles.calendarWrapper}>
            <MaterialCommunityIcons
              name="calendar"
              color={COLORS.primary}
              size={24}
            />
            <Text style={styles.calendar}>Ter {data.date} às {data.time}</Text>
          </View>
          <View style={styles.usersWrapper}>
            <FontAwesome name="user" size={24} color={COLORS.primary} />
            <Text style={styles.users}>3</Text>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
