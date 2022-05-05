import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { styles } from "./style";
import { Appointment } from "../../components/Appointments";
import { ListDivider } from "../../components/ListDivider";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [category, setCategory] = useState("");
  const navigation = useNavigation();
  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:04h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da m10",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:04h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da m10",
    },
  ];
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmmetCreate() {
    navigation.navigate({ name: "AppointmmetCreate" });
  }
  function handleAppointmmetDetails() {
    navigation.navigate({ name: "AppointmmetDetails" });
  }
  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmmetCreate} />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <View style={styles.content}>
        <ListHeader title={"Partidas agendas"} subtitle={"Total 6"} />
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment data={item} onPress={handleAppointmmetDetails} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Background>
  );
}
