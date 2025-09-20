import { Text, View } from "react-native";
import { Device } from "@/types";

type Props = {
  device: Device;
};

export function CameraControl({ device }: Props) {

  return (
    <View className='justify-center items-center h-full w-full'>
      <View className='h-96 w-full bg-gray-900 rounded-lg'></View>
      <Text className='text-2xl font-bold mt-4'>Camera Control</Text>
      <Text className='text-lg mt-2'>Device Name: {device.name}</Text>
      <Text className='text-lg mt-2'>Location: {device.location}</Text>
      <Text className='text-lg mt-2'>
        Status: {device.status ? "Online" : "Offline"}
      </Text>
    </View>
  );
}
