import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Background } from "@/components/Background";

export default function HomeScreen() {
  const mockDeviceList = [
    { deviceId: 1, name: "Camera 1", type: "camera", status: "online", location: "Front Door" },
    { deviceId: 2, name: "Light 1", type: "light", status: "offline", location: "Living Room" },
    { deviceId: 3, name: "Soundbox 1", type: "hifi", status: "online", location: "Kitchen" },
  ];

  const [deviceList, setDeviceList] = useState(Array<any>());

  const getDeviceList = async () => {
    // Simulate fetching device list from an API
    return new Promise((resolve) => {
      setTimeout(() => {
        setDeviceList(deviceList);
      }, 1000);
    });
  }

  useEffect(() => {
    getDeviceList();
  }, []);

  return (
    <Background
      backgroundImage={require("../../assets/images/splash-icon.png")}
    >
      <View>
        <Text className='font-bold text-3xl mt-3'>My Home</Text>
      </View>
      {/* show the device list here */}
      <View>
        {deviceList ? (
          deviceList.map((device: any) => (
            <View key={device.deviceId} className="p-4 border-b border-gray-200">
              <Text className="text-lg font-semibold">{device.name}</Text>
              <Text className="text-sm text-gray-500">{device.type} - {device.status} - {device.location}</Text>
            </View>
          ))
        ) : (
          <Text>Loading devices...</Text>
        )}
      </View>
    </Background>
  );
}
