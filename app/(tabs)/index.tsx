import { Image } from "expo-image";
import { View, Text, Platform, StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Background } from "@/components/Background";

export default function HomeScreen() {
  return (
    <Background
      backgroundImage={require("../../assets/images/splash-icon.png")}
    >
      <View>
        <Text className='font-bold text-3xl mt-3'>My Home</Text>
      </View>
    </Background>
  );
}
