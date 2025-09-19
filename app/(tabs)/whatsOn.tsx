import { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

import { Background } from "@/components/Background";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { CameraControl } from "@/components/CameraControl";
import { LightControl } from "@/components/LightControl";
import { HifiControl } from "@/components/HifiControl";
import { Device } from "@/types";

export default function WhatsOn() {
  const params = useLocalSearchParams();
  const device: Device | null = params.device
    ? JSON.parse(params.device as string)
    : null;

  const renderDeviceDetails = (device: Device) => {
    switch (device.type) {
      case "camera":
        return <CameraControl device={device} />;
      case "light":
        return <LightControl device={device} />;
      case "hifi":
        return <HifiControl device={device} />;
      default:
        return (
          <View className='flex-1 justify-center items-center'>
            <Text className='text-2xl font-bold mt-4'>{device.name}</Text>
            <Text className='text-lg mt-2'>Location: {device.location}</Text>
            <Text className='text-lg mt-2'>
              Status: {device.status ? "Online" : "Offline"}
            </Text>
          </View>
        );
    }
  };

  return (
    <Background
      header={
        <View>
          <Text className='font-bold text-3xl mt-3'>{"What's On"}</Text>
        </View>
      }
    >
      {device ? (
        renderDeviceDetails(device)
      ) : (
        <View className='flex-1 justify-center items-center mt-72 mb-5'>
          <IconSymbol size={64} name='doc.text.magnifyingglass' color='#888' />
          <Text className='mt-4'>Please select a device from</Text>
          <Text>home screen device list</Text>
        </View>
      )}
    </Background>
  );
}
