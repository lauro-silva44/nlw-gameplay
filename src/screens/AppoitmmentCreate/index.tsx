import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { Feather } from "@expo/vector-icons";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import {
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  View,
  Platform,
  ScrollView,
} from "react-native";
import BannerImg from "../../assets/banner.png";
import { styles } from "./styles";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ButtonIcon } from "../../components/ButtonIcon";
import { CategorySelect } from "../../components/CategorySelect";
import { useState } from "react";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";
import { Guild, GuildProps } from "../../components/Guild";

export function AppointmmetCreate() {
  const [category, setCategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Background>
        <ScrollView>
          <Header title="Agendar partida" />
          <Text
            style={[
              styles.label,
              { marginTop: 36, marginBottom: 18, marginLeft: 24 },
            ]}
          >
            Categoria
          </Text>
          <CategorySelect
            hasCheckBox
            setCategory={setCategory}
            categorySelected={category}
          />
          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guild.icon ? <GuildIcon /> : <View style={styles.image} />}
                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : " Selecione um servidor"}
                  </Text>
                </View>
                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>
            <View style={styles.field}>
              <View>
                <Text style={styles.label}>Dia e mês</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
              <View>
                <Text style={styles.label}>Hora e minuto</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>
            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.caractersLimit}>Max de 100 caracteres</Text>
            </View>
            <TextArea multiline maxLength={100} numberOfLines={5} />
            <View style={styles.footer}>
              <Button title={"Agendar"} />
            </View>
          </View>
        </ScrollView>
      </Background>
      <ModalView visible={openGuildsModal}>
        <Guilds handleGuildsSelected={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
