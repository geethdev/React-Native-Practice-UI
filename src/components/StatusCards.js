import React from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import Card from './Card';
import { spacing } from '../constants';

const items = [
  { id: 'fresh', icon: '💜', title: 'Fresh Soul', subtitle: 'New Start' },
  { id: 'stuck', icon: '🔥', title: 'Stuck', subtitle: 'Stress Level' },
  { id: 'calm', icon: '🌿', title: 'Calm', subtitle: 'Peace Level' },
  { id: 'focus', icon: '🧠', title: 'Focus', subtitle: 'Concentration' },
];

export default function StatusCards({ onPressItem }) {
  const windowWidth = Dimensions.get('window').width;
  const totalHorizontalPadding = spacing.md * 3; // left + right + gap
  const cardWidth = (windowWidth - totalHorizontalPadding) / 2;

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={i => i.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        snapToInterval={cardWidth + spacing.md}
        decelerationRate="fast"
        renderItem={({ item, index }) => (
          <View style={[styles.itemWrapper, index !== 0 && { marginLeft: spacing.md }]}> 
            <View style={{ width: cardWidth }}>
              <Card
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                onPress={() => onPressItem?.(item)}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  list: {
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
  },
  itemWrapper: {
    alignItems: 'flex-start',
  },
});
