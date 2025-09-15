import React, { useRef } from "react";
import {
  Animated,
  ImageBackground,
  ScrollView,
  View,
  Text,
  type ViewProps,
} from "react-native";

export type BackgroundProps = ViewProps & {
  header?: React.ReactNode;
  backgroundImage?: any;
  children?: React.ReactNode;
};

export function Background({header, backgroundImage, children }: BackgroundProps) {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode='cover'
      className='flex-1'
    >
      <View className='aboslute bg-transparent pt-16 pb-4 px-5'>
        {header}
      </View>
      <ScrollView className='px-5'>
        {children}
      </ScrollView>
    </ImageBackground>
  );
}
