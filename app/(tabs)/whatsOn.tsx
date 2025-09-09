import { View, Text } from "react-native";
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
