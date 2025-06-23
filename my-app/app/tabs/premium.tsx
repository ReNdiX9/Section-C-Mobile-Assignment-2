import { Entypo, Feather, FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PremiumScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <View style={{ flexGrow: 1 }}>
        {/* Top image section */}
        <View style={styles.topImageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1700951372714-98979a8803a4?q=80&w=1362&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }}
            style={styles.topImage}
            
          />
        </View>
        {/* Premium logo and heading */}
        <View style={{ paddingHorizontal: 20, marginTop: -5 }}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
              }}
              style={{ width: 28, height: 28, marginRight: 8 }}
            />
            <Text style={styles.premiumLabel}>Premium</Text>
          </View>
          <Text style={styles.heading}>Get more out of your music{"\n"}with Premium Individual.</Text>
          <Text style={styles.subheading}>
            You can't upgrade to Premium in the app. We know, it's not ideal.
          </Text>
        </View>
        {/* Why join Premium */}
        <View style={styles.whyJoinContainer}>
          <Text style={styles.whyJoinTitle}>Why join Premium?</Text>
          <View style={styles.benefitRow}>
            <Ionicons name="volume-mute-outline" size={22} color="#fff" style={styles.benefitIcon} />
            <Text style={styles.benefitText}>Ad-free music listening</Text>
          </View>
          <View style={styles.benefitRow}>
            <Feather name="download" size={22} color="#fff" style={styles.benefitIcon} />
            <Text style={styles.benefitText}>Download to listen offline</Text>
          </View>
          <View style={styles.benefitRow}>
            <MaterialIcons name="shuffle" size={22} color="#fff" style={styles.benefitIcon} />
            <Text style={styles.benefitText}>Play songs in any order</Text>
          </View>
          <View style={styles.benefitRow}>
            <Entypo name="sound-mix" size={22} color="#fff" style={styles.benefitIcon} />
            <Text style={styles.benefitText}>High audio quality</Text>
          </View>
          <View style={styles.benefitRow}>
            <FontAwesome5 name="user-friends" size={20} color="#fff" style={styles.benefitIcon} />
            <Text style={styles.benefitText}>Listen with friends in real time</Text>
          </View>
          <View style={styles.benefitRow}>
            <MaterialIcons name="queue-music" size={22} color="#fff" style={styles.benefitIcon} />
            <Text style={styles.benefitText}>Organize listening queue</Text>
          </View>
        </View>
        {/* Available plans */}
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={styles.availablePlans}>Available plans</Text>
          <View style={styles.songCard}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/en/0/09/The_Weeknd_-_Double_Fantasy.png",
              }}
              style={styles.songImage}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.songTitle}>Double Fantasy (with Future)</Text>
              <Text style={styles.songSubtitle}>The Weeknd, Future</Text>
            </View>
            <Ionicons name="play" size={24} color="#fff"/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topImageContainer: {
    width: "100%",
    height: 160,
    backgroundColor: "#111",
    marginBottom: 10,
  },
  topImage: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  premiumLabel: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 1,
  },
  heading: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 2,
    lineHeight: 34,
  },
  subheading: {
    color: "#aaa",
    fontSize: 14,
    marginBottom: 18,
  },
  whyJoinContainer: {
    backgroundColor: "#181818",
    borderRadius: 12,
    marginHorizontal: 20,
    padding: 18,
    marginTop: 10,
  },
  whyJoinTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 14,
  },
  benefitRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  benefitIcon: {
    marginRight: 14,
    width: 26,
    textAlign: "center",
  },
  benefitText: {
    color: "#fff",
    fontSize: 15,
  },
  availablePlans: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 14,
  },
  songCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#a04d1a",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  songImage: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginRight: 8,
  },
  songTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  songSubtitle: {
    color: "#fff",
    fontSize: 13,
    opacity: 0.8,
    marginTop: 2,
  },
});