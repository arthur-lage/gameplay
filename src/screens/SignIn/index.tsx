import React from "react";
import { View, Image, Text } from "react-native";

import { styles } from "./styles";
import Illustration from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

import { useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../theme";

export function SignIn() {
  const navigation = useNavigation();

  const handleSignIn = () => {
    // @ts-ignore
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image source={Illustration} style={styles.image} resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se
          {`\n`}e organize suas
          {`\n`}
          jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
        </Text>
        <ButtonIcon
          onPress={handleSignIn}
          icon={
            <MaterialCommunityIcons
              name="discord"
              color={COLORS.heading}
              size={24}
            />
          }
          text={"Entrar com Discord"}
        />
      </View>
    </View>
  );
}
