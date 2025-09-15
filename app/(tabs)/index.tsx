import { useState, useEffect, useCallback } from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";

import { Background } from "@/components/Background";
import { DeviceCard } from "@/components/DeviceCard";
import { Device } from "@/types";

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
    {
      deviceId: 4,
      name: "Camera 1",
      type: "camera",
      status: true,
      location: "Front Door",
    },
    {
      deviceId: 5,
      name: "Light 1",
      type: "light",
      status: false,
      location: "Living Room",
    },
    {
      deviceId: 6,
      name: "Soundbox 1",
      type: "hifi",
      status: true,
      location: "Kitchen",
    },
    {
      deviceId: 7,
      name: "Camera 1",
      type: "camera",
      status: true,
      location: "Front Door",
    },
    {
      deviceId: 8,
      name: "Light 1",
      type: "light",
      status: false,
      location: "Living Room",
    },
    {
      deviceId: 9,
      name: "Soundbox 1",
      type: "hifi",
      status: true,
      location: "Kitchen",
    },
    {
      deviceId: 10,
      name: "Camera 1",
      type: "camera",
      status: true,
      location: "Front Door",
    },
    {
      deviceId: 11,
      name: "Light 1",
      type: "light",
      status: false,
      location: "Living Room",
    },
    {
      deviceId: 12,
      name: "Light 1",
      type: "light",
      status: false,
      location: "Living Room",
    },
  ];

  const [deviceList, setDeviceList] = useState<any[]>(mockDeviceList);
  const router = useRouter();

  const handlePowerButtonClick = useCallback(
    (device: Device) => {
      // api call to switch on the device power here

      // if successful, set that device power state here
      const updatedDeviceList = deviceList.map((d) => {
        if (d.deviceId === device.deviceId) {
          return { ...d, status: !d.status };
        }
        return d;
      });
      setDeviceList(updatedDeviceList);
    },
    [deviceList]
  );

  const handleCardClick = useCallback((device: Device) => {
    // navigate to what's on page
    console.log("Card clicked");
    router.push({
      pathname: "/(tabs)/whatsOn",
      params: { device: JSON.stringify(device) },
    });
  }, []);

  return (
    <Background
      header={
        <View>
          <Text className='font-bold text-3xl mt-3'>My Home</Text>
        </View>
      }
      // backgroundImage={require("../../assets/images/splash-icon.png")}
    >
      {/* show the device list here */}
      <View className='flex-row flex-wrap justify-between'>
        {deviceList.map((device) => (
          <View key={device.deviceId} className='mt-3'>
            <DeviceCard
              device={device}
              onPowerButtonClick={handlePowerButtonClick}
              onCardClick={handleCardClick}
            />
          </View>
        ))}
      </View>
    </Background>
  );
}
