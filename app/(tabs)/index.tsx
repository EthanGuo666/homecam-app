import { View, Text } from "react-native";
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
