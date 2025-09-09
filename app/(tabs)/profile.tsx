import { Text, View } from "react-native";
import { Background } from "@/components/Background";

export default function Profile() {
  return (
    <Background
      backgroundImage={require("../../assets/images/splash-icon.png")}
    >
      <View>
        <Text className='font-bold text-3xl mt-3'>Profile</Text>
      </View>
    </Background>
  );
}
