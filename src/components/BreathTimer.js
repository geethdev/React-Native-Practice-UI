import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { colors, spacing } from '../constants';

export default function BreathTimer({
  count = 3,
  timer = '00:47',
  label = 'Breathe in',
}) {
  const ripple1 = useRef(new Animated.Value(0)).current;
  const ripple2 = useRef(new Animated.Value(0)).current;
  const innerScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const singleRipple = (anim, dur = 2600) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, {
            toValue: 1,
            duration: dur,
            easing: Easing.inOut(Easing.cubic),
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: 1600,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
          }),
          Animated.delay(400),
        ]),
      );

    const r1 = singleRipple(ripple1, 2600);
    const r2 = singleRipple(ripple2, 3000);

    // start both loops with a longer offset for a very gentle alternation
    r1.start();
    const timeoutRef = setTimeout(() => r2.start(), 1000);

    // subtle inner pulse using smoother, slower easing
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(innerScale, {
          toValue: 0.97,
          duration: 1800,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(innerScale, {
          toValue: 1,
          duration: 1800,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
    );
    pulse.start();

    return () => {
      if (r1 && typeof r1.stop === 'function') r1.stop();
      if (r2 && typeof r2.stop === 'function') r2.stop();
      if (pulse && typeof pulse.stop === 'function') pulse.stop();
      clearTimeout(timeoutRef);
    };
  }, []);

  // allow ripples to scale slightly larger than the container so, when clipped,
  // they reach the circle corners; outer container has overflow:hidden
  const rippleStyle = (anim, max = 1.2) => ({
    transform: [
      {
        scale: anim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.05, max],
        }),
      },
    ],
    opacity: anim.interpolate({
      inputRange: [0, 0.35, 0.7, 1],
      outputRange: [0.9, 0.45, 0.18, 0],
    }),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breath Holding Test</Text>
      <Text style={styles.timerSmall}>{timer}</Text>

      <View style={styles.circleOuter}>
        <Animated.View
          style={[styles.ripple, rippleStyle(ripple1, 1.25)]}
          pointerEvents="none"
        />
        <Animated.View
          style={[styles.ripple, styles.rippleAlt, rippleStyle(ripple2, 1.05)]}
          pointerEvents="none"
        />

        {/* center dot driven by ripple1 so it appears as a dot then quickly fades as ripple expands */}
        <Animated.View
          style={[
            styles.centerDot,
            {
              transform: [
                {
                  scale: ripple1.interpolate({
                    inputRange: [0, 0.08, 0.5, 1],
                    outputRange: [0.05, 0.9, 0.4, 0],
                  }),
                },
              ],
              opacity: ripple1.interpolate({
                inputRange: [0, 0.08, 0.5, 1],
                outputRange: [1, 0.9, 0.35, 0],
              }),
            },
          ]}
          pointerEvents="none"
        />

        <Animated.Text
          style={[
            styles.count,
            { transform: [{ scale: innerScale }], position: 'absolute' },
          ]}
        >
          {count}
        </Animated.Text>
      </View>

      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginBottom: spacing.lg },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  timerSmall: {
    fontSize: 12,
    color: colors.text.secondary,
    marginBottom: spacing.sm,
  },
  circleOuter: {
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: '#F8B0BE',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  ripple: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(244,143,177,0.45)',
  },
  rippleAlt: {
    backgroundColor: 'rgba(242,163,184,0.35)',
  },
  centerDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
    position: 'absolute',
  },
  circleInner: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#F2A3B8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: { fontSize: 48, color: '#fff', fontWeight: '700' },
  label: { fontSize: 14, color: colors.text.secondary, marginTop: spacing.sm },
});
