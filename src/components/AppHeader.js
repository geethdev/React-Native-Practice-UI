import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, spacing, strings } from '../constants';

const AppHeader = ({ navigation, title = strings.APP_TITLE }) => {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            alert(strings.MENU_PRESSED);
          }}
          style={styles.iconButton}
        >
          <Icon name="menu" size={24} color={colors.text.primary} />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity
          onPress={() => {
            // Handle notification press
            alert(strings.NOTIFICATIONS_PRESSED);
          }}
          style={styles.iconButton}
        >
          <Icon name="bell-outline" size={24} color={colors.text.primary} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.background.primary,
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: colors.text.primary,
    letterSpacing: 0.5,
  },
});

export default AppHeader;
