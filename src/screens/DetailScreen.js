import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles, strings } from '../constants';
import BackButton from '../components/BackButton';

export default function DetailScreen({ route, navigation }) {
  const { item } = route.params || {};
  return (
    <SafeAreaView
      edges={['top']}
      style={[commonStyles.screenContainer, styles.container]}
    >
      <BackButton onPress={() => navigation.goBack()} />

      {item ? (
        <>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </>
      ) : (
        <Text style={styles.noData}>No item data</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 6,
  },
  noData: {
    fontSize: 14,
    color: '#666',
  },
});
