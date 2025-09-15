import {
  ImageBackground,
  ScrollView,
  View,
  type ViewProps,
} from "react-native";

export type BackgroundProps = ViewProps & {
  backgroundImage?: any;
  children?: React.ReactNode;
};

export function Background({ backgroundImage, children }: BackgroundProps) {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode='cover'
      className='flex-1'
    >
      <ScrollView className='flex-1 bg-transparent pt-16 px-5'>
        {children}
      </ScrollView>
    </ImageBackground>
  );
}
