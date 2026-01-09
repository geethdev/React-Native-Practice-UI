import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing } from '../constants';

export default function Card({
  icon,
  title,
  subtitle,
  onPress,
  style,
  iconStyle,
  titleStyle,
  subtitleStyle,
  children,
}) {
  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container
      style={[styles.card, style]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      {icon ? <Text style={[styles.icon, iconStyle]}>{icon}</Text> : null}
      <View style={styles.content}>
        {title ? <Text style={[styles.title, titleStyle]}>{title}</Text> : null}
        {subtitle ? (
          <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
        ) : null}
        {children}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 12,
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    marginRight: spacing.sm,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
    color: colors.text.secondary,
  },
});
