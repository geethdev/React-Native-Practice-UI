import { Animated } from 'react-native';

// Reusable animation configurations
export const animationConfig = {
  timing: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  spring: {
    damping: 15,
    mass: 1,
    stiffness: 150,
  },
};

// Fade in animation
export const fadeIn = (animatedValue, duration = animationConfig.timing.normal, toValue = 1) => {
  return Animated.timing(animatedValue, {
    toValue,
    duration,
    useNativeDriver: true,
  });
};

// Fade out animation
export const fadeOut = (animatedValue, duration = animationConfig.timing.fast) => {
  return Animated.timing(animatedValue, {
    toValue: 0,
    duration,
    useNativeDriver: true,
  });
};

// Slide in from bottom
export const slideInFromBottom = (animatedValue, duration = animationConfig.timing.normal) => {
  return Animated.timing(animatedValue, {
    toValue: 0,
    duration,
    useNativeDriver: true,
  });
};

// Scale animation (for press effects)
export const scaleAnimation = (animatedValue, toValue = 0.95, duration = animationConfig.timing.fast) => {
  return Animated.spring(animatedValue, {
    toValue,
    damping: animationConfig.spring.damping,
    mass: animationConfig.spring.mass,
    stiffness: animationConfig.spring.stiffness,
    useNativeDriver: true,
  });
};

// Stagger animation helper
export const stagger = (animations, delay = 50) => {
  return Animated.stagger(delay, animations);
};

// Sequence animation helper
export const sequence = (animations) => {
  return Animated.sequence(animations);
};

// Parallel animation helper
export const parallel = (animations) => {
  return Animated.parallel(animations);
};
