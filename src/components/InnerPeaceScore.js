import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../constants';

export default function InnerPeaceScore({ score = 0 }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Inner Peace Score</Text>
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>🌱</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.cardTitle}>Grow Your Tree</Text>
          <Text style={styles.cardSubtitle}>
            Track your progress and watch your Tree of Peace grow with each mindful moment
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 12,
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#E8F5E9',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  icon: {
    fontSize: 28,
  },
  content: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: colors.text.secondary,
    lineHeight: 18,
  },
});
