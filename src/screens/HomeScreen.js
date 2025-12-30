import React from 'react';
import { View, Text } from 'react-native';
import AppHeader from '../components/AppHeader';
import { commonStyles } from '../utilities/theme';

export default function HomeScreen({ navigation }) {
  return (
    <View style={commonStyles.screenContainer}>
      <AppHeader navigation={navigation} />
      <View style={commonStyles.centeredContent}>
        <Text style={commonStyles.screenTitle}>Home</Text>
      </View>
    </View>
  );
}
