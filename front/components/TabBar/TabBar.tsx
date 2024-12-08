import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import TabBarButton, { RouteName } from '@/components/TabBar/TabBarButton';

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const primaryColor = '#0891b2';
  const greyColor = '#737373';

  // Type guard to validate RouteName
  const isRouteName = (name: string): name is RouteName => {
    return ["Home", "Myfixtures", "Billing", "AccountInfo"].includes(name);
  };

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? (options.tabBarLabel as string)
            : options.title !== undefined
            ? options.title
            : route.name;

        // Skip invalid routes
        if (['_sitemap', '+not-found'].includes(route.name) || !isRouteName(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton
          key={route.name}
          style={styles.tabbarItem}
          onPress={onPress}
          onLongPress={onLongPress}
          isFocused={isFocused}
          routeName={route.name} // Safe now because of type guard
          color={isFocused ? primaryColor : greyColor}
          label={label}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 5,  // Further reduced from 15
    left: 10,    // Reduced even more
    right: 10,   // Reduced even more
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Even distribution with less spacing
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 6, // Further reduced padding
    borderRadius: 25,   // Smaller radius
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 }, // Reduced shadow for a less pronounced effect
    shadowRadius: 4,
    shadowOpacity: 0.1,
    borderColor: '#ADD8e6', // Adding the border color #ADD8e6
    borderWidth: 3, // Adding border width
  },
  tabbarItem: {
    flex: 1, // Ensures buttons take equal width
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabBar;
