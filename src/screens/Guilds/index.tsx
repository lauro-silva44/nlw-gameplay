import { FlatList, View } from "react-native";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { styles } from "./styles";

type Props = {
  handleGuildsSelected: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildsSelected }: Props) {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: "imag.png",
      owner: true,
    },
    {
      id: "2",
      name: "100Sombra",
      icon: "imag.png",
      owner: true,
    },
    {
      id: "3",
      name: "100Sombra",
      icon: "imag.png",
      owner: true,
    },
    {
      id: "4",
      name: "100Sombra",
      icon: "imag.png",
      owner: true,
    },
    {
      id: "5",
      name: "100Sombra",
      icon: "imag.png",
      owner: true,
    },
    {
      id: "6",
      name: "100Sombra",
      icon: "imag.png",
      owner: true,
    },
    {
      id: "7",
      name: "100Sombra",
      icon: "imag.png",
      owner: true,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildsSelected(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.guilds}
      />
    </View>
  );
}
