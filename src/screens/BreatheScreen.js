import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import InnerPeaceScore from '../components/InnerPeaceScore';
import ActivityChart from '../components/ActivityChart';
import StatusCards from '../components/StatusCards';
import BreatheRelaxCard from '../components/BreatheRelaxCard';
import { commonStyles, spacing } from '../constants';

export default function BreatheScreen({ navigation }) {
  const handleBreathePress = () => {
    console.log('Start breathing exercise');
  };

  return (
    <View style={commonStyles.screenContainer}>
      <AppHeader navigation={navigation} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <InnerPeaceScore score={0} />
        <ActivityChart />
        <StatusCards />
        <BreatheRelaxCard onPress={handleBreathePress} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
});
