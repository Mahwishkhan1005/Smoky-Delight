// app/menu.tsx
import { StyleSheet, Text, View } from "react-native";

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Our Menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#010302",
  },
  text: { color: "#C5A059", fontSize: 24 },
});
