import { BorderlessButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { Fontisto } from "@expo/vector-icons";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import { FlatList, ImageBackground, Text, View } from "react-native";
import BannerImg from "../../assets/banner.png";
import { styles } from "./styles";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmmetDetails() {
  const members = [
    {
      id: "1",
      username: "Nancy",
      avatar_url: "https://github.com/lauro-silva44.png",
      status: "online",
    },
    {
      id: "2",
      username: "Nancy",
      avatar_url: "https://github.com/lauro-silva44.png",
      status: "",
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subtitle={`Total de ${members.length}`} />
      <FlatList
        style={styles.members}
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
