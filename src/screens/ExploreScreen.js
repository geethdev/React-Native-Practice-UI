import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default function ExploreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.title}>Explore</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF' 
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { 
    fontSize: 18, 
    fontWeight: '600' 
  },
});
