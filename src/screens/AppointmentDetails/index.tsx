import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../theme";
import { styles } from "./styles";

import { FontAwesome } from "@expo/vector-icons";

import BannerImg from "../../assets/banner.png";
import { LinearGradient } from "expo-linear-gradient";
import { ButtonIcon } from "../../components/ButtonIcon";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { Player } from "../../components/Player";

export function AppointmentDetails() {
  const players = [
    {
      id: "1",
      name: "Diego",
      icon: "https://github.com/diego3g.png",
      status: "Disponível",
      statusColor: COLORS.online,
    },
    {
      id: "2",
      name: "Mayk",
      icon: "https://github.com/maykbrito.png",
      status: "Ausente",
      statusColor: COLORS.absent,
    },
    {
      id: "3",
      name: "Jakeliny",
      icon: "https://github.com/jakeliny.png",
      status: "Indisponível",
      statusColor: COLORS.unavaliable,
    },
    {
      id: "4",
      name: "Diego",
      icon: "https://github.com/diego3g.png",
      status: "Disponível",
      statusColor: COLORS.online,
    },
    {
      id: "5",
      name: "Mayk",
      icon: "https://github.com/maykbrito.png",
      status: "Ausente",
      statusColor: COLORS.absent,
    },
    {
      id: "6",
      name: "Jakeliny",
      icon: "https://github.com/jakeliny.png",
      status: "Indisponível",
      statusColor: COLORS.unavaliable,
    },
    {
      id: "7",
      name: "Diego",
      icon: "https://github.com/diego3g.png",
      status: "Disponível",
      statusColor: COLORS.online,
    },
    {
      id: "8",
      name: "Mayk",
      icon: "https://github.com/maykbrito.png",
      status: "Ausente",
      statusColor: COLORS.absent,
    },
    {
      id: "9",
      name: "Jakeliny",
      icon: "https://github.com/jakeliny.png",
      status: "Indisponível",
      statusColor: COLORS.unavaliable,
    },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.secondary40, COLORS.secondary85]}
        style={styles.header}
      >
        <TouchableOpacity activeOpacity={0.5}>
          <FontAwesome name="arrow-left" color={COLORS.heading} size={24} />
        </TouchableOpacity>

        <Text style={styles.title}>Lendários</Text>
        
        <TouchableOpacity activeOpacity={0.5}>
          <FontAwesome name="share-alt" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
        colors={[COLORS.secondary15, COLORS.secondary20]}
        style={styles.bannerWrapper}
      >
        <Image style={styles.bannerImage} source={BannerImg} />
        <View style={styles.appointmentInfo}>
          <Text style={styles.game}>League of Legends</Text>
          <Text style={styles.description}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </LinearGradient>
      <View style={styles.scheduledGamesHeader}>
        <Text style={styles.scheduledGamesTitle}>Jogadores</Text>
        <Text style={styles.scheduledGamesTotal}>Total 3</Text>
      </View>

      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Player key={item.id} data={item} />}
        ItemSeparatorComponent={() => <View style={styles.divisor}></View>}
        showsVerticalScrollIndicator={false}
        style={styles.players}
      />

      <View style={styles.buttonWrapper}>
        <ButtonIcon
          icon={
            <MaterialCommunityIcons
              color={COLORS.heading}
              size={24}
              name="discord"
            />
          }
          text={"Entrar no servidor do discord"}
        />
      </View>
    </View>
  );
}
