import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, spacing, strings } from '../constants';

const CustomDrawer = ({ navigation }) => {
  const menuItems = [
    {
      id: 1,
      label: 'Home',
      icon: 'home-outline',
      onPress: () => navigation.navigate('Home'),
    },
    {
      id: 2,
      label: 'Moods',
      icon: 'emoticon-outline',
      onPress: () => alert('Moods'),
    },
    {
      id: 3,
      label: 'Contact with us',
      icon: 'phone-outline',
      onPress: () => alert('Contact'),
    },
    {
      id: 4,
      label: 'Sign out',
      icon: 'logout',
      onPress: () => alert('Sign out'),
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.drawerContent}>
        {/* Close Button */}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.closeDrawer()}
        >
          <MaterialCommunityIcons
            name="close"
            size={24}
            color={colors.text.secondary}
          />
        </TouchableOpacity>

        {/* User Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <MaterialCommunityIcons name="account" size={40} color="#fff" />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Ryan Fonseca</Text>
            <Text style={styles.userHandle}>ryanfonseka2</Text>
          </View>
        </View>

        {/* Menu Items */}
        <ScrollView
          style={styles.menuContainer}
          showsVerticalScrollIndicator={false}
        >
          {menuItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={item.onPress}
              activeOpacity={0.7}
            >
              <MaterialCommunityIcons
                name={item.icon}
                size={22}
                color={colors.text.secondary}
              />
              <Text style={styles.menuLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* App Version */}
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>App Version 1.2.5</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  drawerContent: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: spacing.sm,
    marginBottom: spacing.md,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xl,
    paddingVertical: spacing.md,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#CD7F7F',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 4,
  },
  userHandle: {
    fontSize: 14,
    color: colors.text.secondary,
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
  },
  menuLabel: {
    fontSize: 16,
    color: colors.text.primary,
    marginLeft: spacing.md,
  },
  versionContainer: {
    paddingVertical: spacing.lg,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.background.surface,
  },
  versionText: {
    fontSize: 12,
    color: colors.text.tertiary,
  },
});

export default CustomDrawer;
