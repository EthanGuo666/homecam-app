import { ImageBackground, View, type ViewProps } from "react-native";

export type BackgroundProps = ViewProps & {
  backgroundImage?: any;
  children?: React.ReactNode;
};

export function Background({ backgroundImage, children }: BackgroundProps) {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      className="flex-1"
    >
      <View className='flex-1 bg-transparent pt-16 px-5'>{children}</View>
    </ImageBackground>
  );
}
