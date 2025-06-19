import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = ["All", "Music", "Podcasts", "Audiobooks"];

export default function CategoryChips() {
  const [active, setActive] = useState("All");

  return (
    <SafeAreaView style={{ padding: 10, backgroundColor: "#000" }}>
      <View style={styles.container}>
        {/* Avatar */}
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>Y</Text>
        </View>

        {/* Horizontal ScrollView */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => setActive(category)}
              style={[styles.chip, active === category && styles.chipActive]}
            >
              <Text style={[styles.chipText, active === category && styles.chipTextActive]}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* Playlist section*/}
      </View>
      <View style={styles.playlists}>
        <View style={styles.playlist}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{ width: 60, height: 60 }}
          />
          <Text style={styles.playlistText}>🥶</Text>
          <Text style={styles.playlistDots}>⚪⚪⚪</Text>
        </View>
        <View style={styles.playlist}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1619568828861-e2e4caf90026?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlrZWR8ZW58MHx8MHx8fDA%3D",
            }}
            style={{ width: 60, height: 60 }}
          />
          <Text style={[styles.playlistText, { fontSize: 12, color: "white", right: 60, fontWeight: "bold", top: 22 }]}>
            Liked Songs
          </Text>
          <Text style={styles.playlistDots}>⚪⚪⚪</Text>
        </View>
        <View style={styles.playlist}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1746105839114-fbc9c81fcb17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{ width: 60, height: 60 }}
          />
          <Text style={[styles.playlistText, { fontSize: 12, color: "white", right: 90, fontWeight: "bold", top: 22 }]}>
            Radio
          </Text>
          <Text style={styles.playlistDots}>⚪⚪⚪</Text>
        </View>
      </View>
      <View>
        <Text style={{ color: "#fff", fontSize: 18, marginTop: 20, fontWeight: "700" }}>Made For Yehor</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
  },
  avatar: {
    backgroundColor: "#CBA7F5",
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  avatarText: {
    color: "#000",
    fontWeight: "bold",
  },
  chipsContainer: {
    flexDirection: "row",
  },
  chip: {
    backgroundColor: "#2A2A2A",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    marginRight: 10,
  },
  chipActive: {
    backgroundColor: "#1DB954",
  },
  chipText: {
    color: "#fff",
    fontSize: 14,
  },
  chipTextActive: {
    color: "#000",
    fontWeight: "bold",
  },
  playlists: {
    backgroundColor: "#000",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    marginTop: 12,
    gap: 12,
  },
  playlist: {
    width: 190,
    height: 60,
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "#2A2A2A",
  },
  playlistText: {
    position: "absolute",
    right: 100,
    top: 20,
  },
  playlistDots: {
    position: "absolute",
    right: 10,
    top: 25,
    fontSize: 10,
  },
});
