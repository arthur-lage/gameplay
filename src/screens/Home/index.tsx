import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

import { Avatar } from "../../components/Avatar";
import { COLORS } from "../../theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CategorySelect } from "../../components/CategorySelect";
import { FlatList } from "react-native-gesture-handler";
import { Appointment } from "../../components/Appointment";
import { categories } from "../../utils/categories";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [category, setCategory] = useState("");
  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: categories[0].title,
      description: "Hoje iremos ganhar todas.",
      game: "League of Legends",
      date: '15/02',
      time: '21:00h'
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: categories[1].title,
      description: "Hoje iremos ganhar todas.",
      game: "League of Legends",
      date: '16/02',
      time: '15:00h'
    },
    {
      id: "3",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: categories[1].title,
      description: "Hoje iremos ganhar todas.",
      game: "League of Legends",
      date: '17/02',
      time: '19:30h'
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppoinmentDetails () {
    const navigation = useNavigation()

    // @ts-ignore
    navigation.navigate("AppointmentDetails")
  }

  return (
    <Background>
      <View style={styles.header}>
        <Avatar imageUrl={"https://github.com/arthur-lage.png"} />
        <View style={styles.info}>
          <Text style={styles.username}>
            Olá, <Text style={styles.usernameBold}>Arthur</Text>
          </Text>
          <Text style={styles.description}>Hoje é dia de vitória</Text>
        </View>
        <View style={styles.addButtonWrapper}>
          <TouchableOpacity activeOpacity={0.7} style={styles.addButton}>
            <MaterialCommunityIcons
              name="plus"
              color={COLORS.heading}
              size={24}
            />
          </TouchableOpacity>
        </View>
      </View>
      
      <CategorySelect
        selectedCategory={category}
        handleCategorySelect={handleCategorySelect}
      />

      <View style={styles.content}>
        <View style={styles.scheduledGamesHeader}>
          <Text style={styles.scheduledGamesTitle}>Partidas agendadas</Text>
          <Text style={styles.scheduledGamesTotal}>Total 6</Text>
        </View>

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Appointment onPress={handleAppoinmentDetails} key={item.id} data={item} />}
          ItemSeparatorComponent={() => <View style={styles.divisor}></View>}
          showsVerticalScrollIndicator={false}
          style={styles.matches}
        />
      </View>
    </Background>
  );
}
