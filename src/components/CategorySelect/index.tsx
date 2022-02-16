import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";

import { categories } from "../../utils/categories";
import { Category } from "../Category";

type Props = {
  selectedCategory: string;
  handleCategorySelect: (categoryId: string) => void;
  enableCheck?: boolean
};

export function CategorySelect({ selectedCategory, handleCategorySelect, enableCheck = false }: Props) {
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
          enableCheck={enableCheck}
        />
      ))}
    </ScrollView>
  );
}
