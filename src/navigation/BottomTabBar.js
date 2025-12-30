import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, spacing, typography, shadows } from '../utilities/theme';

const ICONS = {
  Home: { name: 'home-outline' },
  Explore: { name: 'apps-box-outline' },
  Favourite: { name: 'heart-outline' },
  Breathe: { name: 'leaf-outline' },
  Profile: { name: 'account-outline' },
};

export default function BottomTabBar({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.tabBar,
        { paddingBottom: Math.max(insets.bottom, spacing.xs) },
      ]}
    >
      {state.routes.map((route, index) => {
        const focused = index === state.index;
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const icon = ICONS[route.name] || { name: 'circle' };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={focused ? { selected: true } : {}}
            onPress={onPress}
            style={styles.tabItem}
            activeOpacity={0.7}
          >
            <MaterialCommunityIcons
              name={focused ? icon.name.replace('-outline', '') : icon.name}
              size={26}
              color={focused ? colors.primary : colors.accent}
            />
            <Text style={[styles.label, focused && styles.labelActive]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    paddingTop: spacing.sm,
    paddingHorizontal: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    ...shadows.subtleTop,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  label: {
    fontSize: typography.size.sm,
    color: colors.accent,
    marginTop: spacing.xs / 2,
  },
  labelActive: {
    color: colors.primary,
    fontWeight: typography.weight.medium,
  },
});
