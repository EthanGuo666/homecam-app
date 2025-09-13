import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Background } from "@/components/Background";
import { DeviceCard } from "@/components/DeviceCard";

export default function HomeScreen() {
  const mockDeviceList = [
    {
      deviceId: 1,
      name: "Camera 1",
      type: "camera",
      status: "online",
      location: "Front Door",
    },
    {
      deviceId: 2,
      name: "Light 1",
      type: "light",
      status: "offline",
      location: "Living Room",
    },
    {
      deviceId: 3,
      name: "Soundbox 1",
      type: "hifi",
      status: "online",
      location: "Kitchen",
    },
  ];

  const [deviceList, setDeviceList] = useState<any[]>(mockDeviceList);

  useEffect(() => {
    setDeviceList(deviceList);
  }, [deviceList]);

  return (
    <Background
      backgroundImage={require("../../assets/images/splash-icon.png")}
    >
      <View>
        <Text className='font-bold text-3xl mt-3'>My Home</Text>
      </View>
      {/* show the device list here */}
      <View>
        {deviceList.map((device) => (
          <View key={device.deviceId}>
            <DeviceCard deviceType={device.type}/>
          </View>
        ))}
      </View>
    </Background>
  );
}
