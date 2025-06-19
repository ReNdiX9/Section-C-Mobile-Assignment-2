import { View, TextInput, Text, StyleSheet } from "react-native";
import { useState } from "react";

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Page</Text>
      <TextInput style={styles.input} placeholder="Search..." value={query} onChangeText={setQuery} />
      <Text style={styles.result}>You searched: {query}</Text>
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
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#aaa",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 15,
    fontSize: 16,
    color: "#333",
  },
});
