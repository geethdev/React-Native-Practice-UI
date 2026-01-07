import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AppHeader from '../components/AppHeader';
import { commonStyles } from '../constants';
import usePosts from '../hooks/usePosts';
import PostsList from '../components/PostsList';

export default function ProfileScreen({ navigation }) {
  const { posts, loading, error, refresh } = usePosts();

  return (
    <View style={commonStyles.screenContainer}>
      <AppHeader navigation={navigation} />

      {loading ? (
        <View style={commonStyles.centeredContent}>
          <ActivityIndicator size="large" />
        </View>
      ) : error ? (
        <View style={commonStyles.centeredContent}>
          <Text style={{ color: 'red' }}>Failed to load posts.</Text>
        </View>
      ) : (
        <View style={{ flex: 1, padding: 12 }}>
          <PostsList posts={posts} />
        </View>
      )}
    </View>
  );
}
