import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";

type Props = {
  deviceType: string;
  deviceName?: string;
  deviceLocation?: string;
  devicePower?: boolean;
};

export function DeviceCard({
  deviceType,
  deviceName,
  deviceLocation,
  devicePower,
}: Props) {
  const iconColor = "#919191";
  const powerOnColor = "#007aff";

  // each card takes 3/7 of screen width
  const { width } = Dimensions.get("window");
  const cardWidth = (3 / 7) * width;

  // device parameters
  const name = deviceName ?? "Device";
  const type = deviceType ?? "unknown";
  const location = deviceLocation ?? "Unknown Location";
  const powerOn = devicePower ?? false;

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
    <View
      style={{ width: cardWidth }}
      className='h-32 bg-white/90 rounded-3xl p-4 relative'
    >
      <TouchableOpacity className='absolute top-3 left-3'>
        {deviceIcon(type)}
      </TouchableOpacity>

      <TouchableOpacity className='absolute top-3 right-3'>
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
    </View>
  );
}
