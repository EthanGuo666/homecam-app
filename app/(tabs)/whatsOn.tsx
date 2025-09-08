import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Background } from "@/components/Background";

export default function WhatsOn() {
  return (
    <Background>
      <ThemedView>
        <ThemedText>WhatsOn</ThemedText>
      </ThemedView>
    </Background>
  );
}
