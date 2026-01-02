import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { commonStyles, strings } from '../constants';

const recommendations = [
  {
    id: 1,
    title: 'The Light Beyond (Stereo)',
    subtitle: 'Thushara Wedage',
    image: 'https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=400',
  },
  {
    id: 2,
    title: 'Northern Aurora',
    subtitle: 'Rev. Biladenyiya',
    image: 'https://images.unsplash.com/photo-1483086431886-3590a88317fe?w=400',
  },
  {
    id: 3,
    title: 'Title 3',
    subtitle: 'Name 3',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
  },
  {
    id: 4,
    title: 'Title 4',
    subtitle: 'Name 4',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400',
  },
];

const RecommendationsSection = ({ userName = 'Kevin' }) => {
  const handleCardPress = item => {
    alert(strings.ITEM_SELECTED(item.title, item.subtitle));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={commonStyles.recommendationCard}
      onPress={() => handleCardPress(item)}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: item.image }}
        style={commonStyles.recommendationImage}
        resizeMode="cover"
      />
      <Text style={commonStyles.recommendationTitle} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={commonStyles.recommendationSubtitle} numberOfLines={1}>
        {item.subtitle}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={commonStyles.recommendationSection}>
      <Text style={commonStyles.sectionTitle}>
        {strings.MADE_FOR_USER(userName)}
      </Text>
      <FlatList
        data={recommendations}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={commonStyles.recommendationScroll}
      />
    </View>
  );
};

export default RecommendationsSection;
