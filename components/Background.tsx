import { View, type ViewProps } from 'react-native';
import { ThemedView } from "./ThemedView";

export type BackgroundProps = ViewProps & {
  children?: React.ReactNode;
};

export function Background({children}: BackgroundProps) {
  return <ThemedView className='pt-16'>{children}</ThemedView>;
}
