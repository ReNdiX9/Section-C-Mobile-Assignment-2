import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { height: 50 },
        tabBarInactiveTintColor: "#d1d1d1",
        headerShown: false,
        tabBarBackground: () => <div style={{ flex: 1, backgroundColor: "black" }} />,
        tabBarActiveTintColor: "#1DB954",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <AntDesign name="home" color={color} size={30} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <Ionicons name="search" color={color} size={30} />,
        }}
      />
      <Tabs.Screen
        name="premium"
        options={{
          title: "Premium",
          tabBarIcon: ({ color }) => <FontAwesome5 name="spotify" color={color} size={30} />,
        }}
      />
    </Tabs>
  );
}
