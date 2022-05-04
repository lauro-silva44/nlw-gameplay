import { Image } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";

export function GuildIcon() {
  const uri =
    "https://logodownload.org/wp-content/uploads/2017/11/discord-logo-0.png";
  return <Image style={styles.container} source={{ uri }} resizeMode="cover" />;
}
