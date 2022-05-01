import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function SignIn() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.input}> Hi there, Welcome to the nlw</Text>
      <TextInput
        style={styles.realInput}
        placeholder="please write something"
        onChangeText={setText}
      />
      <Text style={styles.input}>Is this what you wrote?</Text>
      <Text style={styles.input}>{text}</Text>
    </View>
  );
}
