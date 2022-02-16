import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { COLORS } from "../../theme";
import { styles } from "./styles";

import { FontAwesome } from "@expo/vector-icons";
import { CategorySelect } from "../../components/CategorySelect";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.secondary40, COLORS.secondary85]}
        style={styles.header}
      >
        <TouchableOpacity activeOpacity={0.5}>
          <FontAwesome name="arrow-left" color={COLORS.heading} size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Agendar partida</Text>
        <View></View>
      </LinearGradient>

      <Text style={styles.categoryText}>Categoria</Text>

      <CategorySelect
        selectedCategory={category}
        handleCategorySelect={handleCategorySelect}
        enableCheck={true}
      />

      <View style={styles.selectServerWrapper}>
        <TouchableOpacity activeOpacity={0.7} style={styles.selectServer}>
          <LinearGradient
            style={styles.selectServerBox}
            colors={[COLORS.secondary50, COLORS.secondary70]}
          />

          <View style={styles.selectServerContent}>
            <Text style={styles.selectServerText}>Selecione um servidor</Text>
            <FontAwesome
              name="chevron-right"
              color={COLORS.highlight}
              size={8}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.dateTimeWrapper}>
        <View style={styles.dateWrapper}>
          <Text style={styles.dateText}>Dia e mês</Text>
          <TextInput
            placeholder="dd/mm"
            placeholderTextColor={COLORS.highlight}
            style={styles.dateInput}
          />
        </View>
        <View style={styles.timeWrapper}>
          <Text style={styles.timeText}>Horário</Text>

          <TextInput
            placeholder="hh:mm"
            placeholderTextColor={COLORS.highlight}
            style={styles.timeInput}
          />
        </View>
      </View>

      <View style={styles.descriptionHeaderWrapper}>
        <Text style={styles.descriptionText}>Descrição</Text>
        <Text style={styles.descriptionMaxCharacters}>Max 100 caracteres</Text>
      </View>

      <View style={styles.descriptionInputWrapper}>
        <TextInput
          style={styles.descriptionInput}
          multiline
          numberOfLines={10}
        />
      </View>

      <View style={styles.scheduleButtonWrapper}>
        <TouchableOpacity style={styles.scheduleButton} activeOpacity={0.7}>
          <Text style={styles.scheduleButtonText}>Agendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
