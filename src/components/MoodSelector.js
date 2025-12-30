import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { commonStyles } from '../utilities/theme';

const moods = [
  { id: 1, label: 'Happiness', emoji: '😊' },
  { id: 2, label: 'Anxiety', emoji: '😟' },
  { id: 3, label: 'Stress', emoji: '😣' },
  { id: 4, label: 'Sadness', emoji: '😢' },
  { id: 5, label: 'Calm', emoji: '😌' },
  { id: 6, label: 'Anger', emoji: '😠' },
];

const MoodSelector = ({ onMoodSelect }) => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodPress = mood => {
    setSelectedMood(mood.id);
    if (onMoodSelect) {
      onMoodSelect(mood);
    }
  };

  return (
    <View style={commonStyles.moodContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={commonStyles.moodsScrollContainer}
      >
        {moods.map(mood => (
          <TouchableOpacity
            key={mood.id}
            style={[
              commonStyles.moodItem,
              selectedMood === mood.id && commonStyles.moodItemSelected,
            ]}
            onPress={() => handleMoodPress(mood)}
            activeOpacity={0.7}
          >
            <View style={commonStyles.moodEmojiContainer}>
              <Text style={commonStyles.moodEmoji}>{mood.emoji}</Text>
            </View>
            <Text
              style={[
                commonStyles.moodLabel,
                selectedMood === mood.id && commonStyles.moodLabelSelected,
              ]}
            >
              {mood.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default MoodSelector;
