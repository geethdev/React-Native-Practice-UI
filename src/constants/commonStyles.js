import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

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
    fontFamily: typography.family.semibold,
    color: colors.text.primary,
  },

  heading1: {
    fontSize: 24,
    fontFamily: typography.family.bold,
    color: colors.text.primary,
  },

  heading2: {
    fontSize: 20,
    fontFamily: typography.family.semibold,
    color: colors.text.primary,
  },

  heading3: {
    fontSize: 16,
    fontFamily: typography.family.semibold,
    color: colors.text.primary,
  },

  bodyText: {
    fontSize: 14,
    fontFamily: typography.family.regular,
    color: colors.text.secondary,
  },

  caption: {
    fontSize: 12,
    fontFamily: typography.family.regular,
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
    fontFamily: typography.family.medium,
    color: colors.text.secondary,
  },

  moodLabelSelected: {
    color: '#FFFFFF',
    fontFamily: typography.family.semibold,
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
    fontFamily: typography.family.semibold,
    color: colors.text.primary,
    marginTop: spacing.sm,
  },

  recommendationSubtitle: {
    fontSize: 12,
    fontFamily: typography.family.regular,
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
    fontFamily: typography.family.semibold,
    color: colors.text.primary,
    marginBottom: spacing.xxs,
  },

  gridCardSubtitle: {
    fontSize: 11,
    fontFamily: typography.family.regular,
    color: colors.text.secondary,
  },

  // My Routine Section Styles
  routineSection: {
    paddingTop: spacing.md,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.md,
  },

  routineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  routineHeaderIcons: {
    flexDirection: 'row',
    gap: spacing.sm,
  },

  routineIconButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },

  routineItem: {
    backgroundColor: colors.background.surface,
    borderRadius: 12,
    marginBottom: spacing.sm,
    overflow: 'hidden',
  },

  routineContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
  },

  routineTime: {
    fontSize: 12,
    fontFamily: typography.family.regular,
    color: colors.text.tertiary,
    marginBottom: spacing.xxs,
  },

  routineActivity: {
    fontSize: 15,
    fontFamily: typography.family.medium,
    color: colors.text.primary,
  },

  addActivityButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
    marginTop: spacing.sm,
    borderRadius: 12,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#CCCCCC',
    backgroundColor: 'transparent',
  },

  addActivityContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },

  addActivityText: {
    fontSize: 15,
    fontFamily: typography.family.medium,
    color: '#00BCD4',
  },
});
