import { Image } from "expo-image";
import { StyleSheet, Text, Platform, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Background } from "@/components/Background";

export default function Profile() {
  return (
    <Background backgroundImage={require("../../assets/images/splash-icon.png")}>
      <View>
        <Text className='font-bold text-3xl mt-3'>Profile</Text>
      </View>
    </Background>
  );
}
