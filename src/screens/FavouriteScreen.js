import React from 'react';
import { View, ScrollView } from 'react-native';
import AppHeader from '../components/AppHeader';
import { commonStyles } from '../constants';
import BreathTimer from '../components/BreathTimer';
import ProgressBarCard from '../components/ProgressBarCard';
import StopButton from '../components/StopButton';

export default function FavouriteScreen({ navigation }) {
  const handleStop = () => {
    console.log('stop');
  };

  return (
    <View style={commonStyles.screenContainer}>
      <AppHeader navigation={navigation} />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <BreathTimer count={3} timer={'00:47'} label={'Breathe in'} />

        <ProgressBarCard
          icon={'💬'}
          label={'Instruction Progress'}
          progress={0.6}
        />
        <ProgressBarCard icon={'🎵'} label={'Music Progress'} progress={0.45} />

        <StopButton onPress={handleStop} />
      </ScrollView>
    </View>
  );
}
