import { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";

import IllustratuinImg from "../../assets/illustration.png";
import { styles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
  return (
    <View style={styles.container}>
      <Image
        source={IllustratuinImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {"\n"}e organize suas{"\n"}
          jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {"\n"}
          favoritos com os seus amigos
        </Text>
        <ButtonIcon title={"Entrar com o Discord"} activeOpacity={0.7} />
      </View>
    </View>
  );
}
