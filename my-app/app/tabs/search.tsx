
import {View,TextInput,Text,StyleSheet,TouchableOpacity,FlatList,Image,useWindowDimensions,} from "react-native";
import { useState, useMemo } from "react";
import Feather from "react-native-vector-icons/Feather";

const categories = [
  {
    title: "Podcasts",
    color: "#E13300",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=60",
  },
  {
    title: "Live Events",
    color: "#7358FF",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=60",
  },
  {
    title: "Made For You",
    color: "#1E3264",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=60",
  },
  {
    title: "New Releases",
    color: "#E8115B",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=60",
  },
  {
    title: "OPM",
    color: "#BA5D07",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
  },
  {
    title: "Hip-Hop Turns 50",
    color: "#D84000",
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=400&q=60",
  },
  {
    title: "Pop",
    color: "#148A08",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=60",
  },
  {
    title: "Hip-Hop",
    color: "#D84000",
    image:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=400&q=60",
  },
];

const numColumns = 2;

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const window = useWindowDimensions();
  const itemSize = useMemo(() => window.width / numColumns - 30, [window.width]);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={[styles.box, { backgroundColor: item.color, width: itemSize, height: itemSize * 0.6 }]}>
      <Text style={[styles.boxText, { paddingRight: itemSize * 0.45 }]}>{item.title}</Text>
      <Image
        source={{ uri: item.image }}
        style={[
          styles.boxImage,
          {
            right: -itemSize * 0.3,
            width: itemSize * 0.6,
            height: itemSize * 0.45,
          },
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Search</Text>
        <TouchableOpacity>
          <Feather name="camera" size={24} color="#555" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="What do you want to listen to?"
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <Text style={[styles.result, { fontWeight: "bold" }]}>Browse all</Text>

      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
        extraData={itemSize}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },
  headerRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#aaa",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 55,
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  result: {
    fontSize: 22,
    color: "#fff",
    marginBottom: 10,
  },
  grid: {
    paddingBottom: 60,
  },
  box: {
    borderRadius: 6,
    marginBottom: 20,
    justifyContent: "flex-start",
    padding: 10,
    overflow: "hidden",
    position: "relative",
  },
  boxImage: {
    position: "absolute",
    bottom: -15,
    borderRadius: 10,
    resizeMode: "cover",
    transform: [{ rotate: "27deg" }],
  },
  boxText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 4,
    position: "relative",
    zIndex: 10,
    flexWrap: "wrap",
  },
});
