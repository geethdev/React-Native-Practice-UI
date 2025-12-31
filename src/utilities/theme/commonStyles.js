import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { spacing } from './spacing';

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

  // Mood Selector Styles
  moodContainer: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
  },

  moodsScrollContainer: {
    paddingVertical: spacing.sm,
  },

  moodItem: {
    alignItems: 'center',
    marginRight: spacing.lg,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 16,
    backgroundColor: colors.background.surface,
    minWidth: 80,
  },

  moodItemSelected: {
    backgroundColor: colors.primary,
  },

  moodEmojiContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },

  moodEmoji: {
    fontSize: 32,
  },

  moodLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.text.secondary,
  },

  moodLabelSelected: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  // Recommendations Section Styles
  recommendationSection: {
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
  },

  recommendationScroll: {
    paddingHorizontal: spacing.md,
  },

  recommendationCard: {
    marginRight: spacing.md,
    width: 180,
  },

  recommendationImage: {
    width: 180,
    height: 120,
    borderRadius: 12,
    backgroundColor: colors.background.surface,
  },

  recommendationTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.primary,
    marginTop: spacing.sm,
  },

  recommendationSubtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.text.secondary,
    marginTop: spacing.xxs,
  },

  // Play Random Section Styles
  playRandomSection: {
    paddingTop: spacing.md,
    paddingBottom: spacing.xl,
  },

  horizontalGridRow: {
    paddingHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },

  horizontalGridCard: {
    width: 140,
    marginRight: spacing.md,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.background.surface,
    position: 'relative',
  },

  horizontalGridCardImage: {
    width: 140,
    height: 140,
    backgroundColor: colors.background.surface,
  },

  favoriteButton: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  gridCardContent: {
    padding: spacing.sm,
  },

  gridCardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: spacing.xxs,
  },

  gridCardSubtitle: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.text.secondary,
  },
});
