import React from 'react';
import { View, Text, FlatList, StyleSheet, Animated } from 'react-native';
import useAnimatedMount from '../hooks/useAnimatedMount';

function PostItem({ item, index }) {
  const opacity = useAnimatedMount(300, index * 50);

  return (
    <Animated.View style={[styles.card, { opacity }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body} numberOfLines={3}>
        {item.body}
      </Text>
    </Animated.View>
  );
}

export default function PostsList({ posts }) {
  return (
    <FlatList
      data={posts}
      keyExtractor={i => String(i.id)}
      renderItem={({ item, index }) => <PostItem item={item} index={index} />}
      contentContainerStyle={styles.list}
      ItemSeparatorComponent={() => <View style={styles.sep} />}
    />
  );
}

const styles = StyleSheet.create({
  list: { paddingBottom: 24 },
  sep: { height: 10 },
  card: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 6 },
  body: { fontSize: 14, color: '#444' },
});
