import React, { useEffect } from 'react';
import { ViewStyle, TextStyle, Pressable, StyleSheet, PressableProps } from 'react-native';
import Animated, { 
  interpolate, 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring 
} from 'react-native-reanimated';
import { icons } from '@/assets/icons';

export type RouteName = "Home" | "Myfixtures" | "Billing" | "AccountInfo";

interface TabBarButtonProps extends PressableProps {
  isFocused: boolean;
  label: string;
  routeName: RouteName; // Use RouteName here
  color: string;
}

const TabBarButton: React.FC<TabBarButtonProps> = ({ 
  isFocused, 
  label, 
  routeName, 
  color, 
  ...pressableProps 
}) => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { duration: 350 });
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
    const top = interpolate(scale.value, [0, 1], [0, 8]);

    return {
      transform: [{ scale: scaleValue }],
      top,
    } as ViewStyle;
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      opacity,
    } as TextStyle;
  });

  return (
    <Pressable {...pressableProps} style={styles.container}>
      <Animated.View style={[animatedIconStyle]}>
        {icons[routeName] && icons[routeName]({ color })}
      </Animated.View>
      
      <Animated.Text style={[{ color, fontSize: 11 }, animatedTextStyle]}>
        {label}
      </Animated.Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2, // Reduced gap between icon and text
  },
});

export default TabBarButton;
