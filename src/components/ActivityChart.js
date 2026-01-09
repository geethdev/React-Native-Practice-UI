import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../constants';

const chartData = [0, 1, 2, 1.5, 3, 5, 8];
const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export default function ActivityChart() {
  const maxValue = Math.max(...chartData);
  const chartHeight = 100;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.icon}>📊</Text>
        <Text style={styles.title}>Recent Activity</Text>
      </View>
      <View style={styles.chartContainer}>
        {/* Grid lines */}
        <View style={styles.gridLines}>
          <View style={styles.gridLine} />
          <View style={styles.gridLine} />
          <View style={styles.gridLine} />
          <View style={styles.gridLine} />
        </View>

        {/* Bars */}
        <View style={styles.barsContainer}>
          {chartData.map((value, index) => {
            const barHeight = (value / maxValue) * chartHeight;
            return (
              <View key={index} style={styles.barWrapper}>
                <View style={styles.barContainer}>
                  <View style={[styles.bar, { height: barHeight }]} />
                  {value > 0 && <View style={styles.dot} />}
                </View>
              </View>
            );
          })}
        </View>

        {/* X-axis labels */}
        <View style={styles.xAxisLabels}>
          {daysOfWeek.map((day, index) => (
            <Text key={index} style={styles.dayLabel}>{day}</Text>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  icon: {
    fontSize: 20,
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
  },
  chartContainer: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.md,
    paddingTop: spacing.lg,
    height: 160,
  },
  gridLines: {
    position: 'absolute',
    top: spacing.lg,
    left: spacing.md,
    right: spacing.md,
    height: 100,
    justifyContent: 'space-between',
  },
  gridLine: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  barsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 100,
    paddingHorizontal: 4,
  },
  barWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  barContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
  },
  bar: {
    width: 3,
    backgroundColor: '#8BC34A',
    borderRadius: 2,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#8BC34A',
    borderWidth: 2,
    borderColor: '#fff',
    position: 'absolute',
    top: -4,
  },
  xAxisLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: spacing.sm,
    paddingHorizontal: 4,
  },
  dayLabel: {
    fontSize: 12,
    color: colors.text.secondary,
    flex: 1,
    textAlign: 'center',
  },
});
