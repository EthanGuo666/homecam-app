import { View } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";

type Props = {
  deviceType: string;
};

export function DeviceCard({ deviceType }: Props) {
  const iconColor = "#aeaeae";

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
          <IconSymbol size={36} name='hifispeaker' color={iconColor} />
        );
      default:
    }
  };

  return <View>{deviceIcon(deviceType)}</View>;
}
