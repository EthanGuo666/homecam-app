import React, { useCallback } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Device } from "@/types";

type Props = {
  device: Device;
  onPowerButtonClick: (device: Device) => void;
  onCardClick: (device: Device) => void;
};

export function DeviceCard({ device, onPowerButtonClick, onCardClick }: Props) {
  const iconColor = "#919191";
  const powerOnColor = "#007aff";

  // each card takes 3/7 of screen width
  const { width } = Dimensions.get("window");
  const cardWidth = (3 / 7) * width;

  // device parameters
  const name = device.name ?? "Device";
  const type = device.type ?? "unknown";
  const location = device.location ?? "Unknown Location";
  const powerOn = device.status ?? false;

  const deviceIcon = (deviceType: string) => {
    switch (deviceType) {
      case "camera":
        return <IconSymbol size={36} name='video.fill' color={iconColor} />;
      case "light":
        return (
          <IconSymbol size={36} name='lightbulb.led.fill' color={iconColor} />
        );
      case "hifi":
        return (
          <IconSymbol size={36} name='hifispeaker.fill' color={iconColor} />
        );
      default:
        return <IconSymbol size={36} name='questionmark' color={iconColor} />;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ width: cardWidth }}
      className='h-32 bg-white/90 rounded-3xl p-4 relative'
      onPress={() => onCardClick(device)}
    >
      <TouchableOpacity className='absolute top-3 left-3'>
        {deviceIcon(type)}
      </TouchableOpacity>

      <TouchableOpacity
        className='absolute top-3 right-3'
        onPressOut={() => onPowerButtonClick(device)}
      >
        <IconSymbol
          size={36}
          name='power.circle.fill'
          color={powerOn ? powerOnColor : iconColor}
        />
      </TouchableOpacity>

      <View className='absolute bottom-3 left-3'>
        <Text className='text-lg font-semibold text-gray-800'>{name}</Text>
        <Text className='text-sm text-gray-500'>{location}</Text>
      </View>
    </TouchableOpacity>
  );
}
