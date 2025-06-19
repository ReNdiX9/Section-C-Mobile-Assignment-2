import { View, Text, StyleSheet } from "react-native";

export default function PremiumScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Premium Page</Text>
      <Text style={styles.text}>Welcome to the premium section of the app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#555",
  },
});
