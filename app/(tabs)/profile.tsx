import { Text, View } from "react-native";
import { Background } from "@/components/Background";

export default function Profile() {
  return (
    <Background
      header={
        <View>
          <Text className='font-bold text-3xl mt-3'>Profile</Text>
        </View>
      }
      backgroundImage={require("../../assets/images/splash-icon.png")}
    ></Background>
  );
}
