import { Text, View } from "react-native";
import { Device } from "@/types";

type Props = {
  device: Device;
};

export function HifiControl({ device }: Props) {
  // create hifi control UI here
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-2xl font-bold mt-4'>Hifi Control</Text>
      <Text className='text-lg mt-2'>[Hifi controls go here]</Text>
      <Text className='text-lg mt-2'>Device Name: {device.name}</Text>
      <Text className='text-lg mt-2'>Location: {device.location}</Text>
      <Text className='text-lg mt-2'>
        Status: {device.status ? "Online" : "Offline"}
      </Text>
    </View>
  );
}
