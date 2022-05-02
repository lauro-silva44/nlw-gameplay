import { View } from "react-native";
import { Avatar } from "../../components/Avatar";
import { Profile } from "../../components/Profile";
import { styles } from "./style";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
      </View>
    </View>
  );
}
