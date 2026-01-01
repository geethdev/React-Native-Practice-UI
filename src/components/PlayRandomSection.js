import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { commonStyles } from '../utilities/theme';

const playRandomData = [
  {
    id: 1,
    title: 'Random Song 1',
    subtitle: 'Person 1',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
  },
  {
    id: 2,
    title: 'Random Song 2 ',
    subtitle: 'Person 2',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400',
  },
  {
    id: 3,
    title: 'Random Song 3',
    subtitle: 'Person 3',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400',
  },
  {
    id: 4,
    title: 'Random Song 4',
    subtitle: 'Person 4',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=400',
  },
  {
    id: 5,
    title: 'random Song 5',
    subtitle: 'Person 5',
    image: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?w=400',
  },
  {
    id: 6,
    title: 'Random Song 6',
    subtitle: 'Person 6',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400',
  },
];

const PlayRandomSection = () => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = id => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCardPress = item => {
    console.log('Playing:', item.title);
  };

  // Split data into 2 rows
  const halfLength = Math.ceil(playRandomData.length / 2);
  const topRow = playRandomData.slice(0, halfLength);
  const bottomRow = playRandomData.slice(halfLength);

  const renderCard = item => (
    <TouchableOpacity
      key={item.id}
      style={commonStyles.horizontalGridCard}
      onPress={() => handleCardPress(item)}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: item.image }}
        style={commonStyles.horizontalGridCardImage}
        resizeMode="cover"
      />
      <TouchableOpacity
        style={commonStyles.favoriteButton}
        onPress={() => toggleFavorite(item.id)}
        activeOpacity={0.7}
      >
        <Icon
          name={favorites[item.id] ? 'heart' : 'heart-outline'}
          size={20}
          color={favorites[item.id] ? '#FF6B6B' : '#FFFFFF'}
        />
      </TouchableOpacity>
      <View style={commonStyles.gridCardContent}>
        <Text style={commonStyles.gridCardTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={commonStyles.gridCardSubtitle} numberOfLines={1}>
          {item.subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={commonStyles.playRandomSection}>
      <Text style={commonStyles.sectionTitle}>Play Something Random</Text>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={commonStyles.horizontalGridRow}
        >
          {topRow.map(renderCard)}
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={commonStyles.horizontalGridRow}
        >
          {bottomRow.map(renderCard)}
        </ScrollView>
      </View>
    </View>
  );
};

export default PlayRandomSection;
