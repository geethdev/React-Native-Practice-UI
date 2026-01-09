import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { commonStyles, colors, spacing, typography } from '../constants';

const backgroundImage = { uri: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80' };

export default function ExploreScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.full}>
      <AppHeader navigation={navigation} />

      <ImageBackground source={backgroundImage} style={styles.bg} imageStyle={styles.bgImage}>
        <View style={styles.topRow}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
            accessibilityRole="button"
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            <Icon name="arrow-back-ios" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Dream of the Cosmos</Text>
          <Text style={styles.subTitle}>Composer{`\n`}Bibilandeniye Mahanama</Text>

          <Text style={styles.description} numberOfLines={4}>
            Immerse yourself in celestial harmonies that open space in your mind and guide you into deep relaxation. Let the cosmic atmosphere carry you into serenity.
          </Text>

          <View style={styles.controlsTop}>
            <TouchableOpacity style={styles.iconBtn} accessibilityRole="button">
              <Icon name="favorite" size={26} color="#fff" />
            </TouchableOpacity>
            <View style={styles.progressWrap}>
              <View style={styles.progressBarBackground} />
              <View style={[styles.progressBarFill, { width: '36%' }]} />
            </View>
            <TouchableOpacity style={styles.iconBtn} accessibilityRole="button">
              <Icon name="share" size={26} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.timeRow}>
            <Text style={styles.time}>00:00</Text>
            <Text style={styles.time}>-02:40</Text>
          </View>

          <View style={styles.playControls}>
            <TouchableOpacity style={styles.smallBtn} accessibilityRole="button">
              <Icon name="shuffle" size={28} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediumBtn} accessibilityRole="button">
              <Icon name="skip-previous" size={36} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.playBtn} accessibilityRole="button">
              <Icon name="play-arrow" size={40} color={colors.primary || '#000'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediumBtn} accessibilityRole="button">
              <Icon name="skip-next" size={36} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.smallBtn} accessibilityRole="button">
              <Icon name="repeat" size={28} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomIcons}>
            <TouchableOpacity style={styles.footerIcon} accessibilityRole="button"><Icon name="music-note" size={24} color="#fff" /></TouchableOpacity>
            <TouchableOpacity style={styles.footerIcon} accessibilityRole="button"><Icon name="add" size={24} color="#fff" /></TouchableOpacity>
            <TouchableOpacity style={styles.footerIcon} accessibilityRole="button"><Icon name="info" size={24} color="#fff" /></TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  full: { flex: 1, backgroundColor: colors.background || '#000' },
  bg: { flex: 1, justifyContent: 'flex-end' },
  bgImage: { resizeMode: 'cover' },
  topRow: { position: 'absolute', top: spacing.md, left: spacing.md },
  backText: { color: '#fff' },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl + 20,
    backgroundColor: 'rgba(0,0,0,0.18)',
  },
  title: { color: '#fff', fontSize: 20, fontWeight: '700', marginBottom: 6 },
  subTitle: { color: 'rgba(255,255,255,0.9)', fontSize: 12, marginBottom: 12 },
  description: { color: 'rgba(255,255,255,0.9)', fontSize: 13, lineHeight: 18, marginBottom: 18, maxWidth: '85%' },
  controlsTop: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  iconBtn: { padding: 8 },
  icon: { color: '#fff', fontSize: 18 },
  progressWrap: { flex: 1, marginHorizontal: 12, height: 6, justifyContent: 'center' },
  progressBarBackground: { position: 'absolute', left: 0, right: 0, height: 6, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.15)' },
  progressBarFill: { position: 'absolute', left: 0, height: 6, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.9)' },
  timeRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 18 },
  time: { color: 'rgba(255,255,255,0.85)', fontSize: 12 },
  playControls: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 },
  smallBtn: { padding: 12 },
  mediumBtn: { padding: 14 },
  playBtn: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  playIcon: { fontSize: 28, color: colors.primary || '#000' },
  bottomIcons: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 6 },
  footerIcon: { padding: 8 },
});
