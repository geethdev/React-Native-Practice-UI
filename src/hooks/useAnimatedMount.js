import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { fadeIn } from '../utils/animations';

/**
 * Hook for fade-in animation on component mount
 * @param {number} duration - Animation duration in ms
 * @param {number} delay - Delay before starting animation
 * @returns {Animated.Value} - Animated value for opacity
 */
export default function useAnimatedMount(duration = 300, delay = 0) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      fadeIn(opacity, duration).start();
    }, delay);

    return () => clearTimeout(timer);
  }, [opacity, duration, delay]);

  return opacity;
}
