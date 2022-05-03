import { View } from "react-native";
import { Avatar } from "../../components/Avatar";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { styles } from "./style";

export function Home() {
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>
      </View>
    </Background>
  );
}
