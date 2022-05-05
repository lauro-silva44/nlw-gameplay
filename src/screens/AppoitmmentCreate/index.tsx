import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { Feather } from "@expo/vector-icons";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import { FlatList, ImageBackground, Text, View } from "react-native";
import BannerImg from "../../assets/banner.png";
import { styles } from "./styles";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ButtonIcon } from "../../components/ButtonIcon";
import { CategorySelect } from "../../components/CategorySelect";
import { useState } from "react";

export function AppointmmetCreate() {
  const [category, setCategory] = useState("");
  return (
    <Background>
      <Header title="Agendar partida" />
      <Text style={styles.label}>Categoria</Text>
      <CategorySelect
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
      />
      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            <View style={styles.image}>
              <View style={styles.selectBody}>
                <Text style={styles.label}>Selecione um servidor</Text>
              </View>
              <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={18}
              />
            </View>
          </View>
        </RectButton>
      </View>
    </Background>
  );
}
