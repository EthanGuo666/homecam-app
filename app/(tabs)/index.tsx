import { Image } from "expo-image";
import { View, Text, Platform, StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Background } from "@/components/Background";

export default function HomeScreen() {
  return (
    <Background>
      <ThemedView>
        <ThemedText className='font-bold'>My Home</ThemedText>
      </ThemedView>
    </Background>
  );
}
