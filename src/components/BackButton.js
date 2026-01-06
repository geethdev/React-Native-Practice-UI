import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BackButton({ onPress, label = 'Back', style, textStyle }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
      accessibilityRole="button"
    >
      <Text style={[styles.label, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  label: {
    color: '#007AFF',
    fontSize: 16,
  },
});
