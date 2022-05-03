import React, { useState } from "react";
import { View } from "react-native";
import { Avatar } from "../../components/Avatar";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { styles } from "./style";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
};

export function Home() {
  const [category, setCategory] = useState("");
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </View>
    </Background>
  );
}
