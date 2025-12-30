import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const commonStyles = StyleSheet.create({
  // Container Styles
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },

  centeredContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Text Styles
  screenTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
  },

  heading1: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text.primary,
  },

  heading2: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
  },

  heading3: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
  },

  bodyText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.text.secondary,
  },

  caption: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.text.tertiary,
  },
});
