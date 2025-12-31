import React from 'react';
import { View, ScrollView } from 'react-native';
import AppHeader from '../components/AppHeader';
import MoodSelector from '../components/MoodSelector';
import RecommendationsSection from '../components/RecommendationsSection';
import PlayRandomSection from '../components/PlayRandomSection';
import { commonStyles } from '../utilities/theme';

export default function HomeScreen({ navigation }) {
  const handleMoodSelect = mood => {
    console.log('Selected mood:', mood);
  };

  return (
    <View style={commonStyles.screenContainer}>
      <AppHeader navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MoodSelector onMoodSelect={handleMoodSelect} />
        <RecommendationsSection userName="Kevin" />
        <PlayRandomSection />
      </ScrollView>
    </View>
  );
}
