import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";

import { categories } from "../../utils/categories";
import { Category } from "../Category";

type Props = {
  selectedCategory: string;
  handleCategorySelect: (categoryId: string) => void;
};

export function CategorySelect({ selectedCategory, handleCategorySelect }: Props) {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          icon={category.icon}
          title={category.title}
          key={category.id}
          checked={category.id === selectedCategory}
          onPress={() => handleCategorySelect(category.id)}
        />
      ))}
    </ScrollView>
  );
}
