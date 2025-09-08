import { Image } from "expo-image";
import { Platform, StyleSheet, View, Text } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Background } from "@/components/Background";

export default function WhatsOn() {
  return (
    <Background backgroundImage={require("../../assets/images/splash-icon.png")}>
      <View>
        <Text className='font-bold text-3xl mt-3'>{"What's On"}</Text>
      </View>
    </Background>
  );
}
