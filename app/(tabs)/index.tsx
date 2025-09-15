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
      status: true,
      location: "Front Door",
    },
    {
      deviceId: 2,
      name: "Light 1",
      type: "light",
      status: false,
      location: "Living Room",
    },
    {
      deviceId: 3,
      name: "Soundbox 1",
      type: "hifi",
      status: true,
      location: "Kitchen",
    },
  ];

  const [deviceList, setDeviceList] = useState<any[]>(mockDeviceList);

  useEffect(() => {
    setDeviceList(deviceList);
  }, [deviceList]);

  return (
    <Background
      header={
        <View>
          <Text className='font-bold text-3xl mt-3'>My Home</Text>
        </View>
      }
      backgroundImage={require("../../assets/images/splash-icon.png")}
    >
      {/* show the device list here */}
      <View>
        {deviceList.map((device) => (
          <View key={device.deviceId} className='mt-3'>
            <DeviceCard
              deviceType={device.type}
              deviceName={device.name}
              deviceLocation={device.location}
              devicePower={device.status}
            />
          </View>
        ))}
      </View>
    </Background>
  );
}
